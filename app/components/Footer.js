import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="flex h-48 w-full justify-between bg-zinc-900 text-white  max-sm:h-full max-sm:flex-col ">
        <div className="div flex max-sm:justify-center">
          <div className="div pl-5 pt-7">
            <h1 className="pb-2 font-bold">Jiocinema</h1>
            <p className="pb-2 text-xs font-semibold text-slate-300">For You</p>
            <p className="pb-2 text-xs font-semibold text-slate-300">Sports</p>
            <p className="pb-2 text-xs font-semibold text-slate-300">Movies</p>
            <p className="pb-2 text-xs font-semibold text-slate-300">TV Shows</p>
          </div>
          <div className="div pl-10 pt-7">
            <h1 className="pb-2 font-bold">Support</h1>
            <p className="pb-2 text-xs font-semibold text-slate-300">Help Center</p>
            <p className="pb-2 text-xs font-semibold text-slate-300">
              Terms Of Use
            </p>
            <p className="pb-2 text-xs font-semibold text-slate-300">
              Privacy Policy
            </p>
            <p className="pb-2 text-xs font-semibold text-slate-300">
              Content Complaints
            </p>
          </div>
        </div>
        <div className="flex justify-center pr-12 max-md:pr-5 max-sm:pr-0">
          <div className="jus flex-col p-10 text-xl font-bold">
            <h1 className="mb-1 ml-4 max-sm:text-lg">Connect With Us</h1>
            <div className="flex">
              <Link href={`https://www.instagram.com/daksh_gupta_7_7_7_7_7_7_7/?utm_source=qr&igsh=MXcwanBrM21sbXI0cg%3D%3D#`} className="contacts m-2 ml-0 flex size-10 max-sm:size-8 items-center justify-center rounded-full bg-gray-600 text-2xl text-white">
              <BsInstagram/> 
              </Link>
              <Link href={`https://www.instagram.com/daksh_gupta_7_7_7_7_7_7_7/?utm_source=qr&igsh=MXcwanBrM21sbXI0cg%3D%3D#`} className="contacts m-2 flex size-10 max-sm:size-8 items-center justify-center rounded-full bg-gray-600 text-2xl text-white">
                <FaXTwitter/>
              </Link>
              <Link href={`https://wa.me/qr/LDDWQAGWUMEWM1`} className="contacts m-2 flex size-10 max-sm:size-8 items-center justify-center rounded-full bg-gray-600 text-2xl text-white">
                <IoLogoWhatsapp/>
              </Link>
              <Link href={`https://www.instagram.com/daksh_gupta_7_7_7_7_7_7_7/?utm_source=qr&igsh=MXcwanBrM21sbXI0cg%3D%3D#`} className="contacts m-2 flex size-10 max-sm:size-8 items-center justify-center rounded-full bg-gray-600 text-2xl text-white">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="break h-px bg-gray-500"></div>
      <div className="copyrigth flex h-20 w-full items-center justify-between bg-black pl-4 text-white">
        <p className="max-sm:text-sm">
          Copyright &copy; Star India Private Limited, 2024. All rights reserved.
        </p>
        <img
          src="https://www.jiocinema.com/images/payments/jio-logo.png"
          alt=""
          className="mr-5 h-12"
        />
      </div>
    </footer>
  );
};

export default Footer;
