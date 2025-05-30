import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { NFTAccess } from "@/components/sections/nft-access"
import { Certification } from "@/components/sections/certification"
import { DocumentFlow } from "@/components/sections/document-flow"
import { Logistics } from "@/components/sections/logistics"
import { ContactForm } from "@/components/sections/contact-form"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-16 pb-16">
        <HeroSection />
        <NFTAccess />
        <Certification />
        <DocumentFlow />
        <Logistics />
        <ContactForm />
      </div>
    </MainLayout>
  )
}
