"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FetchFromTMDB } from "../components/FetchFromTMDB";
const shows = () => {
  const Org_url = "https://image.tmdb.org/t/p/original";
  const [popshows, setpopshows] = useState([]);
  const [nowshows, setnowshows] = useState([]);
  const [topshows, settopshows] = useState([]);
  const [upcomshows, setupcomshows] = useState([]);
  const Getshows = async () => {
    const pop = await FetchFromTMDB(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=1&sort_by=popularity.desc&with_original_language=hi`
    );
    const now = await FetchFromTMDB(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=2&sort_by=popularity.desc&with_original_language=hi`
    );
    const top = await FetchFromTMDB(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=3&sort_by=popularity.desc&with_original_language=hi`
    );
    const upcom = await FetchFromTMDB(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=4&sort_by=popularity.desc&with_original_language=hi`
    );
    setpopshows(pop.results);
    setnowshows(now.results);
    settopshows(top.results);
    setupcomshows(upcom.results);
  };
  useEffect(() => {
    Getshows();
  }, []);
  return popshows.length > 0 ? (
    <div className="">
      <h2 className="text-3xl font-bold text-white px-12">Popular</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {popshows.map((item) => {
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
        {nowshows.map((item) => {
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
        {topshows.map((item) => {
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
        {upcomshows.map((item) => {
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

export default shows;
