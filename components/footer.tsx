import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Premika</h3>
            <p className="text-[#E0BCA2] text-sm mb-4">
              We are a team of designers and developers that create high-quality
              eCommerce
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">ADDRESS:</span> 6688Princess Road,
                London, Greater London
              </p>
              <p>
                <span className="font-medium">PHONE:</span> (012) 800 456 789
                987
              </p>
              <p>
                <span className="font-medium">EMAIL:</span>{" "}
                Contact@pedramthemes.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-[#E0BCA2]">
              <li>
                <a href="#" className="hover:text-white">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Handbag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fashion
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-[#E0BCA2]">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  My Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Join Our Newsletter Now</h4>
            <p className="text-[#E0BCA2] text-sm mb-4">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your e-mail"
                className="rounded-r-none bg-white text-gray-900"
              />
              <Button className="rounded-l-none bg-background hover:bg-[#E0BCA2] text-foreground  font-semibold">
                SUBSCRIBE
              </Button>
            </div>
            <div className="flex space-x-3 mt-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">G</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">Y</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">V</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line and copyright */}
      <div className="border-t border-background mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-m text-[#E0BCA2]">
            © 2025 Premika. All rights reserved.
          </p>
          <p className="text-center text-xs text-[#E0BCA2]">
            Made with ❤️ by Khushi Somani and Parth Dahiya
          </p>
        </div>
      </div>
    </footer>
  );
}
