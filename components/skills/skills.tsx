'use client'

import SplitText from "@/components/home/homeComponents/splitTitle";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiDocker, SiGit, SiFigma, SiVsco, SiVscodium, SiNestjs, SiHtml5, SiCss3 } from "react-icons/si";
import { useState } from "react";
import { VscVscode } from "react-icons/vsc";
import { TiWaves } from "react-icons/ti";
import { MdCleaningServices, MdOutlineManageHistory } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { GiPadlock } from "react-icons/gi";


export const Skills = () => {
    const [activeTab, setActiveTab] = useState<string>('frontend');
    return (
        <section id="skills" className="bg-gray-950 mt-24 flex flex-col items-center justify-center ">
            <span className=" py-1 px-3 rounded-full border-1 border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">Technical Skills</span>
            <div className="mb-16 flex items-center justify-center">
                <SplitText
                    text="Skills and"
                    className="text-white mr-2 md:mr-4 text-4xl md:text-6xl font-bold text-center"
                    delay={50}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <SplitText
                    text="Technologies"
                    className="text-purple-500 text-4xl md:text-6xl font-bold text-center"
                    delay={100}
                    duration={1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>
            <div className="p-2 pt-0 w-full max-w-5xl h-auto min-h-[50vh] flex rounded-xl flex-col ">
                <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-xl">
                    <button
                        onClick={() => setActiveTab('frontend')}
                        className={`text-white flex transition-all duration-100 bg-gray-800 pl-8 pr-8 pt-4 pb-4 rounded-sm hover:bg-gray-700 cursor-pointer border-purple-500 ${activeTab === 'frontend' ? 'border-b-0 shadow-sm bg-gray-900 hover:bg-gray-800' : 'border-b-6 shadow-md shadow-black'}`}>
                        Frontend <CiMonitor size={24} className="ml-2" /></button>
                    <button
                        onClick={() => setActiveTab('backend')}
                        className={`text-white flex transition-all duration-100 bg-gray-800 pl-8 pr-8 pt-4 pb-4 rounded-sm hover:bg-gray-700 cursor-pointer border-purple-500 ${activeTab === 'backend' ? 'border-b-0 shadow-sm bg-gray-900 hover:bg-gray-800' : 'border-b-6 shadow-md shadow-black'}`}>
                        Backend <FaServer size={24} className="ml-2" /></button>
                    <button
                        onClick={() => setActiveTab('others')}
                        className={`text-white flex transition-all duration-100 bg-gray-800 pl-8 pr-8 pt-4 pb-4 rounded-sm hover:bg-gray-700 cursor-pointer border-purple-500 ${activeTab === 'others' ? 'border-b-0 shadow-sm bg-gray-900 hover:bg-gray-800' : 'border-b-6 shadow-md shadow-black'}`}>
                        Others <BsTools size={24} className="ml-2" /></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 p-4 gap-6">
                    {/* frontend items */}

                    {activeTab === 'backend' && (
                        <>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiNodedotjs size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Node.js</h3>
                                </div>
                                <p className="text-gray-400">A runtime environment for executing JavaScript code server-side.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiNestjs size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Nest.js</h3>
                                </div>
                                <p className="text-gray-400">A TypeScript framework for building scalable and maintainable server-side applications.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiTypescript size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">TypeScript</h3>
                                </div>
                                <p className="text-gray-400">A strongly typed programming language that builds on JavaScript, giving you better tooling and error checking.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <RiOpenaiFill size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">SDK OpenAI</h3>
                                </div>
                                <p className="text-gray-400">A library for building applications with OpenAI's API.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiPostgresql size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">PostgreSQL</h3>
                                </div>
                                <p className="text-gray-400">A relational database management system that provides a robust and reliable platform for storing and managing structured data.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <GiPadlock size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">JWT</h3>
                                </div>
                                <p className="text-gray-400">A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.</p>
                            </div>
                        </>
                    )}
                    {activeTab === 'frontend' && (
                        <>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiReact size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">React</h3>
                                </div>
                                <p className="text-gray-400">A JavaScript library for building user interfaces with reusable components and a virtual DOM.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiNextdotjs size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Next.js</h3>
                                </div>
                                <p className="text-gray-400">A framework for building user interfaces with reusable components and a virtual DOM.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <TiWaves size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Axios</h3>
                                </div>
                                <p className="text-gray-400">A library for making HTTP requests to APIs.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <MdOutlineManageHistory size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Zustand</h3>
                                </div>
                                <p className="text-gray-400">A library for state management in React.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiTailwindcss size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">TailwindCSS</h3>
                                </div>
                                <p className="text-gray-400">A utility-first CSS framework for rapidly building custom user interfaces.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiHtml5 size={38} className="text-purple-500" />
                                    <SiCss3 size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">HTML & CSS</h3>
                                </div>
                                <p className="text-gray-400">HTML and CSS are the building blocks of web development. HTML is used to structure content, and CSS is used to style it.</p>
                            </div>
                        </>
                    )}
                    {activeTab === 'others' && (
                        <>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiGit size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Git</h3>
                                </div>
                                <p className="text-gray-400">A version control system for tracking changes in source code during software development.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiFigma size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Figma</h3>
                                </div>
                                <p className="text-gray-400">A design tool for creating user interfaces and prototypes.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <VscVscode size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">VS Code</h3>
                                </div>
                                <p className="text-gray-400">A integrated development environment for building user interfaces with reusable components and a virtual DOM.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <MdCleaningServices size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Clean Code</h3>
                                </div>
                                <p className="text-gray-400">A set of principles and best practices for writing code that is easy to read, understand, and maintain.</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiJavascript size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">JavaScript</h3>
                                </div>
                                <p className="text-gray-400">A high-level, interpreted programming language that is used to create dynamic and interactive web pages.</p>
                            </div>
                        </>
                    )}
                </div>


            </div>
        </section>
    );
};
