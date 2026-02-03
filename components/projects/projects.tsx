'use client'


import SplitText from "@/components/home/homeComponents/splitTitle"
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si"
import Image from "next/image"
import ClimaxImg from "@/assests/climax.png"
import PasswordGeneratorImg from "@/assests/geradordesenhas.png"
import ClockImg from "@/assests/clock.png"
import { useLanguageStore } from "@/store/useLanguageStore"
import { translations } from "@/constants/translations"


export const Projects = () => {
    const { language } = useLanguageStore()
    const t = translations[language].projects

    return (
        <section id="projects" className="bg-gray-950 mt-10  flex flex-col items-center h-full justify-center">
            <span className="py-1 px-3 rounded-full border border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">
                {t.badge}
            </span>
            <div className="flex gap-4">
                <SplitText
                    text={t.featured}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center"
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
                    text={t.title}
                    className="text-4xl sm:text-5xl text-purple-500 md:text-7xl font-bold text-center"
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
            <p className="text-gray-400 mt-4 text-lg text-center max-w-2xl px-4">
                {t.subtitle}
            </p>

            <div className="grid w-full max-w-6xl px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-24">
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-full min-h-[450px]">
                    <a href="https://weatherximp.vercel.app/">
                        <Image src={ClimaxImg} alt="ClimaX Project" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2 text-white">ClimaX</h3>
                            <p className="text-gray-400 text-sm mt-2">{t.climaxDesc}</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-full min-h-[450px]">
                    <a href="https://gerador-de-senhas-liart-eight.vercel.app/">
                        <Image src={PasswordGeneratorImg} alt="Random Password Generator" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2 text-white">Password Generator</h3>
                            <p className="text-gray-400 text-sm mt-2">{t.passwordDesc}</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
                <button className="bg-gray-900 rounded-sm hover:translate-y-[-8px] transition-all duration-300 flex flex-col cursor-pointer h-full min-h-[450px]">
                    <a href="https://relogio-rouge.vercel.app/">
                        <Image src={ClockImg} alt="Clock Project" className="w-full object-cover rounded-t-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mt-2 text-white">Digital Clock</h3>
                            <p className="text-gray-400 text-sm mt-2">{t.clockDesc}</p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiCss3 size={18} />CSS</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiJavascript size={18} />JavaScript</span>
                                <span className="bg-purple-500 flex items-center gap-2 text-white px-2 py-1 rounded-sm"><SiHtml5 size={18} />HTML5</span>
                            </div>
                        </div>
                    </a>
                </button>
            </div>
            <div className="w-full flex justify-center">
                <hr className="w-10/12 border-gray-800 opacity-50" />
            </div>

        </section>
    )
}
