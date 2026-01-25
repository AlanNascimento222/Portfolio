'use client'

import { p } from "motion/react-client";
import ScrambledText from "./aboutComponents/scambled"
import SplitText from "@/components/home/homeComponents/splitTitle";
import CountUp from "../home/homeComponents/countUp";
import { FiMonitor } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


export const About = () => {
    return (
        <section >
            <div className="justify-around w-full flex items-center bg-gray-950">
                <div className="flex flex-col items-center mt-36">
                    <span className=" py-1 px-3 rounded-full text-purple-400 text-xs font-semibold tracking-wider uppercase border mb-4">Introduction</span>
                    <div className="flex items-center gap-6">
                        <SplitText
                            text="Overview,"
                            className="text-white text-6xl font-bold"
                            delay={50}
                            duration={0.5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />
                        <SplitText
                            text="Who am I?"
                            className="text-purple-500 text-6xl font-bold"
                            delay={120}
                            duration={2.5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />
                    </div >
                    <div className="flex items-center mt-12" >
                        <ScrambledText
                            className="scrambled-text-demo w-[90vh] h-fit"
                            radius={100}
                            duration={1.2}
                            speed={0.1}
                            scrambleChars=":.">
                            <p className="text-gray-400 text-base md:text-xl leading-relaxed text-center">
                                I'm a skilled software developer with a passion for building robust digital products. With expertise in <b className="text-purple-500">TypeScript</b>, <b className="text-purple-500">React</b>, and <b className="text-purple-500">Node.js</b>, I turn complex problems into elegant, scalable solutions. I collaborate closely with clients to ensure their vision comes to life with clean code and user-centric design.
                            </p>
                        </ScrambledText>
                    </div>

                    <div className="mt-12 w-full max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                                <div className="flex items-center gap-4 mb-2">
                                    <FiMonitor size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Experience</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={2}
                                        separator="."
                                        direction="up"
                                        duration={1}
                                        className="text-4xl font-bold text-white"
                                    />
                                    <span className="text-2xl font-bold text-purple-500 ml-1 mb-1">+</span>
                                    <span className="text-lg text-gray-400 ml-2 mb-1">Years</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                                <div className="flex items-center gap-4 mb-2">
                                    <FaProjectDiagram size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Projects</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={15}
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
                                    <IoIosPeople size={32} className="text-purple-500" />
                                    <h5 className="font-bold text-xl text-white">Clients</h5>
                                </div>
                                <div className="flex items-end baseline">
                                    <CountUp
                                        from={0}
                                        to={10}
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
                </div>
            </div>
        </section >
    )
}
