import Features from "../sections/Features"
import HeroSection from "../sections/Hero"
import Partners from "../sections/Partners"
import SecuritySection from "../sections/Security"

function Home() {
    return (
        <div className="">
            <HeroSection />
            <Partners />
            <Features />
            <SecuritySection />
        </div>
    )
}

export default Home