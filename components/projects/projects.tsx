'use client'


import SplitText from "@/components/home/homeComponents/splitTitle";
import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs } from "react-icons/si";
import Image from "next/image";
import ClimaxImg from "@/assests/climax.png"
import PasswordGeneratorImg from "@/assests/geradordesenhas.png"
import ClockImg from "@/assests/clock.png"

export const Projects = () => {
    return (
        <section id="projects" className="h-full mt-24 w-full bg-gray-950 text-white flex flex-col items-center justify-center">
            <span className=" py-1 px-3 rounded-full border-1 border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">Technical Skills</span>
            <div className="flex gap-4">
                <SplitText
                    text="Featured"
                    className="text-5xl md:text-7xl font-bold text-white text-center"
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
                    text="Projects"
                    className="text-5xl text-purple-500 md:text-7xl font-bold text-center"
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
            </div>
            <p className="text-gray-400 text-center mt-4">Here are some of my featured projects</p>
            <div className="grid w-[100vh] grid-cols-3 justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-[48vh]">
                    <a href="https://weatherximp.vercel.app/">
                        <Image src={ClimaxImg} alt="ClimaX Project" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2">ClimaX</h3>
                            <p className="text-gray-400 text-sm mt-2">A weather application that provides real-time weather information for any location around the world using OpenWeatherMap API.</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-[48vh]">
                    <a href="https://gerador-de-senhas-liart-eight.vercel.app/">
                        <Image src={PasswordGeneratorImg} alt="Random Password Generator" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2">Random Password Generator</h3>
                            <p className="text-gray-400 text-sm mt-2">A password generator that generates random passwords with customizable length and complexity.</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-[48vh]">
                    <a href="https://relogio-rouge.vercel.app/">
                        <Image src={ClockImg} alt="Clock Project" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2">Clock</h3>
                            <p className="text-gray-400 text-sm mt-2">A clock that displays the current time and date. Responsive and with a modern design.</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
            </div>

        </section>
    );
};
