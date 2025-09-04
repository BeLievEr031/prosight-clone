import { Binoculars, LogIn, Rocket, Unplug, type LucideIcon } from "lucide-react";

function HowItWorks() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
                How It Works
            </h1>
            <p className="text-gray-500 text-center text-base sm:text-lg mt-2 max-w-2xl mx-auto">
                Dedicated single-tenant VPC deployment with SSO, firm-wide custom
                formatting, and audit logs
            </p>

            {/* Card stack container */}
            <div className="relative mt-20">
                <div className="h-[100vh] relative space-y-10">
                    <StackedCard
                        Icon={Rocket}
                        desc="Single-tenant environment live in 1-2 weeks under your custom domain"
                        title="VPC Setup"
                    />
                    <StackedCard
                        Icon={LogIn}
                        desc="Users sign in seamlessly through your existing SAML or OIDC provider."
                        title="Connect SSO"
                    />
                    <StackedCard
                        Icon={Unplug}
                        desc="Load your fonts, colors, borders, and header styles in minutes."
                        title="Define Formatting"
                    />
                    <StackedCard
                        Icon={Binoculars}
                        desc="Instant Excel and PowerPoint exports, with Excel auto-formatted."
                        title="Automate Workflows"
                    />
                </div>
            </div>
        </section>
    );
}

interface ICard {
    title: string;
    desc: string;
    Icon: LucideIcon;
}

export function StackedCard({ Icon, desc, title }: ICard) {
    return (
        <div className="sticky top-20 flex items-center justify-center rounded-xl mx-auto w-full sm:w-[80%] md:w-[60%]">
            {/* Timeline dot + line */}
            <div className="absolute top-1/2 -left-0 -translate-x-full z-10 w-[60px] sm:w-[80px] md:w-[100px] h-px bg-gray-300">
                <div className="size-2 sm:size-3 bg-blue-400 rotate-45 absolute left-0 -translate-x-full -translate-y-1/2"></div>
            </div>

            {/* Card */}
            <div className="relative bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 w-full">
                {/* Faint background icon */}
                <Icon className="absolute right-4 top-4 sm:right-6 sm:top-6 w-12 h-12 sm:w-20 sm:h-20 text-gray-200 opacity-30" />

                {/* Foreground content */}
                <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" />
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
