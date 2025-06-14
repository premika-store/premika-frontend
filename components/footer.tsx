import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">HUKH</h4>
            <p className="text-sm text-gray-400 mb-4">
              Уникальный стиль,
              <br />
              свидетельствующий о качестве
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">МАГАЗИН</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Все товары
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Новинки
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Хиты продаж
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">ПОМОЩЬ</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Возврат товара
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Размерная сетка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">КОНТАКТЫ</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+7 (999) 999-99-99</li>
              <li>info@hukh.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 HUKH. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
