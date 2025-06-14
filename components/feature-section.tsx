import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeatureSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-light mb-6">
              ПОЧУВСТВУЙ СВОЮ
              <br />
              ЗНАЧИМОСТЬ
            </h3>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Fashion model"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fashion detail"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <Button variant="outline">СМОТРЕТЬ ВСЁ</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
