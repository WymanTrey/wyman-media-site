import BenefitSection from "./Benefits/BenefitSection"
import SectionTitle from "./SectionTitle"
import Logomark from "./Logomark"

import { contractorBenefits } from "@/data/contractorBenefits"

const ContractorBenefits: React.FC = () => {
    return (
        <div className="py-10 lg:py-20">
            <Logomark className="w-6 h-6 mx-auto mb-4" />
            <SectionTitle>
                <h2 className="text-center mb-4">We handle your reputation online.</h2>
            </SectionTitle>
            <p className="mb-16 text-center">One upfront setup, then a simple monthly retainer. We build it, run it, and keep it working while you&apos;re on the job.</p>
            {contractorBenefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default ContractorBenefits
