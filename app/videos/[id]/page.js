"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchFromTMDB } from "../../components/FetchFromTMDB";
import Link from "next/link";

const videos = () => {
  const params = useParams();
  const Org_url = "https://image.tmdb.org/t/p/original";
  const [video, setvideo] = useState("");
  const [loading, setloading] = useState(false);
  const [simimovies, setsimimovies] = useState([]);
  const [info, setinfo] = useState(null);
  const Loader = async () => {
    const data = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`
    );
    if (data.results.length > 0) {
      var videoKey = `https://www.youtube.com/embed/${data.results[0].key}`;
      setvideo(videoKey);
    }
    setloading(true);
  };
  const GetMovie = async () => {
    const info = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${params.id}?`
    );
    const similar = await FetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?`
    );

    setsimimovies(similar.results);
    setinfo(info);
  };

  useEffect(() => {
    Loader();
    GetMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          {video && info ? (
            <>
              <div className="flex justify-center py-5 flex-col items-center">
                <iframe
                  className="h-[75vh] w-[100vw] max-sm:h-[50vh]"
                  src={video}
                ></iframe>
                <h3 className="text-white text-2xl m-4">
                  {info.original_title}
                </h3>
                <div className="flex gap-2 ">
                  {info.genres.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="m-2 bg-slate-500 p-2 rounded-full flex items-center justify-center"
                      >
                        <p key={item.id} className="text-white text-sm">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-white m-4">{info.overview}</p>
              </div>
              <div className="">
                <h2 className="text-3xl m-6 font-semibold text-white">
                  Similar Movies
                </h2>
                {simimovies.length !== 0 ? (
                  <div className="hide-scrollbar flex overflow-scroll mb-10">
                    {simimovies.map((item) => (
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
                ) : (
                  <div className="text-white text-xl flex justify-center items-center mb-10">
                    <h3 className="text-white text-xl text-center">
                      No Similar Movies available
                    </h3>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-white text-xl flex justify-center items-center mb-10 h-[60vh]">
              <h1 className="text-white text-5xl">No Movies available</h1>
            </div>
          )}
        </>
      ) : (
        <div className="h-screen bg-black text-white text-8xl">
          <img
            src="https://i.gifer.com/ZKZg.gif"
            className="size-12 fixed top-1/2 left-1/2 z-50"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
};

export default videos;
