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
        </div>
    )
}

export default Home