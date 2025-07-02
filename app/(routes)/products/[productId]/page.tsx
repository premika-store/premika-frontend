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
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                HOME
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                SHOP
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                BLOG
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                PORTFOLIO
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                PAGES
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                CONTACT US
              </a>
            </nav>
          </div>
        </div>
      </header>

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
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pedona</h3>
              <p className="text-gray-300 text-sm mb-4">
                We are a team of designers and developers that create high-quality eCommerce, WordPress, and Shopify
                themes.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">ADDRESS:</span> 6688Princess Road, London, Greater London
                </p>
                <p>
                  <span className="font-medium">PHONE:</span> (012) 800 456 789 987
                </p>
                <p>
                  <span className="font-medium">EMAIL:</span> Contact@pedramthemes.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Handbag
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fashion
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Join Our Newsletter Now</h4>
              <p className="text-gray-300 text-sm mb-4">Get E-mail updates about our latest shop and special offers.</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your e-mail" className="rounded-r-none bg-white text-gray-900" />
                <Button className="rounded-l-none bg-red-600 hover:bg-red-700">SUBSCRIBE</Button>
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">G</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">Y</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">V</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
