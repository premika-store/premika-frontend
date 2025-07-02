"use client"

import type React from "react"

import { useState } from "react"
import { Star, Heart, RotateCcw, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProductInfoProps {
  title: string
  price: number
  rating: number
  reviewCount: number
  description: string
  categories: string[]
  tags: string[]
}

export function ProductInfo({ title, price, rating, reviewCount, description, categories, tags }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-current" : "stroke-current fill-transparent"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({reviewCount} customer review{reviewCount !== 1 ? "s" : ""})
          </span>
        </div>

        <div className="text-2xl font-bold text-red-600 mb-6">${price.toFixed(2)}</div>
      </div>

      <div className="prose prose-sm text-gray-600">
        <p>{description}</p>
      </div>

      <div className="flex items-center space-x-4">
        <Input type="number" value={quantity} onChange={handleQuantityChange} min="1" className="w-20" />
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2">ADD TO CART</Button>
      </div>

      <div className="flex items-center space-x-6 text-sm">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <Heart className="w-4 h-4" />
          <span>Browse Wishlist</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <RotateCcw className="w-4 h-4" />
          <span>Add to compare</span>
        </button>
      </div>

      <div className="border-t pt-6 space-y-2">
        <div className="text-sm">
          <span className="font-medium">Categories:</span>
          <span className="text-gray-600 ml-2">{categories.join(", ")}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium">Tags:</span>
          <span className="text-gray-600 ml-2">{tags.join(", ")}</span>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Share this product:</span>
          <div className="flex space-x-2">
            <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  )
}
