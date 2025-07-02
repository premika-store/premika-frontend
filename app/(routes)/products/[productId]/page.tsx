import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { ProductInfo } from "@/components/product-info"
import { ProductTabs } from "@/components/product-tabs"
import { RelatedProducts } from "@/components/related-products"
import { Breadcrumb } from "@/components/breadcrumb"
import asha from "@/public/products/asha.png"
import babita from "@/public/products/babita.png"
import ekta from "@/public/products/ekta.png"
import jaya from "@/public/products/jaya.png"


export default function SingleProductPage() {
  // Sample product data
  const productImages = [
    asha,
    babita,
    ekta,
    jaya,
  ]

  const productData = {
    title: "Ipsum Imperdie Omittam Incididunt",
    price: 100.0,
    rating: 5,
    reviewCount: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum magna aliqua consequat ut.",
    categories: ["Clothing", "Laptops & Desktops"],
    tags: ["Clothes"],
  }

  const relatedProducts = [
    {
      id: 1,
      name: "Fusca Dapsi Enm No.",
      category: "Clothing, Laptops & Desktops",
      price: 40.0,
      originalPrice: 45.0,
      rating: 5,
      image: "/placeholder.svg?height=250&width=250&text=Product+1",
      onSale: true,
    },
    {
      id: 2,
      name: "Lacus Dignissim Pauidaulum Et",
      category: "Clothing, Laptops & Desktops",
      price: 80.0,
      rating: 5,
      image: "/placeholder.svg?height=250&width=250&text=Product+2",
    },
    {
      id: 3,
      name: "Fusce Tempor Velit",
      category: "Clothing, Handbag & Scarfs",
      price: 55.0,
      rating: 5,
      image: "/placeholder.svg?height=250&width=250&text=Product+3",
    },
    {
      id: 4,
      name: "Integer Feugiat Augue Atone",
      category: "Clothing, Laptops & Desktops",
      price: 100.0,
      rating: 5,
      image: "/placeholder.svg?height=250&width=250&text=Product+4",
    },
  ]

  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Clothing", href: "#" },
    { label: "Laptops & Desktops", href: "#" },
    { label: "Ipsum Imperdie Omittam Incididunt" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <ProductImageCarousel images={productImages} alt={productData.title} />

          {/* Product Details */}
          <ProductInfo
            title={productData.title}
            price={productData.price}
            rating={productData.rating}
            reviewCount={productData.reviewCount}
            description={productData.description}
            categories={productData.categories}
            tags={productData.tags}
          />
        </div>

        {/* Product Description Tabs */}
        <div className="mb-16">
          <ProductTabs description={productData.description} reviewCount={productData.reviewCount} />
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* Footer */}
      
    </div>
  )
}
