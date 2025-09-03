import { Square } from "lucide-react"

export default function FinanceTrustSection() {
    const items = [
        "Private Equity",
        "Equity Research",
        "Investment Banking",
        "Private Credit",
        "Asset Management",
        "Secondaries",
    ]

    return (
        <section className="mt-16 px-6 lg:px-12 py-10 font-arimo">
            <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-sm p-8 flex flex-col md:flex-row md:items-start md:justify-between">
                {/* Left side: Heading */}
                <h2 className="text-xl sm:text-2xl font-semibold text-primary-black mb-6 md:mb-0 md:max-w-xs">
                    Trusted by leading <br /> finance institutions:
                </h2>

                {/* Right side: Items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <Square size={16} className="text-primary-black" fill="currentColor" />
                            <span className="text-primary-black text-base">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
