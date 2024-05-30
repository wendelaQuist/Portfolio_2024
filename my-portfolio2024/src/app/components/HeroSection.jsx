"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F13468] to-[#9B7DDE]">Hi, I am <br></br> </span> 
                        <TypeAnimation
      sequence={[
        ' Wen',
        2000,
        '  web developer',
        2000,
        2000,
        '  UI/UX designer',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                        </h1>
                    <p className="text-[#F4DAE2] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome to my portfolio. Let’s explore my journey through innovation and creativity. Ready to start?
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#F13468] to-[#9B7DDE] hover:bg-slate-200 hover:text-[#9B7DDE]">Hire me</button>
                        <button className="px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#F13468] to-[#9B7DDE] text-[#F4DAE2] mt-3 hover:bg-slate-800 hover:text-[#9B7DDE]"><span className="block bg-[#14121A] rounded-full px-1 m-1">Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-transparent w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative">
                        <Image 
                        src="/images/computer.png"
                        alt="hero image"
                        className="absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={500}
                        height={500}
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;