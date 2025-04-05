'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/resume", name: "resume" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <div key={index} className="relative inline-block">
          <Link
            href={link.path}
            className={`uppercase ${linkStyles}`}
          >
            {link.name}
          </Link>
          {link.path === path && (
            <motion.span
              layoutId="underline" 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "tween" }}
              className="absolute bottom-0 left-0 h-0.5 bg-[#AD8F75]" //* underlinestyles
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
