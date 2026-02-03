import { create } from 'zustand'

interface LanguageState {
    language: 'en' | 'pt'
    toggleLanguage: () => void
    setLanguage: (lang: 'en' | 'pt') => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
    language: 'en',
    toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'pt' : 'en' })),
    setLanguage: (lang) => set({ language: lang }),
}))
