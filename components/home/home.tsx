'use client'

import Image from "next/image";
import SplitText from "./homeComponents/splitTitle";
import programming from "@/assests/programming.svg"
import { FiCoffee } from "react-icons/fi";
import { FaBug } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { VscDebugConsole } from "react-icons/vsc";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import CountUp from "./homeComponents/countUp";

export const Home = () => {
    return (
        <section>
            <div className=" pt-39 flex items-center justify-around bg-gray-950">
                <div className="flex flex-col w-full max-w-5xl h-fit items-center">
                    <div className="flex flex-col items-center">
                        <SplitText
                            text="Hello, I'm Alan"
                            className="text-7xl font-bold text-white"
                            delay={50}
                            duration={1.25}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                        <SplitText
                            text="Full Stack Developer"
                            className="text-purple-500 text-2xl"
                            delay={100}
                            duration={2.5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                    </div>
                    <div className="mt-6 text-gray-400 max-w-2xl text-center">
                        <p className="text-balance text-lg">
                            I craft robust and scalable digital products. With a passion for clean code and user-centric design, I turn complex problems into elegant solutions.
                        </p>
                    </div>

                    <div className="mt-12 w-full">
                        <hr className="w-full border-gray-800 opacity-50 mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                                <div className="flex items-center gap-4 mb-2">
                                    <FiCoffee size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Coffees</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={1000}
                                        separator="."
                                        direction="up"
                                        duration={1}
                                        className="text-4xl font-bold text-white"
                                    />
                                    <span className="text-2xl font-bold text-purple-500 ml-1 mb-1">+</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                                <div className="flex items-center gap-4 mb-2">
                                    <FaBug size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Fixed Bugs</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={1000}
                                        separator="."
                                        direction="up"
                                        duration={1}
                                        className="text-4xl font-bold text-white"
                                    />
                                    <span className="text-2xl font-bold text-purple-500 ml-1 mb-1">+</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                                <div className="flex items-center gap-4 mb-2">
                                    <VscDebugConsole size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Technologies</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={20}
                                        separator="."
                                        direction="up"
                                        duration={1}
                                        className="text-4xl font-bold text-white"
                                    />
                                    <span className="text-2xl font-bold text-purple-500 ml-1 mb-1">+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-12" >
                        <button className="pt-6 pb-6 pl-10 pr-10 rounded-2xl bg-purple-500 active:scale-95 text-white hover:bg-transparent hover:text-purple-500 transition-colors border-2 border-transparent hover:border-purple-500">
                            View Project
                        </button>
                        <button className="flex gap-2 pt-6 pb-6 pl-10 pr-10 rounded-2xl border-2 active:scale-95 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
                            <FaCode size={24} className="mr-2" />
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}   