"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion"; 
import Link from "next/link";

const Carousel = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  const scrollRef = useRef(); 
  const Org_url = "https://image.tmdb.org/t/p/original";

  const next = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 300;
  };

  const prev = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 300;
  };

  return (
    <div className="relative bg-black p-4 text-white">
      <h1 className="mb-4 ml-8 text-xl font-bold">{title}</h1>

      <div className="relative overflow-x-auto">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="absolute left-[20px] top-1/3 z-10 bg-black bg-opacity-60 px-3 py-2 text-white rounded-full"
        >
          ←
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="absolute right-[20px] top-1/3 z-10 bg-black bg-opacity-60 px-3 py-2 text-white rounded-full"
        >
          →
        </motion.button>
        <div
          className="hide-scrollbar flex gap-4 overflow-x-scroll overflow-y-hidden scroll-smooth"
          ref={scrollRef}
        >
          {movies.slice(0, 20).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[140px] snap-start"
            >
              <Link href={`/videos/${item.id}`}>
                <img
                  src={Org_url + item.poster_path}
                  alt={item.title}
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
