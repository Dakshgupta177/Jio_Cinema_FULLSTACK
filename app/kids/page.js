"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchFromTMDB } from "../components/FetchFromTMDB";
import Link from "next/link";
const kids = () => {
  const Org_url = "https://image.tmdb.org/t/p/original";
  const params = useParams();
  const [chhotabheem, setchhotabheem] = useState([]);
  const [ninja, setninja] = useState([]);
  const [shinchan, setshinchan] = useState([]);
  const [pokemon, setpokemon] = useState([]);
  const [tom, settom] = useState([]);
  const [motu, setmotu] = useState([]);
  const getmovie = async () => {
    const bheem = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=chhota bheem&include_adult=false&language=en-US&page=1`
    );
    const ninja = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=ninja hattori&include_adult=false&language=en-US&page=1`
    );
    const shinchan = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=shinchan&include_adult=false&language=en-US&page=1`
    );
    const pokemon = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=pokemon&include_adult=false&language=en-US&page=1`
    );
    const tom = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=tom and jerry&include_adult=false&language=en-US&page=1`
    );
    const motu = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=motu patlu&include_adult=false&language=en-US&page=1`
    );
    setchhotabheem(bheem.results);
    setninja(ninja.results);
    setshinchan(shinchan.results);
    setpokemon(pokemon.results);
    settom(tom.results);
    setmotu(motu.results);
  };
  useEffect(() => {
    getmovie();
  }, []);
  return ninja.length > 0 ? (
    <div className="">
      <h2 className="text-3xl font-bold text-white px-12">Pokemon</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {pokemon.map((item) => {
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
      <h2 className="text-3xl font-bold text-white px-12">Shinchan</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {shinchan.map((item) => {
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
      <h2 className="text-3xl font-bold text-white px-12">Ninja Hattori</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {ninja.map((item) => {
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
      <h2 className="text-3xl font-bold text-white px-12">Chhota Bheem</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {chhotabheem.map((item) => {
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
      <h2 className="text-3xl font-bold text-white px-12">Tom & Jerry</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {tom.map((item) => {
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
      <h2 className="text-3xl font-bold text-white px-12">Motu Patlu</h2>
      <div className="hide-scrollbar flex overflow-scroll bg-black p-2 text-white">
        {motu.map((item) => {
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

export default kids;
