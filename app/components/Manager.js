"use client";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FetchFromTMDB } from "./FetchFromTMDB";
import Link from "next/link";
import { motion } from "motion/react";
import Carousel from "./Carousel";

const Manager = () => {
  const [mainmovies, setmainmovies] = useState([]);
  const [movies, setmovies] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const Org_url = "https://image.tmdb.org/t/p/original";
  const ref = useRef();
  const next = () => {
    if (ref.current) ref.current.scrollLeft += 1000;
  };

  const prev = () => {
    if (ref.current) ref.current.scrollLeft -= 1000;
  };

  const GetMovies = async () => {
    setLoading(true);
    try {
      const r = Math.floor(Math.random() * 100) + 1;
      const data = await FetchFromTMDB(
        `https://api.themoviedb.org/3/discover/movie?page=${r}&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&include_adult=false`
      );
      setmovies((prevItems) => {
        return [...prevItems, ...data.results];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const GetMainMovies = async () => {
    setLoading(true);
    try {
      const data = await FetchFromTMDB(
        `https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=2023-10-08&sort_by=popularity.desc&with_original_language=hi&include_adult=false`
      );

      setmainmovies((prevItems) => {
        return [...prevItems, ...data.results];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (count < 20) {
      GetMovies();
      setTimeout(() => setCount(count + 1), 100);
    }
    if (count == 0) {
      GetMainMovies();
    }
  }, [count]);

  const suggestions = [
    { title: "For you", id: uuidv4() },
    { title: "Cricket", id: uuidv4() },
    { title: "Movies", id: uuidv4() },
    { title: "Reality", id: uuidv4() },
    { title: "Demon Slayer", id: uuidv4() },
    { title: "Big Boss", id: uuidv4() },
    { title: "Shows", id: uuidv4() },
    { title: "Anime", id: uuidv4() },
    { title: "Premium", id: uuidv4() },
    { title: "IPL", id: uuidv4() },
    { title: "Top 10", id: uuidv4() },
    { title: "Live", id: uuidv4() },
    { title: "News", id: uuidv4() },
    { title: "TV and Movies", id: uuidv4() },
  ];

  return movies.length >= 120 ? (
    <div loading="lazy">
      <div className="fixed flex justify-center items-center z-50 top-[50vh] left-[50vw]">
        {loading && (
          <img
            src="https://i.gifer.com/ZKZg.gif"
            className="size-12 fixed top-1/2 left-1/2 z-50"
            alt="Loading..."
          />
        )}
      </div>
      <div className="break h-px bg-gray-500"></div>
      <div className="suggestions hide-scrollbar flex h-20 items-center overflow-scroll bg-black pl-16 max-w-none max-lg:font-normal max-lg:text-sm ">
        {suggestions.map((item) => (
          <Link
            href={`/search/${item.title}`}
            key={item.id}
            className="suggestions mr-4 flex h-9 items-center justify-center rounded-full bg-zinc-600 pl-3 pr-3 font-semibold text-white whitespace-nowrap"
          >
            {item.title}
          </Link>
        ))}
        <div className="black absolute right-0 h-20 w-16 max-lg:w-6 bg-black"></div>
        <div className="black absolute left-0 h-20 w-16 max-lg:w-6 bg-black"></div>
      </div>
      <div className="break h-px bg-gray-500"></div>
      <div className="relative w-full max-sm:h-[40vh] h-[75vh] bg-black overflow-hidden">
        {/* Buttons
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 bg-black/60 px-4 py-2 text-white rounded-full"
        >
          ←
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="absolute right-4 top-1/2 z-10 bg-black/60 px-4 py-2 text-white rounded-full"
        >
          →
        </motion.button> */}
        <motion.div
          ref={ref}
          className="hide-scrollbar flex gap-4 overflow-y-hidden pr-8 h-full w-[700vw]"
          animate={{ x: ['0%', '-70%'] }} 
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
        >
          {mainmovies.filter((_,index) => index !== 1 && index !== 2).slice(0, 12).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex-shrink-0 h-full w-auto max-sm:w-[100vw]"
            >
              <Link href={`/videos/${item.id}`}>
                <img
                  src={Org_url + item.backdrop_path}
                  alt={item.title}
                  className="h-full w-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
                  {item.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Carousel title="In The Spotlight" movies={movies.slice(0, 20)} />
      <Carousel title="Trending Now" movies={movies.slice(20, 40)} />
      <Carousel title="Popular Movies" movies={movies.slice(40, 60)} />
      <Carousel title="Top Rated" movies={movies.slice(60, 80)} />
      <Carousel title="New Releases" movies={movies.slice(80, 100)} />
    </div>
  ) : (
    <div className="h-screen bg-black text-white text-8xl">
      {loading && (
        <img
          src="https://i.gifer.com/ZKZg.gif"
          className="size-12 fixed top-1/2 left-1/2 z-50"
          alt="Loading..."
        />
      )}
    </div>
  );
};
export default Manager;
