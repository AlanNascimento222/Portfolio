'use client'

import { useEffect } from 'react'
import { useNavStore } from '@/store/useNavStore'

export const useHashNavigation = () => {
    const { activeSection, setActiveSection } = useNavStore()

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash) {
                const section = hash.charAt(0).toUpperCase() + hash.slice(1).toLowerCase()
                setActiveSection(section)
            }
        }

        handleHashChange()

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [setActiveSection])

    useEffect(() => {
        if (activeSection) {
            const hash = activeSection.toLowerCase()

            if (window.location.hash !== `#${hash}`) {
                window.history.pushState(null, '', `#${hash}`)
            }
        }
    }, [activeSection])
}
