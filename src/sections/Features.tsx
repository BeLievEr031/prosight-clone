import { Link } from "react-router-dom"
import FeatureImg1 from "../assets/feature1.png"
import FeatureImg2 from "../assets/feature2.png"
import FeatureImg3 from "../assets/feature3.png"
import FeatureImg4 from "../assets/feature4.png"
function Features() {
    return (
        <section className="px-16 py-20 font-arimo">
            <h1 className="text-5xl text-primary-black">Prism by ProSights</h1>
            <p className="mt-3 text-primary-gray">Leverage enterprise automation tools to craft tailored outputs with speed and precision.</p>

            <Link
                to="/"
                className="inline-block bg-primary-black px-5 py-2 text-white font-medium rounded-full mt-4"
            >
                Try it out
            </Link>
            <Link
                to="/"
                className="inline-block px-5 py-2 border border-primary-gray mx-5 font-medium rounded-full"
            >
                Sign In
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <FeatureCard
                    icon={<Table className="w-6 h-6 text-black" />}
                    desc="Extract financial data from PDFs and complex images right into excels in your company format."
                    img={FeatureImg1}
                    title="Table Extraction"
                />
                <FeatureCard
                    icon={<BarChart className="w-6 h-6 text-black" />}
                    desc="Create charts from any PDF or image in your preferred format, with Excel-ready backups—even charts without labeled datapoints."
                    img={FeatureImg2}
                    title="Smart Chart Generation"
                />
                <FeatureCard
                    icon={<Webhook className="w-6 h-6 text-black" />}
                    desc="Create charts from any PDF or image in your preferred format, with Excel-ready backups—even charts without labeled datapoints."
                    img={FeatureImg3}
                    title="Smart Chart Generation"
                />
                <FeatureCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><path d="M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z"></path></svg>}
                    desc="Create charts from any PDF or image in your preferred format, with Excel-ready backups—even charts without labeled datapoints."
                    img={FeatureImg4}
                    title="Smart Chart Generation"
                />
            </div>
        </section>
    )
}


import { BarChart, Table, Webhook } from "lucide-react"; // icon at top-left
import type { ReactNode } from "react";


interface ICard {
    title: string;
    icon: ReactNode;
    desc: string;
    img: string;
}
function FeatureCard({ desc, icon, img, title }: ICard) {
    return (
        <section className="bg-white py-12 px-6">
            <div className="">
                {/* Left Content */}
                <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                        {icon}
                    </div>

                    {/* Title & Text */}
                    <h3 className="text-2xl font-semibold">Table Extraction

                        {title}

                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Extract financial data from PDFs and complex images right into
                        excels in your company format.

                        {desc}
                    </p>
                </div>

                {/* Right Content (Image Illustration) */}
                <div className="flex justify-center">
                    <img
                        src={img} // replace with your image
                        alt="Table Extraction"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}


export default Features