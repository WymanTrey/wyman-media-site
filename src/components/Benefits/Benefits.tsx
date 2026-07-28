import BenefitSection from "./BenefitSection"
import SectionTitle from "../SectionTitle"
import Logomark from "../Logomark"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="fix" className="py-10 lg:py-20">
            <Logomark className="w-6 h-6 mx-auto mb-4" />
            <SectionTitle>
                <h2 className="text-center mb-4">We handle your entire online presence.</h2>
            </SectionTitle>
            <p className="mb-16 text-center">One simple monthly subscription. We build it, run it, and keep it working while you work.</p>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits