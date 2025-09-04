import { useState } from "react";
import { X, Plus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What makes ProSights different from other AI platforms?",
        answer:
            "ProSights is purpose-built for finance professionals. We deliver measurable time-savings on day one with no training—simply upload a deck and download formatted outputs in minutes. We have the highest adoption in our customers of any finance AI platform.",
    },
    {
        question: "How does ProSights match our firm's formatting style?",
        answer:
            "During onboarding we ingest your templates—fonts, color palette, borders, number formats, even chart presets—so every Excel table and chart slide is rendered in your company’s format style automatically.",
    },
    {
        question:
            "How accurate is ProSights, and how do you validate data accuracy?",
        answer:
            "Table extraction is 99%+ accurate, charts with data labels reproduce to the digit, and unlabeled visuals land within ±3%. We always include the original source for instant auditability, with cell level citations for users of our excel plugin.",
    },
    {
        question: "How is ProSights deployed, and how do you keep data secure?",
        answer:
            "ProSights is deployed in a single-tenant VPC—or hardened multi-tenant setup—encrypting data in transit (TLS 1.3) and at rest (AES-256). Access integrates with your SAML/OIDC SSO. We are SOC 2 Type II compliant and complete annual penetration tests.",
    },
    {
        question: "Which document types and data sources can ProSights ingest?",
        answer:
            "ProSights ingests virtually any finance document—PDFs, scanned decks, and VDR screenshots—then pipes the data straight into Excel in your firm’s exact format. Process hundreds of pages or more directly into your own custom format in mere minutes.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="px-4 sm:px-8 md:px-16 py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
                Frequently Asked Questions
            </h1>

            <div className="mt-12 max-w-4xl mx-auto divide-y divide-gray-200">
                {faqs.map((faq, i) => (
                    <div key={i} className="py-6">
                        <button
                            className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
                            onClick={() => toggle(i)}
                        >
                            {faq.question}
                            {openIndex === i ? (
                                <X className="w-5 h-5 text-gray-500" />
                            ) : (
                                <Plus className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {openIndex === i && (
                            <p className="mt-4 text-gray-600 text-base">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
