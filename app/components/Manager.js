"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FetchFromTMDB } from "./FetchFromTMDB";
import Link from "next/link";


const Manager = () => {
  const [mainmovies, setmainmovies] = useState([]);
  const [movies, setmovies] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const Org_url = "https://image.tmdb.org/t/p/original";

  const GetMovies = async () => {
    setLoading(true)
    try {
      const r = Math.floor(Math.random() * 200) + 1;
      const data = await FetchFromTMDB(
        `https://api.themoviedb.org/3/discover/movie?page=${r}&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&with_original_language=hi`
      );
      setmovies((prevItems) => {
        return [...prevItems, ...data.results];
      });
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };
  const GetMainMovies = async () => {
    setLoading(true);
    try {
      const data = await FetchFromTMDB(
        `https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=2023-10-08&sort_by=popularity.desc&with_original_language=hi`
      );

      setmainmovies((prevItems) => {
        return [...prevItems, ...data.results];
      });
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
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

      <div className="main hide-scrollbar flex overflow-scroll overflow-y-hidden bg-black ">
        {mainmovies.slice(1, 10).map((item) => (
          <Link
            
            href={`/videos/${item.id}`}
            key={item.id}
            className="div contents"
          >
            <img
              src={Org_url + item.backdrop_path}
              alt=""
              className="m-2 rounded-lg max-xl:w-[90vw] max-h-[65vh] "
            />
          </Link>
        ))}
      </div>

      {/* <div className="hide-scrollbar flex h-40 overflow-scroll bg-black pl-4 pt-10">
          {channels.map((item) => (
            <div key={item.id} className="contents bg-white">
              <img src={item.src} alt="" className="m-2 rounded" />
            </div>
          ))}
        </div> */}

      <div className="hide-scrollbar overflow-scroll bg-black p-4 text-xl font-bold text-white">
        <h1 className="mb-4 ml-8">In The Spotlight</h1>
        <div className="hide-scrollbar flex overflow-scroll">
          {movies.slice(0, 20).map((item) => (
            <Link
              href={`/videos/${item.id}`}
              key={item.id}
              className="div contents"
            >
              <img
                onClick={() => console.log(item.id)}
                src={Org_url + item.poster_path}
                alt=""
                className="m-2 h-48 rounded-lg"
              />
            </Link>
          ))}
        </div>
      </div>
      {[
        "Continue Watching",
        "Popular ",
        "Top trending",
        "New Releases",
      ].map((title, index) => (
        <div key={index} className="bg-black p-4 text-xl font-bold text-white">
          <h1 className="mb-4 ml-8">{title}</h1>
          <div className="hide-scrollbar flex overflow-scroll">
            {movies
              .slice(index * 20 + 20, (index + 1) * 20 + 20)
              .map((item) => (
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents"
                >
                  <img
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 h-48 rounded-lg"
                  />
                </Link>
              ))}
          </div>
        </div>
      ))}
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
