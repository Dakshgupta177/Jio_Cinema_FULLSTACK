"use client";
import { v4 as uuidv4 } from "uuid";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchOnEnter = (event) => {
    if (event.key === "Enter") {
      const searchQuery = event.target.value;
      // alert("Searching for: " + searchQuery);
      router.push(`/search/${searchQuery}`);
    }
  };
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  {
    if (session) {
      return (
        <>
          <nav className="fixed w-full z-50 bg-black" onClick={handleClick}>
            <div className="fixed flex justify-center items-center z-50 top-[50vh] left-[50vw]">
              <div
                className={`w-16 h-16  border-t-[5px] border-white border-solid rounded-full animate-spin ${
                  loading ? "" : "hidden"
                }`}
              ></div>
            </div>
            <div className="flex h-16 items-center justify-between bg-black">
              <div className="right-0 flex items-center">
                <Link href={"/"}>
                  <img
                    src="https://www.jiocinema.com/images/payments/jio-logo.png"
                    alt=""
                    className="m-3 h-10 md:hidden "
                  />
                </Link>

                <Link href={"/"} className="img p-3 max-md:hidden">
                  <img
                    src="https://www.jiocinema.com/images/jc_logo_v2.svg"
                    alt=""
                  />
                </Link>
                <div className="premium flex h-7 w-24 items-center justify-center rounded-2xl border border-yellow-400 text-sm font-medium text-yellow-400">
                  Go Premium
                </div>
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
                    href={"shows"}
                  >
                    TV Shows
                  </Link>
                </div>
              </div>
              <div className="right flex items-center justify-center">
                <div className="lg:hidden text-white">
                  <FaSearch />
                </div>

                <div className="searchbar bg-op flex h-11 w-80 items-center justify-between rounded-full bg-gray-600 p-5 text-gray-300 max-lg:hidden">
                  <Link href={`/search/${search}`} className="">
                    <FaSearch />
                  </Link>
                  <input
                    onChange={handlechange}
                    type="text"
                    name=""
                    placeholder="Movies, Shows and more"
                    id="5"
                    value={search}
                    className="bg-gray-600 focus:outline-none"
                    onKeyDown={searchOnEnter}
                  />
                  <FaMicrophone />
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
        <nav className="fixed w-full z-50 bg-black" onClick={handleClick}>
          <div className="fixed flex justify-center items-center z-50 top-[50vh] left-[50vw]">
            <div
              className={`w-16 h-16  border-t-[5px] border-white border-solid rounded-full animate-spin ${
                loading ? "" : "hidden"
              }`}
            ></div>
          </div>
          <div className="flex h-16 items-center justify-between bg-black">
            <div className="right-0 flex items-center">
              <Link href={"/"} className="div">
                <img
                  src="https://www.jiocinema.com/images/payments/jio-logo.png"
                  alt=""
                  className="m-3 h-10 md:hidden"
                />
              </Link>
              <Link href={"/"} className="img p-3 max-md:hidden">
                <img
                  src="https://www.jiocinema.com/images/jc_logo_v2.svg"
                  alt=""
                />
              </Link>
              <div className="premium flex h-7 w-24 items-center justify-center rounded-2xl border border-yellow-400 text-sm font-medium text-yellow-400">
                Go Premium
              </div>
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
              <div className="lg:hidden text-white">
                <FaSearch />
              </div>

              <div className="searchbar bg-op flex h-11 w-80 items-center justify-between rounded-full bg-gray-600 p-5 text-gray-300 max-lg:hidden">
                <div className="">
                  <FaSearch />
                </div>
                <p>Movies, Shows and more</p>
                <FaMicrophone />
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
