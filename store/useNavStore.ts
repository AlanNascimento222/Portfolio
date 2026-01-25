import { create } from 'zustand';

interface NavState {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
    activeSection: 'Home',
    setActiveSection: (section) => set({ activeSection: section }),
}));
