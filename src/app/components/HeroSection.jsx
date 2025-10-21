"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
    return (
        <section className="lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    <motion.div 
                    initial={{opacity:0, scale:0.5}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration: 0.5}} 
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                    >
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                           <span className="text-[#F70670]">
                                Hello, I'm {" "}

                            </span>
                            <br>
                            </br>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "Sithika",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "a Web Developer",
                                    1000,
                                    "Graphic Designer",
                                    1000,
                                    "a UI/UX Designer" ,
                                    1000
                                    
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="inline-block ml-0.5" 
                            />
                        </h1>
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Hi, I’m Sithika, an undergraduate at the University of Kelaniya based in Colombo. 
                        My work spans UX design, UI animations, graphic design, and logo illustration, 
                        where I blend creativity with functionality. With a strong comfort in coding.
                        <br /> 
                        I can quickly prototype and validate ideas, turning concepts into polished digital experiences.
                        </p>


                        <div>
                           <button
                              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-[#F70670] hover:bg-slate-200 shiny-text"

                            >
                             Hire me
                            </button>

                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-[#F70670] hover:bg-slate-800 text-white mt-3" >
                                 <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button>

                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{opacity:0, scale:0.5}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration: 0.5}}   
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className=" rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">

                        <Image
                                src="/images/coverbg2.png"
                                alt="hero"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={500}
                                height={500}

                            />
                            
                        </div>
                    </motion.div>
                </div>
        </section>
    );
};

export default HeroSection;

