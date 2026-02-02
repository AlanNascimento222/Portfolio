'use client'

import React from 'react';
import SplitText from "@/components/home/homeComponents/splitTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
    return (
        <section id="contact" className="h-full mt-24 w-full bg-gray-950 text-white flex flex-col items-center justify-center p-4">
            <span className="py-1 px-3 rounded-full border border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">
                Get in Touch
            </span>

            <div className="flex gap-4 mb-12">
                <SplitText
                    text="Contact"
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
                    text="Me"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/alan-nascimento-da-silva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center gap-4"
                >
                    <div className="p-4 bg-gray-900 rounded-full group-hover:bg-purple-500/20 transition-colors">
                        <FaLinkedin size={32} className="text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold">LinkedIn</h3>
                    <p className="text-gray-400 text-center text-sm">Connect with me professionally</p>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/AlanNascimento222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center gap-4"
                >
                    <div className="p-4 bg-gray-900 rounded-full group-hover:bg-purple-500/20 transition-colors">
                        <FaGithub size={32} className="text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold">GitHub</h3>
                    <p className="text-gray-400 text-center text-sm">Check out my code repositories</p>
                </a>

                {/* Email */}
                <a
                    href="mailto:alannascimento222@hotmail.com"
                    className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center gap-4"
                >
                    <div className="p-4 bg-gray-900 rounded-full group-hover:bg-purple-500/20 transition-colors">
                        <MdEmail size={32} className="text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-gray-400 text-center text-sm">Send me a message directly</p>
                </a>
            </div>
            <footer className="w-full border-t-1 border-t-gray-800 text-white flex flex-col absolute bottom-0 left-0 right-0 items-center justify-center p-4">
                <p className="text-gray-400 text-center text-sm">© 2026 Alan Nascimento. All rights reserved.</p>
            </footer>
        </section>
    );
};
