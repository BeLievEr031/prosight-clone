import { ArrowRight } from "lucide-react";
import CTABG from "../assets/ctabg.svg"
export default function CTA() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-20">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-neutral-50 to-blue-100 border border-gray-200 ">
                {/* Background pattern */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            `url(${CTABG})`,
                        // backgroundSize: "300px 300px",
                        // backgroundRepeat: "repeat",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 text-center py-16 px-6 sm:px-12">
                    {/* Logo/Icon */}
                    <div className="flex justify-center">
                        <svg width="60" height="60" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5 83C64.4198 83 83 64.4198 83 41.5C83 18.5802 64.4198 0 41.5 0C18.5802 0 0 18.5802 0 41.5C0 54.3496 5.83997 65.8353 15.0105 73.4476L21.4941 58.2202C17.7507 53.7384 15.4981 47.9685 15.4981 41.6724C15.4981 27.407 27.0625 15.8425 41.328 15.8425C55.5934 15.8425 67.1578 27.407 67.1578 41.6724C67.1578 55.9379 55.5934 67.5023 41.328 67.5023C38.3067 67.5023 35.4066 66.9836 32.7119 66.0304L15.106 73.5266C22.2791 79.4449 31.4744 83 41.5 83Z" fill="url(#paint0_linear_1704_41)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1704_41" x1="41.5" y1="0" x2="41.5" y2="83" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#64A8F0"></stop>
                                    <stop offset="1" stop-color="#007CFF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                        Ready to start with ProSights?
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        ProSights automates the everyday, high-stakes tasks—data pulls,
                        chart recreation, custom formatting—so your analysts focus on
                        insights, not busywork.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition"
                        >
                            Get in touch
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
