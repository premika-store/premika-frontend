"use client"

import Link from "next/link"
import { Search, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              МАГАЗИН
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              КОЛЛЕКЦИИ
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              О БРЕНДЕ
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              HUKH
            </Link>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              ПОИСК
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              КОНТАКТЫ
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="#" className="text-lg font-medium">
                    МАГАЗИН
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    КОЛЛЕКЦИИ
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    О БРЕНДЕ
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    ПОИСК
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    КОНТАКТЫ
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
