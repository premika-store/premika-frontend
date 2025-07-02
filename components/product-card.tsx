"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
  position: "left" | "center" | "right"
  isAnimating: boolean
}

export default function ProductCard({ product, position, isAnimating }: ProductCardProps) {
  const getTransformClass = () => {
    switch (position) {
      case "left":
        return "translate-x-[-300px] scale-75 opacity-60"
      case "center":
        return "translate-x-0 scale-100 opacity-100"
      case "right":
        return "translate-x-[300px] scale-75 opacity-60"
      default:
        return "translate-x-0 scale-100 opacity-100"
    }
  }

  return (
    <div
      className={`absolute transition-all duration-700 ease-out ${getTransformClass()} ${
        position === "center" ? "z-20" : "z-10"
      }`}
      style={{
        transitionProperty: "transform, opacity",
      }}
    >
      <Card
        className={`w-96 h-[420px] cursor-pointer transition-all duration-300 ${
          position === "center" ? "shadow-2xl ring-2 ring-blue-500/20" : "shadow-lg hover:shadow-xl"
        }`}
      >
        <CardContent className="p-6 h-full flex flex-col">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">${product.price}</span>
              <Button
                size="sm"
                className={`${
                  position === "center" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  // Handle add to cart functionality
                  console.log(`Added ${product.name} to cart`)
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
