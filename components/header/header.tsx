import { useNavStore } from "@/store/useNavStore";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
    const { activeSection, setActiveSection } = useNavStore();
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    const handleNavClick = (item: string) => {
        setActiveSection(item);
        setIsOpen(false);
    };

    return (
        <header className="fixed w-full border-b-1 border-b-gray-800 pt-6 pb-6 bg-gray-950 text-white z-50">
            <div className="flex items-center justify-between px-5 md:px-10">
                <div className="flex items-center">
                    <div className="bg-purple-500 p-2 rounded-xl">
                        <h1 className="text-2xl font-bold pl-1 pr-1 text-gray-950">A</h1>
                    </div>
                    <h1 className="ml-4 text-2xl font-bold">Alan.dev</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveSection(item)}
                            className={`cursor-pointer border-b-2 transition-colors duration-300
                            ${activeSection === item
                                    ? 'text-purple-500 border-purple-500'
                                    : 'border-gray-950 hover:text-purple-500 hover:border-purple-500'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b-2 border-b-gray-600 flex flex-col items-center py-4 space-y-4 shadow-xl">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className={`text-lg cursor-pointer border-b-2 transition-colors duration-300
                            ${activeSection === item
                                    ? 'text-purple-500 border-purple-500'
                                    : 'border-gray-950 hover:text-purple-500 hover:border-purple-500'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};