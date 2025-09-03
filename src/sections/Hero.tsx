import { ArrowRight, Square } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative w-full bg-white font-arimo">
            <div className="px-16 py-10 flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
                        Enterprise AI for Finance Professionals
                    </h1>

                    <ul className="space-y-3 text-gray-600 mb-8">
                        <li className="flex items-start gap-x-1">
                            <Square fill="gray" size={12} className="mt-1.5" />
                            <p className="text-[18px]"> Automate and customize financial workflows with ease.</p>
                        </li>
                        <li className="flex items-start gap-x-1">
                            <Square fill="gray" size={12} className="mt-1.5" />
                            <p className="text-[18px]"> Deliver immediate time-to-value to users with intuitive finance automations.</p>
                        </li>
                        <li className="flex items-start gap-x-1">
                            <Square fill="gray" size={12} className="mt-1.5" />
                            <p className="text-[18px]"> State-of-the-art data security protocols engineered specifically for financial institutions.</p>

                        </li>
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                    >
                        Get in touch <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
