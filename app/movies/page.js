"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FetchFromTMDB } from "../components/FetchFromTMDB";
const Movies = () => {
  const Org_url = "https://image.tmdb.org/t/p/original";
  const [popmov, setpopmov] = useState([]);
  const [nowmov, setnowmov] = useState([]);
  const [topmov, settopmov] = useState([]);
  const [upcommov, setupcommov] = useState([]);
  const Getmovies = async () => {
    const pop = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/popular?original_language=hi&page=1&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&with_original_language=hi`
    );
    const now = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/now_playing?original_language=hi&page=1&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&with_original_language=hi`
    );
    const top = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/top_rated?original_language=hi&page=1&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&with_original_language=hi`
    );
    const upcom = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/upcoming?original_language=hi&page=1&primary_release_date.gte=2017-10-08&sort_by=popularity.desc&with_original_language=hi`
    );
    setpopmov(pop.results);
    setnowmov(now.results);
    settopmov(top.results);
    setupcommov(upcom.results);
  };
  useEffect(() => {
    Getmovies();
  }, []);
  return popmov.length > 0 ? (
    <div className="">
      <h2 className="text-3xl font-bold text-white px-12">Popular</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {popmov.map((item) => {
          return (
            item.poster_path && (
              <div
                key={item.id}
                className="p-2 m-2 rounded-lg flex flex-col items-center "
              >
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents "
                >
                  <img
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 flex-shrink-0 rounded-lg h-48 max-w-none "
                  />
                </Link>
                <h4 className="text-white text-xl flex w-48 justify-center items-center">
                  {item.title}
                </h4>
              </div>
            )
          );
        })}
      </div>
      <h2 className="text-3xl font-bold text-white px-12">Now Playing</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {nowmov.map((item) => {
          return (
            item.poster_path && (
              <div
                key={item.id}
                className="p-2 m-2 rounded-lg flex flex-col items-center "
              >
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents "
                >
                  <img
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 flex-shrink-0 rounded-lg h-48 max-w-none "
                  />
                </Link>
                <h4 className="text-white text-xl flex w-48 justify-center items-center">
                  {item.title}
                </h4>
              </div>
            )
          );
        })}
      </div>
      <h2 className="text-3xl font-bold text-white px-12">Trending</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {topmov.map((item) => {
          return (
            item.poster_path && (
              <div
                key={item.id}
                className="p-2 m-2 rounded-lg flex flex-col items-center "
              >
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents "
                >
                  <img
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 flex-shrink-0 rounded-lg h-48 max-w-none "
                  />
                </Link>
                <h4 className="text-white text-xl flex w-48 justify-center items-center">
                  {item.title}
                </h4>
              </div>
            )
          );
        })}
      </div>
      <h2 className="text-3xl font-bold text-white px-12">Upcoming</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {upcommov.map((item) => {
          return (
            item.poster_path && (
              <div
                key={item.id}
                className="p-2 m-2 rounded-lg flex flex-col items-center "
              >
                <Link
                  href={`/videos/${item.id}`}
                  key={item.id}
                  className="div contents "
                >
                  <img
                    src={Org_url + item.poster_path}
                    alt=""
                    className="m-2 flex-shrink-0 rounded-lg h-48 max-w-none "
                  />
                </Link>
                <h4 className="text-white text-xl flex w-48 justify-center items-center">
                  {item.title}
                </h4>
              </div>
            )
          );
        })}
      </div>
    </div>
  ) : (
    <div className="h-screen bg-black text-white text-8xl">
        <img
          src="https://i.gifer.com/ZKZg.gif"
          className="size-12 fixed top-1/2 left-1/2 z-50"
          alt="Loading..."
        />
    </div>
  );
};

export default Movies;
