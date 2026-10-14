import { NextResponse } from "next/server";

import { smsConsent } from "@/data/legal";

const GHL_API = "https://services.leadconnectorhq.com";
const SERVICE_NEEDED_FIELD = "iebnNazGKjPOOQJg61xe";
const JOB_DETAILS_FIELD = "6Tl8k1UetZiUigqx8aIC";

const clean = (value: unknown, max = 500) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
    const token = process.env.GHL_TOKEN || process.env.GHL_Token;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!token || !locationId) {
        return NextResponse.json({ error: "The form isn't connected yet." }, { status: 503 });
    }

    const body = await request.json().catch(() => null);
    if (!body) {
        return NextResponse.json({ error: "Something went wrong." }, { status: 400 });
    }

    const firstName = clean(body.firstName, 100);
    const phone = clean(body.phone, 30);
    if (!firstName || phone.replace(/\D/g, "").length < 10) {
        return NextResponse.json({ error: "Please enter your first name and a 10-digit phone number." }, { status: 400 });
    }

    const smsCare = body.smsCare === true;
    const smsMarketing = body.smsMarketing === true;
    const submittedAt = new Date().toISOString();
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

    // Keep a record of exactly what the person agreed to, and when.
    const consentLog = [
        `Website form submitted ${submittedAt} from IP ${ip}.`,
        `Customer care texts: ${smsCare ? "AGREED" : "not agreed"}.`,
        smsCare ? `Wording: "${smsConsent.care}"` : "",
        `Marketing texts: ${smsMarketing ? "AGREED" : "not agreed"}.`,
        smsMarketing ? `Wording: "${smsConsent.marketing}"` : "",
    ].filter(Boolean).join("\n");

    const message = clean(body.message, 3000);
    const tags = ["website-lead"];
    if (smsCare) tags.push("sms-consent-care");
    if (smsMarketing) tags.push("sms-consent-marketing");

    const response = await fetch(`${GHL_API}/contacts/upsert`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "WymanMediaSite/1.0",
        },
        body: JSON.stringify({
            locationId,
            firstName,
            lastName: clean(body.lastName, 100),
            phone,
            email: clean(body.email, 200) || undefined,
            companyName: clean(body.businessName, 200),
            source: "Website contact form",
            tags,
            customFields: [
                { id: SERVICE_NEEDED_FIELD, field_value: clean(body.trade, 100) },
                { id: JOB_DETAILS_FIELD, field_value: [message, consentLog].filter(Boolean).join("\n\n") },
            ],
        }),
    });

    if (!response.ok) {
        console.error("GHL upsert failed", response.status, await response.text());
        return NextResponse.json({ error: "We couldn't send your request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
