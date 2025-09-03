import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import clsx from "clsx"
import { useState } from "react"
import { Menu, X } from "lucide-react" // hamburger + close icons

const links = [
    { path: "", label: "Home" },
    { path: "insights", label: "Insights" },
    { path: "careers", label: "Careers" },
    { path: "prism", label: "Prism" },
    { path: "security", label: "Security" },
]

function Navbar() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex items-center px-6 sm:px-16 py-6 justify-between font-arimo bg-white relative">
            {/* Logo */}
            <div>
                <Logo />
            </div>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center space-x-6">
                {links.map(({ label, path }) => (
                    <Link
                        key={path}
                        to={`/${path}`}
                        className={clsx(
                            "transition-colors",
                            location.pathname.includes(path)
                                ? "text-primary-black"
                                : "text-primary-gray hover:text-primary-black"
                        )}
                    >
                        {label}
                    </Link>
                ))}

                <Link
                    to="/"
                    className="inline-block bg-primary-black px-5 py-2 text-white font-medium rounded-full"
                >
                    Sign In
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 space-y-4 md:hidden z-50">
                    {links.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={`/${path}`}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-lg font-medium transition-colors",
                                location.pathname.includes(path)
                                    ? "text-primary-black"
                                    : "text-primary-gray hover:text-primary-black"
                            )}
                        >
                            {label}
                        </Link>
                    ))}

                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="inline-block bg-primary-black px-5 py-2 text-white font-medium rounded-full"
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
