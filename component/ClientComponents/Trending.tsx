import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash (1).jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/dummy/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    cover: "/dummy/sincerely-media-CXYPfveiuis-unsplash.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "/dummy/thought-catalog-V5BGaJ0VaLU-unsplash.jpg",
    rating: 4.8,
  },
];

function Trending() {
  return (
    <section className="bg-[#000000] text-white  py-16 px-6 md:px-20 border-t-4 border-pink-600 rounded-t-[60px] -mt-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">🔥 Trending Books</h1>
        <p className="text-gray-400 text-sm mt-2">
          Discover the most popular books everyone is reading now
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white/10 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
            <Image
              src={book.cover}
              alt={book.title}
              width={200}
              height={280}
              className="rounded-lg w-full h-60 object-cover"
            />
            <h2 className="text-lg font-semibold mt-3 truncate">
              {book.title}
            </h2>
            <p className="text-gray-400 text-sm">{book.author}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">{book.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
