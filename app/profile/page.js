"use client";
import React from "react";
import { redirect } from 'next/navigation'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
const profile = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col justify-center items-center w-72 bg-slate-100 mx-auto  relative rounded-lg top-32">
        <img
          src="https://t3.ftcdn.net/jpg/09/27/94/24/360_F_927942465_j6MgO2enbUJ3IHfr2hn8ZxGfY1Dshi8p.jpg"
          alt=""
          className="w-72 rounded-lg my-5"
        />
        <div className="bg-white rounded-full size-24 z-10 top-16 absolute">
          <img
            src={session.user.image}
            alt=""
            className="size-24 rounded-full"
          />
        </div>
        <div className="flex bg-purple-500 justify-around font-semibold m-4 rounded w-72">
          <p className="m-1">Name:</p>
          <p className="m-1">{session.user.name}</p>
        </div>
        <div className="flex bg-purple-500 justify-around font-semibold m-4 rounded w-72">
          <p className="m-1">Email:</p>
          <p className="m-1">{session.user.email}</p>
        </div>
        <Link href={"/"}
          className="p-1 flex bg-green-500 justify-around font-semibold m-4 rounded w-72"
          onClick={() => {
            signOut();
          }}
        >
          Log out
        </Link>
      </div>
    );
  }
  else{
    redirect("/")
  }
};
export default profile;
