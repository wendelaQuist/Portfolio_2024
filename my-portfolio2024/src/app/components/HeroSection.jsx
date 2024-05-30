import React from "react";
import Image from "next/image"

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-[#9B7DDE] mb-4 text-4xl lg:text-6xl font-extrabold">Hi, my name is Wen Quist</h1>
                    <p className="text-[#F4DAE2] text-lg mb-6 lg:text-xl">
                        Welcome to my portfolio. Let’s explore my journey through innovation and creativity. Ready to start?
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-[#9B7DDE] hover:bg-slate-200 hover:text-[#9B7DDE]">Hire me</button>
                        <button className="px-6 py-3 rounded-full bg-transparent text-[#F4DAE2] border border-[#F4DAE2] mt-3 hover:bg-slate-200 hover:text-[#9B7DDE]">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#14121A] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative">
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