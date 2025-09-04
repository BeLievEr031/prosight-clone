import { ExternalLink } from "lucide-react";
import Logo from "../components/Logo";

export default function Footer() {
    return (
        <footer className="border-t bg-gradient-to-b from-blue-50/40 to-white">
            <div className="px-6 sm:px-12 py-12">
                {/* Top section: Logo & tagline */}
                <div className="">
                    <p className="text-gray-600 mb-2">
                        Enterprise AI for Finance Professionals
                    </p>
                    <div className="hidden md:block">
                        <Logo
                            width={700}
                            height={200}
                        />
                    </div>
                    <div className="md:hidden">
                        <Logo
                            width={350}
                            height={200}
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        © ProSights Inc. All rights reserved.
                    </p>
                </div>

                {/* Divider */}
                <hr className="my-10 border-gray-200" />

                {/* Footer links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-700">
                    {/* Pages */}
                    <div>
                        <h3 className="font-medium mb-3">Pages</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li>
                                <a href="#" className="inline-flex items-center gap-1">
                                    Security <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Book a Demo</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-medium mb-3">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Insights</a></li>
                            <li>
                                <a href="#" className="inline-flex items-center gap-1">
                                    Careers <span className="ml-1 px-1.5 py-0.5 text-xs bg-black text-white rounded">7</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-medium mb-3">Contact</h3>
                        <ul>
                            <li>
                                <a href="mailto:info@prosights.com" className="hover:underline">
                                    info@prosights.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-medium mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Trust Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
