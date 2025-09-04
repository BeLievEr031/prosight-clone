import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

    const testimonials = [
        {
            text: "ProSights is a simple, reliable application of AI for our investment professionals. We’ve evaluated hundreds of tools, and this is one of the few that delivers on their promises. Our professionals love it.",
            author: "Head of Digital Transformation, $70B+ PE fund",
        },
        {
            text: "We were able to deploy and integrate within weeks. The impact on workflow efficiency has been tremendous.",
            author: "CIO, Global Asset Manager",
        },
        {
            text: "The automation features saved us countless hours in reporting. The customization is unmatched.",
            author: "Operations Director, Private Equity Firm",
        },
    ];

    return (
        <section className="px-4 sm:px-8 md:px-16 py-20 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
                Trusted by Industry Leaders
            </h1>
            <p className="text-gray-500 text-center text-base sm:text-lg mt-2">
                Empowering more efficient workflows across finance professionals
            </p>

            {/* Swiper */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg shadow-sm py-5">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="py-2 max-w-3xl mx-auto text-center">
                                <Quote className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                                <p className="text-lg text-gray-800">{t.text}</p>
                                <p className="mt-4 font-semibold text-black">{t.author}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        ref={setPrevEl}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        ref={setNextEl}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
