import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  onSale?: boolean
}

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Related products</h2>
        <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="relative">
              {product.onSale && <Badge className="absolute top-2 left-2 bg-red-600 z-10">SALE</Badge>}
              <div className="aspect-square bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-1">{product.category}</div>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < product.rating ? "fill-current" : "stroke-current fill-transparent"}`}
                  />
                ))}
              </div>
              <h3 className="font-medium text-gray-900 mb-2 hover:text-red-600 cursor-pointer transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-600 font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
