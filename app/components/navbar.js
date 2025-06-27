"use client";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchOnEnter = (event) => {
    if (event.key === "Enter") {
      const searchQuery = event.target.value;
      router.push(`/search/${searchQuery}`);
    }
  };
  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  {
    if (session) {
      return (
        <>
          <nav className="fixed w-full z-50 bg-black">
            <div className="fixed flex justify-center items-center z-50 top-[50vh] left-[50vw]">
              {loading && (
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  className="size-12 fixed top-1/2 left-1/2 z-50"
                  alt="Loading..."
                />
              )}
            </div>
            <div className="flex h-16 items-center justify-between bg-black">
              <div className="right-0 flex items-center">
                <Link href={"/"} className="div">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/500px-Reliance_Jio_Logo.svg.png"
                  alt=""
                  className="m-3 h-10 "
                />
              </Link>
                <div className="flex max-md:hidden">
                  <Link
                    className="nav_items p-2 font-medium text-white"
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className="nav_items p-2 font-medium text-gray-300 focus:text-white"
                    href={"/kids"}
                  >
                    Kids
                  </Link>
                  <Link
                    className="nav_items p-2 font-medium text-gray-300 focus:text-white"
                    href={"/movies"}
                  >
                    Movies
                  </Link>
                  <Link
                    className="nav_items p-2 font-medium text-gray-300 focus:text-white"
                    href={"/shows"}
                  >
                    TV Shows
                  </Link>
                </div>
              </div>
              <div className="right flex items-center justify-center">
                {/* <div className="lg:hidden text-white">
                  <FaSearch />
                </div> */}

                <div className="searchbar bg-op flex h-11 w-80 items-center sm:justify-between rounded-full bg-gray-600 p-5 text-gray-300 max-sm:w-52 max-sm:text-sm ">
                  <Link href={`/search/${search}`} className="mr-2">
                    <FaSearch />
                  </Link>
                  <input
                    onChange={handlechange}
                    type="text"
                    name=""
                    placeholder="Movies,Shows"
                    id="5"
                    value={search}
                    className="bg-gray-600 focus:outline-none inline"
                    onKeyDown={searchOnEnter}
                  />
                  <FaMicrophone className="max-sm:hidden"/>
                </div>
                <Link
                  className="contacts m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-2xl text-white"
                  href={"/profile"}
                >
                  <img
                    src={session.user.image}
                    alt=""
                    className="rounded-full"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <nav className="fixed w-full z-50 bg-black">
          <div className="fixed flex justify-center items-center z-50 top-[50vh] left-[50vw]">
            {loading && (
              <img
                src="https://i.gifer.com/ZKZg.gif"
                className="size-12 fixed top-1/2 left-1/2 z-50"
                alt="Loading..."
              />
            )}
          </div>
          <div className="flex h-16 items-center justify-between bg-black">
            <div className="right-0 flex items-center">
              <Link href={"/"} className="div">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/500px-Reliance_Jio_Logo.svg.png"
                  alt=""
                  className="m-3 h-10 "
                />
              </Link>
              <div className="flex max-md:hidden">
                <Link className="nav_items p-2 font-medium text-white" href="">
                  Home
                </Link>
                <Link
                  className="nav_items p-2 font-medium text-gray-300"
                  href=""
                >
                  Sports
                </Link>
                <Link
                  className="nav_items p-2 font-medium text-gray-300"
                  href=""
                >
                  Movies
                </Link>
                <Link
                  className="nav_items p-2 font-medium text-gray-300"
                  href=""
                >
                  TV Shows
                </Link>
              </div>
            </div>
            <div className="right flex items-center justify-center">
              {/* <div className="lg:hidden text-white">
                <FaSearch />
              </div> */}

              <div className="searchbar bg-op flex h-11 w-80 items-center sm:justify-between rounded-full bg-gray-600 p-5 text-gray-300 max-sm:w-52 max-sm:text-sm ">
                  <Link href={`/search/${search}`} className="mr-2">
                    <FaSearch />
                  </Link>
                  <input
                    onChange={handlechange}
                    type="text"
                    name=""
                    placeholder="Movies,Shows"
                    id="5"
                    value={search}
                    className="bg-gray-600 focus:outline-none inline"
                    onKeyDown={searchOnEnter}
                  />
                  <FaMicrophone className="max-sm:hidden"/>
                </div>

              <Link
                href={"/login"}
                className="contacts m-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-2xl text-white"
              >
                <FaUserAlt />
              </Link>
            </div>
          </div>
        </nav>
      );
    }
  }
};

export default Navbar;
