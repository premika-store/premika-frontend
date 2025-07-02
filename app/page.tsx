import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BrandStatement } from "@/components/brand-statement";
import ProductGrid from "@/components/product-grid";
import { FeatureSection } from "@/components/feature-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import Carousel from "@/components/product-carousel";
import NavbarDemo from "@/components/resize-navbar";
// import ProductsPage from "./(routes)/products/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />
      <HeroSection />
      <BrandStatement />
      <Carousel /> {/* productCarousel */}
      {/* <ProductGrid /> */}
      {/* <FeatureSection /> */}
      <NewsletterSection />
      {/* <ProductsPage /> All Products Page */}
      <Footer />
    </div>
  );
}
