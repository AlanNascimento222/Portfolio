'use client'

import { useState } from "react"

const colorMap: Record<string, { border: string; bg: string }> = {
    blue: { border: 'hover:border-blue-700', bg: 'bg-blue-400' },
    red: { border: 'hover:border-red-700', bg: 'bg-red-400' },
    green: { border: 'hover:border-green-700', bg: 'bg-green-400' },
    yellow: { border: 'hover:border-yellow-700', bg: 'bg-yellow-400' },
    purple: { border: 'hover:border-purple-700', bg: 'bg-purple-400' },
}



const widthMap: Record<string, string> = {
    '1': 'w-1/4',
    '2': 'w-2/4',
    '3': 'w-3/4',
    '4': 'w-full',
}


export const SkillCard = ({ skillName, skillLevel, description }: { skillName: string, skillLevel: '1' | '2' | '3' | '4', description?: string }) => {
    const [Hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    const colorKey = {
        '1': 'red',
        '2': 'yellow',
        '3': 'blue',
        '4': 'green',
    }[skillLevel] || 'blue'

    const colorClasses = colorMap[colorKey] || { border: 'hover:border-gray-700', bg: 'bg-gray-400' }
    const widthClass = widthMap[skillLevel] || 'w-full'

    return (
        <div className={`flex flex-col p-4 relative bg-gray-900 border border-gray-800 rounded-2xl shadow-xl transition-colors duration-300 ${colorClasses.border}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <h2 className="text-lg md:text-2xl font-bold text-gray-200 mb-2">{skillName}</h2>
            <div className="w-full bg-gray-800 rounded-full z-40">
                <div className={`${widthClass} h-2 rounded-full  ${colorClasses.bg}`}></div>
            </div>
        </div>
    )
}