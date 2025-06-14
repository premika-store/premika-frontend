"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"

const products = [
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН",
    price: "2 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН",
    price: "2 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН ПРЕМИУМ",
    price: "3 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "ЭЛЕГАНТНОЕ ПЛАТЬЕ",
    price: "4 200 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "СТИЛЬНАЯ БЛУЗКА",
    price: "1 800 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function ProductGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const visibleCount = 3
  const slideWidth = 300 // Adjust depending on ProductCard size
  const gap = 24

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextSlide()
    }, 3500)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const getTranslateX = () => {
    // Center the current card
    const centerOffset = ((slideWidth + gap) * (currentIndex - 1))
    return `translateX(-${centerOffset}px)`
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-medium text-center mb-12">ХИТЫ ПРОДАЖ</h3>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel track */}
          <div
            ref={wrapperRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: getTranslateX(),
              gap: `${gap}px`,
              width: `${(slideWidth + gap) * products.length}px`,
            }}
          >
            {products.map((product, index) => {
              let scale = "scale-90"
              let zIndex = "z-10"
              let opacity = "opacity-80"

              if (index === currentIndex) {
                scale = "scale-110"
                zIndex = "z-20"
                opacity = "opacity-100"
              }

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${scale} ${zIndex} ${opacity}`}
                  style={{ width: `${slideWidth}px`, flexShrink: 0 }}
                >
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white shadow hover:scale-110 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white shadow hover:scale-110 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
          </Button>
        </div>
      </div>
    </section>
  )
}
