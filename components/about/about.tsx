'use client'

import ScrambledText from "./aboutComponents/scambled"
import SplitText from "@/components/home/homeComponents/splitTitle";



export const About = () => {
    return (
        <section >
            <div className="justify-around w-full flex items-center bg-gray-950">
                <div className="flex flex-col items-center mt-36">
                    <span className=" py-1 px-3 rounded-full  border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase border mb-4">Introduction</span>
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
                    <div className=" whitespace-pre-line flex items-center mt-12" >
                        <ScrambledText
                            className=" w-[90vh] h-fit text-center"
                            radius={100}
                            duration={1.2}
                            speed={0.1}
                            scrambleChars=":.">
                            <p className="text-gray-400 text-base md:text-xl text-center">
                                I'm a skilled software developer with a passion for building robust digital products. With expertise in <b className="text-purple-500">TypeScript</b>, <b className="text-purple-500">React</b>, and <b className="text-purple-500">Node.js</b>, I turn complex problems into elegant, scalable solutions. I collaborate closely with clients to ensure their vision comes to life with clean code and user-centric design.
                            </p>
                        </ScrambledText>
                    </div>
                    <div className="p-2 gap-6 mt-12 rounded-2xl w-6/12 grid grid-cols-2 justify-center items-center">
                        <div className="p-6 rounded-2xl h-full bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                            <h1 className="text-purple-500 font-bold text-xl">
                                Academic
                            </h1>
                            <p className="mt-2 text-gray-400">
                                I'm studying Analysis and Systems Development at the Senai / Santa Catarina.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl h-full bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                            <h1 className="text-purple-500 font-bold text-xl">
                                Studies
                            </h1>
                            <p className="mt-2 text-gray-400" >
                                I'm studying, Next.js and Nest.js with TypeScript.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

//tempo de experiencia
//o que eu to cursando 
//o que eu estou aprendendo