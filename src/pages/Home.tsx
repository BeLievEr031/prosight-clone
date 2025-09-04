import FAQ from "../sections/Faq"
import Features from "../sections/Features"
import HeroSection from "../sections/Hero"
import HowItWorks from "../sections/HowItWorks"
import Partners from "../sections/Partners"
import SecuritySection from "../sections/Security"
import Testimonials from "../sections/Testimonial"

function Home() {
    return (
        <div className="">
            <HeroSection />
            <Partners />
            <Features />
            <SecuritySection />
            <HowItWorks />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default Home