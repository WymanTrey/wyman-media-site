"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className={clsx("flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24", { "lg:justify-center": !imageSrc })}
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight, "max-w-2xl": !imageSrc })}
                >
                    <div className={clsx("w-full text-center", { "lg:text-left": imageSrc })}>
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className={clsx("mt-1.5 leading-normal text-foreground-accent", imageSrc ? "mx-auto lg:ml-0" : "mx-auto max-w-xl")}>
                                {description}
                            </p>
                        </motion.div>

                        <div className={clsx("w-full", imageSrc ? "mx-auto lg:ml-0" : "mx-auto max-w-xl")}>
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                {imageSrc && (
                    <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                        <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                            <div className="p-1.5 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                                <Image src={imageSrc} alt="title" width="384" height="480" quality={100} className="rounded-xl object-cover block" />
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
}

export default BenefitSection