"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Nav from "./Nav";
import { ChevronRight } from "lucide-react";
function Herosectionbg() {
  const arrayofbook = [
    "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash.jpg",
    "/dummy/tim-alex-1i-P178kxHQ-unsplash.jpg",
    "/dummy/varad-parulekar-Gls5DB9lk6s-unsplash.jpg",
    "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash.jpg",
    "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    "/dummy/tim-alex-1i-P178kxHQ-unsplash.jpg",
    "/dummy/varad-parulekar-Gls5DB9lk6s-unsplash.jpg",
    "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash.jpg",
    "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    "/dummy/tim-alex-1i-P178kxHQ-unsplash.jpg",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* === MOVING BOOK WALL BACKGROUND === */}
      <div
        className="absolute inset-0 flex justify-center items-center gap-3 overflow-hidden"
        style={{
          transform: "perspective(1200px) rotateY(-18deg) scale(1.3)",
          transformStyle: "preserve-3d",
        }}>
        {[...Array(6)].map((_, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col gap-3 ${
              colIndex % 2 === 0 ? "animate-marquee-up" : "animate-marquee-down"
            }`}>
            {[...Array(2)].map((_, dupIndex) => (
              <React.Fragment key={dupIndex}>
                {arrayofbook.map((src, i) => (
                  <Image
                    key={`${dupIndex}-${i}`}
                    src={src}
                    alt="book"
                    width={160}
                    height={220}
                    className="object-cover rounded-md shadow-md opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-500"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          Discover Stories Beyond Pages
        </h1>
        <p className="text-sm md:text-xl mb-6">A world of books, reimagined.</p>
        <p className="text-sm md:text-xl text-gray-200 mb-6">
          Ready to Read? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
          <input
            type="email"
            required
            placeholder="Enter email"
            className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-md border border-white/20 focus:outline-none placeholder-gray-300 w-full md:w-auto"
          />
          <div
            role="button"
            className="bg-[#e60914] flex items-center justify-center hover:bg-[#b00610] px-6 py-4 rounded-md font-semibold text-xl text-white mt-3 md:mt-0">
            Get Started <ChevronRight />
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

export default Herosectionbg;
