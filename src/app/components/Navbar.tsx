"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
//import { cn } from "@/lib/utils";

export function Navbar() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="fixed top-4 inset-x-0 max-w-3xl mx-auto z-50">
            <Menu setActive={setActive}>
                {/* Home */}
                <MenuItem setActive={setActive} active={active} item="Home">
                    <HoveredLink href="/">Go to Homepage</HoveredLink>
                </MenuItem>

                {/* About Us */}
                <MenuItem setActive={setActive} active={active} item="About Us">
                    <div className="flex flex-col space-y-3 text-sm p-3">
                        <HoveredLink href="/our-mission">🌎 Our Mission</HoveredLink>
                        <HoveredLink href="/team">👥 Meet the Team</HoveredLink>
                    </div>
                </MenuItem>

                {/* Our Product */}
                {/* <MenuItem setActive={setActive} active={active} item="Our Product">
                    <div className="grid grid-cols-1 gap-4 p-4 text-sm">
                        <ProductItem
                            title="AquaFlow"
                            href="/product/aquaflow"
                            src="/images/aquaflow.webp"
                            description="Smart water bottle with controlled leak technology."
                        />
                        <ProductItem
                            title="LeakGuard Pro"
                            href="/product/leakguard"
                            src="/images/leakguard.webp"
                            description="Innovative water bottle with smart seal."
                        />
                    </div>
                </MenuItem> */}

                {/* Pricing */}
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-3 text-sm p-3">
                        <HoveredLink href="/pricing">💰 Compare Plans</HoveredLink>
                        <HoveredLink href="/discounts">🔥 Special Offers</HoveredLink>
                    </div>
                </MenuItem>

                {/* Contact */}
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-3 text-sm p-3">
                        <HoveredLink href="/contact">📩 Contact Us</HoveredLink>
                        <HoveredLink href="/support">🔧 Support</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

/* --- Supporting Components --- */

export const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => {
    return (
        <nav onMouseLeave={() => setActive(null)} className="relative rounded-full bg-white dark:bg-black shadow-lg flex justify-center space-x-6 px-6 py-4 overflow-visible">
            {children}
        </nav>
    );
};

export const MenuItem = ({ setActive, active, item, children }: { setActive: (item: string) => void; active: string | null; item: string; children?: React.ReactNode }) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p className="cursor-pointer text-black hover:opacity-80 dark:text-white">
                {item}
            </motion.p>
            {active === item && (
                <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
                    <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
                        <motion.div className="bg-white dark:bg-black rounded-2xl border border-gray-300 dark:border-gray-600 shadow-xl p-3">
                            <motion.div>{children}</motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const ProductItem = ({ title, description, href, src }: { title: string; description: string; href: string; src: string }) => {
    return (
        <Link href={href} className="flex space-x-4">
            <Image src={src} width={120} height={60} alt={title} className="rounded-md shadow-md" />
            <div>
                <h4 className="text-lg font-semibold text-black dark:text-white">{title}</h4>
                <p className="text-gray-700 text-sm max-w-[12rem] dark:text-gray-300">{description}</p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link {...rest} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            {children}
        </Link>
    );
};
