"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { redirect } from "next/navigation";
import React from "react";
const login = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-black h-screen flex flex-col items-center w-screen font-semibold">
        <Link
          href={"/"}
          className="bg-white w-64 m-3 rounded-lg p-4 text-center flex justify-center items-center mt-16"
          onClick={() => signIn("github")}
        >
          <FaGithub className="m-2 mt-3 size-5"/> Sign Up With GitHub
        </Link>
        <Link
          href={"/"}
          className="bg-white w-64 m-3 rounded-lg p-4 text-center flex justify-center items-center "
          onClick={() => signIn("google")}
        >
          <FaGoogle className="m-2 mt-3 size-5"/> Sign Up With Google
        </Link>
        {/* <div
          className="bg-white w-64 m-3 rounded-lg p-4 text-center flex justify-center items-center "
          onClick={() => signIn("google")}
        >
          <FaFacebookSquare className="m-2 mt-3 size-5"/> Sign Up With Facebook
        </div> */}
      </div>
    );
  } else {
    redirect("/");
  }
};
export default login;
