'use client'

import SplitText from "@/components/home/homeComponents/splitTitle"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiGit, SiFigma, SiNestjs, SiHtml5, SiCss3 } from "react-icons/si"
import { useState } from "react"
import { VscVscode } from "react-icons/vsc"
import { TiWaves } from "react-icons/ti"
import { MdCleaningServices, MdOutlineManageHistory } from "react-icons/md"
import { CiMonitor } from "react-icons/ci"
import { BsTools } from "react-icons/bs"
import { FaServer } from "react-icons/fa"
import { RiOpenaiFill } from "react-icons/ri"
import { GiPadlock } from "react-icons/gi"
import { useLanguageStore } from "@/store/useLanguageStore"
import { translations } from "@/constants/translations"


export const Skills = () => {
    const [activeTab, setActiveTab] = useState<string>('frontend')
    const { language } = useLanguageStore()
    const t = translations[language].skills

    return (
        <section id="skills" className="bg-gray-950 mt-24 flex flex-col items-center justify-center ">
            <span className=" py-1 px-3 rounded-full border-1 border-purple-500 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4">{t.badge}</span>
            <div className="mb-16 flex items-center justify-center">
                <SplitText
                    text={t.titleMain}
                    className="text-white mr-2 md:mr-4 text-3xl sm:text-4xl md:text-6xl font-bold text-center"
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
                    text={t.titleHighlight}
                    className="text-purple-500 text-3xl sm:text-4xl md:text-6xl font-bold text-center"
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
                        {t.tabs.frontend} <CiMonitor size={24} className="ml-2" /></button>
                    <button
                        onClick={() => setActiveTab('backend')}
                        className={`text-white flex transition-all duration-100 bg-gray-800 pl-8 pr-8 pt-4 pb-4 rounded-sm hover:bg-gray-700 cursor-pointer border-purple-500 ${activeTab === 'backend' ? 'border-b-0 shadow-sm bg-gray-900 hover:bg-gray-800' : 'border-b-6 shadow-md shadow-black'}`}>
                        {t.tabs.backend} <FaServer size={24} className="ml-2" /></button>
                    <button
                        onClick={() => setActiveTab('others')}
                        className={`text-white flex transition-all duration-100 bg-gray-800 pl-8 pr-8 pt-4 pb-4 rounded-sm hover:bg-gray-700 cursor-pointer border-purple-500 ${activeTab === 'others' ? 'border-b-0 shadow-sm bg-gray-900 hover:bg-gray-800' : 'border-b-6 shadow-md shadow-black'}`}>
                        {t.tabs.others} <BsTools size={24} className="ml-2" /></button>
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
                                <p className="text-gray-400">{t.descriptions.nodejs}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiNestjs size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Nest.js</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.nestjs}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiTypescript size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">TypeScript</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.typescript}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <RiOpenaiFill size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">SDK OpenAI</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.sdkopenai}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiPostgresql size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">PostgreSQL</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.postgresql}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <GiPadlock size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">JWT</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.jwt}</p>
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
                                <p className="text-gray-400">{t.descriptions.react}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiNextdotjs size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Next.js</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.nextjs}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <TiWaves size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Axios</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.axios}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <MdOutlineManageHistory size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Zustand</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.zustand}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiTailwindcss size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">TailwindCSS</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.tailwindcss}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiHtml5 size={38} className="text-purple-500" />
                                    <SiCss3 size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">HTML & CSS</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.htmlcss}</p>
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
                                <p className="text-gray-400">{t.descriptions.git}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiFigma size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Figma</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.figma}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <VscVscode size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">VS Code</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.vscode}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <MdCleaningServices size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">Clean Code</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.cleancode}</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white rounded-sm">
                                <div className="flex items-center gap-2">
                                    <SiJavascript size={38} className="text-purple-500" />
                                    <h3 className="text-xl font-bold">JavaScript</h3>
                                </div>
                                <p className="text-gray-400">{t.descriptions.javascript}</p>
                            </div>
                        </>
                    )}
                </div>


            </div>
        </section>
    )
}
