'use client';

import React, {useState, useEffect} from "react";

// *components
import ThemeToggler from "./ThemeToggler"
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const Header = () => {
    const [header, setHeader] = useState(false);
    const path = usePathname();
   
    useEffect(() => {
        const scrollYPosition = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

// * remove event

    return () => window.removeEventListener('scroll',scrollYPosition);

    });

    return (
        <header className={`${header ? 'py-4 bg-[#D4C8B8] shadow-lg dark:bg-[#190F1F]' : 'py-8  dark:bg-transparent'} sticky top-0 z-30 transition-all
        ${path === '/' && 'bg-'} `}>
            {/* *container */}
            <div className="container mx-auto">
            {/* *container of logo, theme toggler and stuff */}
            <div className="flex justify-between items-center ">
                <Logo />
                {/* *navbar*/}
                <div className="flex items-center gap-x-6">
                <Nav containerStyles='hidden xl:flex gap-x-8 items-center' 
                linkStyles='relative hover:text-primary transition-all'
                />
                <ThemeToggler />
                 {/* * mobile navbar*/}
                <div className="xl:hidden">
                <MobileNavbar/>
                </div>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

