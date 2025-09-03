import Partner1Img from "../assets/partner1.png"
import Partner2Img from "../assets/partner2.png"
import Partner3Img from "../assets/partner3.png"
import FinanceTrustSection from "../components/FinanceTrust"
function Partners() {
    return (
        <section className="font-arimo px-6 sm:px-10 lg:px-16 py-10">
            <h1 className="text-center text-xl sm:text-2xl text-primary-black font-semibold mb-8">
                Trusted by best-in-class firms
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-6 text-center">
                <img src={Partner1Img} alt="Partner 1" className="mx-auto  object-contain" />
                <img src={Partner2Img} alt="Partner 2" className="mx-auto max-h-12 object-contain" />
                <img src={Partner3Img} alt="Partner 3" className="mx-auto max-h-12 object-contain" />
                <p className="text-primary-black font-semibold">and many more...</p>
            </div>
            <FinanceTrustSection />
        </section>

    )
}

export default Partners