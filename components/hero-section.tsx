import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-amber-100 to-amber-200">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Fashion model"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
            УНИКАЛЬНЫЙ СТИЛЬ,
            <br />
            СВИДЕТЕЛЬСТВУЮЩИЙ
            <br />О КАЧЕСТВЕ
          </h1>
          <Button
            variant="outline"
            className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            СМОТРЕТЬ ВСЁ
          </Button>
        </div>
      </div>
    </section>
  )
}
