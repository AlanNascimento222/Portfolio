'use client'

import ScrambledText from "./aboutComponents/scambled"
import SplitText from "@/components/home/homeComponents/splitTitle"
import { useLanguageStore } from "@/store/useLanguageStore"
import { translations } from "@/constants/translations"



export const About = () => {
    const { language } = useLanguageStore()
    const t = translations[language].about

    return (
        <section id="about">
            <div className="justify-around w-full flex items-center bg-gray-950">
                <div className="flex flex-col items-center mt-20 md:mt-30">
                    <span className=" py-1 px-3 rounded-full  border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase border mb-4">{t.introduction}</span>
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <SplitText
                            text={t.overview}
                            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold"
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
                            text={t.whoAmI}
                            className="text-purple-500 text-3xl sm:text-4xl md:text-6xl font-bold"
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
                            className=" w-full px-4 max-w-4xl h-fit text-center"
                            radius={100}
                            duration={1.2}
                            speed={0.1}
                            scrambleChars=":.">
                            <p className="text-gray-400 text-base md:text-xl text-center" dangerouslySetInnerHTML={{ __html: t.description }}>
                            </p>
                        </ScrambledText>
                    </div>
                    <div className="p-2 gap-6 mt-12 rounded-2xl w-11/12 md:w-8/12 lg:w-6/12 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                        <div className="p-6 rounded-2xl h-full bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                            <h1 className="text-purple-500 font-bold text-xl">
                                {t.academicTitle}
                            </h1>
                            <p className="mt-2 text-gray-400">
                                {t.academicDesc}
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl h-full bg-gray-900/50 hover:bg-gray-900 transition-colors border border-gray-800">
                            <h1 className="text-purple-500 font-bold text-xl">
                                {t.studiesTitle}
                            </h1>
                            <p className="mt-2 text-gray-400" >
                                {t.studiesDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}