"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Babita", role: "Founder" },
  { name: "Asha", role: "Creative Director" },
  { name: "Ekta", role: "Lead Developer" },
  { name: "Meera", role: "UX Designer" },
  { name: "Monika", role: "Marketing Manager" },
  { name: "Indu", role: "Product Manager" },
];

const teamImages = [
  "/products/babita.PNG",
  "/products/asha.PNG",
  "/products/ekta.PNG",
  "/products/meera.JPG",
  "/products/monika.PNG",
  "/products/indu.JPG",
];

export default function TeamouselCar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [memberOpacity, setMemberOpacity] = useState(1);

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const actualIndex = (newIndex + teamMembers.length) % teamMembers.length;

      // Fade out member info
      setMemberOpacity(0);

      setTimeout(() => {
        setCurrentIndex(actualIndex);
        setMemberOpacity(1);
      }, 300);

      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating]
  );

  const getCardClasses = (index: number) => {
    const offset =
      (index - currentIndex + teamMembers.length) % teamMembers.length;
    const baseClasses =
      "absolute w-[280px] h-[380px] lg:h-[380px] lg:w-[320px] md:w-[200px] md:h-[280px] bg-white rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer";

    if (offset === 0) {
      return `${baseClasses} z-[10] scale-110 translate-z-0`;
    } else if (offset === 1) {
      return `${baseClasses} z-[5] translate-x-[200px] md:translate-x-[120px] scale-90 translate-z-[-100px] opacity-90`;
    } else if (offset === 2) {
      return `${baseClasses} z-[1] translate-x-[400px] md:translate-x-[250px] scale-80 translate-z-[-300px] opacity-70`;
    } else if (offset === teamMembers.length - 1) {
      return `${baseClasses} z-[5] translate-x-[-200px] md:translate-x-[-120px] scale-90 translate-z-[-100px] opacity-90`;
    } else if (offset === teamMembers.length - 2) {
      return `${baseClasses} z-[1] translate-x-[-400px] md:translate-x-[-250px] scale-80 translate-z-[-300px] opacity-70`;
    } else {
      return `${baseClasses} opacity-0 pointer-events-none`;
    }
  };

  const getImageClasses = (index: number) => {
    const offset =
      (index - currentIndex + teamMembers.length) % teamMembers.length;
    const baseClasses =
      "w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

    if (offset === 0) {
      return `${baseClasses} filter-none`;
    } else {
      return `${baseClasses} grayscale`;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, updateCarousel]);

  // Touch navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, updateCarousel]);

  // Auto-advancing Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      updateCarousel((currentIndex + 1) % teamMembers.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex, updateCarousel]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-cent bg-white overflow-hidden font-sans">
      {/* Title */}
      <h1 className="relative mt-16 text-[4.5rem] lg:text-[3.7rem] md:text-[2.5rem] font-black uppercase tracking-[-0.02em] pointer-events-none whitespace-nowrap bg-gradient-to-b from-[rgba(54,29,27,1)] via-[rgba(119,37,32,1)] to-transparent bg-clip-text text-transparent select-none z-30">
        Featured
      </h1>

      {/* Carousel Container */}
      <div
        className="w-full max-w-[1200px] h-[450px] relative "
        style={{ perspective: "1000px" }}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-foreground hover:bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all duration-300 text-2xl border-none outline-none pb-1 pr-1 hover:scale-110"
        >
          ‹
        </button>

        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-foreground hover:bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all duration-300 text-2xl border-none outline-none pb-1 pl-1 hover:scale-110"
        >
          ›
        </button>

        {/* Carousel Track */}
        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {teamImages.map((image, index) => (
            <div
              key={index}
              className={getCardClasses(index)}
              onClick={() => updateCarousel(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Team Member ${index + 1}`}
                fill
                className={getImageClasses(index)}
                sizes="(max-width: 768px) 200px, 280px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mt-10 transition-all duration-500">
        <h2
          className="text-foreground text-4xl md:text-3xl font-bold mb-2.5 relative inline-block transition-opacity duration-300 before:content-[''] before:absolute before:top-full before:left-[-120px] md:before:left-[-70px] before:w-[100px] md:before:w-[50px] before:h-0.5 before:bg-foreground after:content-[''] after:absolute after:top-full after:right-[-120px] md:after:right-[-70px] after:w-[100px] md:after:w-[50px] after:h-0.5 after:bg-foreground"
          style={{ opacity: memberOpacity }}
        >
          {teamMembers[currentIndex].name}
        </h2>
        <p
          className="text-tertiary text-2xl md:text-xl font-medium opacity-80 uppercase tracking-[0.1em] py-2.5 -mt-4 relative transition-opacity duration-300"
          style={{ opacity: memberOpacity }}
        >
          {teamMembers[currentIndex].role}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2.5 mt-15">
        {teamMembers.map((_, index) => (
          <div
            key={index}
            onClick={() => updateCarousel(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-foreground scale-120"
                : "bg-[#E0BCA2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
