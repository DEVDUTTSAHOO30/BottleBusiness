// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const socialLinks = [
    { href: "#", icon: <FaFacebook size={32} className="hover:text-blue-600" /> },
    { href: "https://www.instagram.com/_aqua_drip?igsh=ZG5remtvdHViM3V4", icon: <FaInstagram size={32} className="hover:text-pink-500" /> },
    { href: "#", icon: <FaTwitter size={32} className="hover:text-blue-400" /> },
    { href: "#", icon: <FaTiktok size={32} className="hover:text-gray-500" /> },
];
export default function Footer() {
    return (
        <footer className="bg-black px-4 sm:px-6 pt-12 pb-6 font-sans">
            <hr></hr>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* About AquaDrip */}
                <div className="space-y-4">
                    <h6 className="text-sm text-white font-medium">ABOUT AQUADRIP</h6>
                    <p className="text-gray-400 text-[13px]">
                        AquaDrip is revolutionizing hydration with our unique leaking-cap water bottles. Stay refreshed, stay unique!
                    </p>
                </div>

                {/* Customer Support */}
                <div className="space-y-4">
                    <h6 className="text-sm text-white font-medium">CUSTOMER SUPPORT</h6>
                    <ul className="space-y-2.5 text-gray-400">
                        {[
                            "Help Center",
                            "Track Your Order",
                            "Shipping & Delivery",
                            "Returns & Refunds",
                            "FAQs",
                            "Contact Us",
                        ].map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="text-[13px] hover:text-white">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Policies */}
                <div className="space-y-4">
                    <h6 className="text-sm text-white font-medium">POLICIES</h6>
                    <ul className="space-y-2.5 text-gray-400">
                        {[
                            "Terms & Conditions",
                            "Privacy Policy",
                            "Refund Policy",
                            "Sustainability Commitment",
                            "Cookie Preferences",
                        ].map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="text-[13px] hover:text-white">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="space-y-4">
                    <h6 className="text-sm text-white font-medium">FOLLOW US</h6>
                    <ul className="flex space-x-4">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.icon}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <h6 className="text-[13px] text-gray-400 font-medium">
                            Get the latest AquaDrip updates and exclusive offers!
                        </h6>
                        <div className="mt-4">
                            <Link
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded"
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-600" />

            <div className="max-w-screen-xl mx-auto text-center">
                <p className="text-gray-400 text-[13px]">
                    AquaDrip © 2024. Stay Hydrated, Stay Unique.
                </p>
            </div>
        </footer>
    );
}
