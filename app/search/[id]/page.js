"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchFromTMDB } from "../../components/FetchFromTMDB";
import Link from "next/link";
const search = () => {
  const Org_url = "https://image.tmdb.org/t/p/original";
  const params = useParams();
  const [searchmov, setsearchmov] = useState([]);
  const getmovie = async () => {
    const data = await FetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`
    );
    setsearchmov(data.results);
  };
  useEffect(() => {
    getmovie();
  }, []);
  return searchmov.length > 0 ? (
    <div className="hide-scrollbar flex flex-wrap justify-center">
      {searchmov.map((item) => {
        return (
          item.poster_path && (
            <div
              key={item.id}
              className="p-2 m-2 rounded-lg flex flex-col items-center"
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
  ) : (
    <div className="h-screen bg-black text-white text-8xl">
      <div className="size-12 fixed top-[50vh] left-[50vw] rounded-full  border-t-white border-black border-t-4  animate-spin border-r  "></div>
    </div>
  );
};

export default search;
