'use client'

// components
import Hero from "./hero";
import About from "./about";

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Landing = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 800,
            easing: "ease-out-cubic",
        })
    })
  return (
    <div>
        <div className="pt-32 pb-16 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        {/* Navbar */}
        {/* Hero */}
        <Hero/>
        {/* About */}
        <About/>
        {/* Work */}
        {/* Member */}
        {/* Motivation */}
        </div>
        {/* Footer */}

    </div>
  )
}

export default Landing;