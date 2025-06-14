import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4]">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Newsletter image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-4">НЕ УПУСТИ ВОЗМОЖНОСТЬ</p>
            <h3 className="text-3xl font-light mb-6">
              ПОДПИШИТЕСЬ НА НАШУ
              <br />
              <span className="text-amber-600">РАССЫЛКУ</span>, ЧТОБЫ
              <br />
              ПОЛУЧАТЬ ПОСЛЕДНИЕ
              <br />
              НОВОСТИ, ОБЗОРЫ И<br />
              ВЫПУСКИ КОЛЛЕКЦИЙ
            </h3>
            <div className="flex gap-2">
              <Input placeholder="Введите ваш email" className="flex-1" />
              <Button>→</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
