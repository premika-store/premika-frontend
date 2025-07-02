import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandStatement } from "@/components/brand-statement"
import  ProductGrid  from "@/components/product-grid"
import { FeatureSection } from "@/components/feature-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BrandStatement />
      <ProductGrid />
      <FeatureSection />
      <NewsletterSection />
    </div>
  )
}
