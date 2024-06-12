import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-20">
      <div className="text-center px-8 ">
        <div className="mb-6" data-aos='fade-down'  >
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link href='https://github.com/Zaidan07' className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40" target="_blank">
            <span className="inline-flex relative">
              Socials{""}
              <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </span>
            </Link>
          </div>
        </div>
        <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-500" data-aos='fade-down'>Thousand Dreams Studio</h1>
        <p className="mb-8 text-lg text-zinc-300/40 font-medium" data-aos='fade-down' data-aos-delay='200'>Unlimited Dreams, Endless Adventures</p>
        <div className="flex flex-col items-center max-w-xs gap-4 sm:justify-center sm:flex-row sm:inline-flex">
          <Link href="/" className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" data-aos='fade-down' data-aos-delay='400'>Explore Your Dreams {""}
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"/>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
