'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/resume", name: "resume" },
  { path: "/contact", name: "contact" },
];

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    return (
        <div className="relative">
            {/* Hamburger button */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-3xl focus:outline-none z-20"
            >
                {isOpen ? (
                    // X icon when menu is open
                    <span className="block">✕</span>
                ) : (
                    // Hamburger icon when menu is closed
                    <span className="block">☰</span>
                )}
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute right-0 top-12 w-48 bg-white dark:bg-[#190F1F] shadow-lg rounded-md py-4 px-6 z-10"
                >
                    <nav className="flex flex-col gap-y-5">
                        {links.map((link, index) => (
                            <div key={index} className="relative">
                                <Link
                                    href={link.path}
                                    className={`uppercase text-sm hover:text-[#AD8F75] transition-all ${
                                        link.path === path ? "text-[#AD8F75]" : ""
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.path === path && (
                                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8F75] rounded-full" />
                                )}
                            </div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default MobileNavbar;



