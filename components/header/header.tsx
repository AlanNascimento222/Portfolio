import { useNavStore } from "@/store/useNavStore";

export const Header = () => {
    const { activeSection, setActiveSection } = useNavStore();
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <header className="fixed w-full border-b-2 border-b-gray-600 pt-6 pb-6 bg-gray-950 text-white flex items-center justify-between z-50">
            <div className="ml-5 flex items-center">
                <div className=" bg-purple-500 p-2 rounded-xl">
                    <h1 className="text-2xl font-bold pl-1 pr-1 text-gray-950">A</h1>
                </div>
                <h1 className="ml-4 text-2xl font-bold">Alan.dev</h1>
            </div>
            <nav className="flex space-x-4 mr-10">
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
        </header>
    )
}