"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductGridProps {
  products: Product[]
  autoPlayInterval?: number
}

export default function ProductGrid({ products, autoPlayInterval = 3000 }: ProductGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoPlayInterval, products.length])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 700)
  }

  // Get visible products (previous, current, next)
  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length
    const nextIndex = (currentIndex + 1) % products.length

    return [
      { product: products[prevIndex], position: "left" as const },
      { product: products[currentIndex], position: "center" as const },
      { product: products[nextIndex], position: "right" as const },
    ]
  }

  const visibleProducts = getVisibleProducts()

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main carousel container */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {visibleProducts.map(({ product, position }) => (
          <ProductCard
            key={`${product.id}-${position}`}
            product={product}
            position={position}
            isAnimating={isAnimating}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg"
        onClick={handlePrevious}
        disabled={isAnimating}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            } ${isAnimating ? "pointer-events-none" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
        </Button>
      </div>
    </div>
  )
}
