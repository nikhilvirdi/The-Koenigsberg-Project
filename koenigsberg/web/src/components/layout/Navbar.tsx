"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "../../../public/logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/about" },
    { name: "Theory", href: "/theory" },
    { name: "Algorithms", href: "/algorithms" },
    { name: "Author", href: "/author" },
  ];

  return (
    <header className="w-full flex flex-col select-none">
      {/* Row 1: Header Row */}
      <div className="h-[60px] bg-[#FAFAF8] px-[40px] flex items-center">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={logoImg.src} 
            alt="The Koenigsberg Project" 
            className="h-[96px] w-auto block border-none bg-transparent object-contain" 
          />
        </Link>
      </div>

      {/* Row 2: Navigation Bar */}
      <div className="h-[42px] bg-[#E8E5E2] w-full border-b border-[#D4D4D4] flex justify-center items-center">
        <nav className="h-full flex items-center justify-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center h-full px-[12px] font-serif transition-colors duration-150 ${
                  active
                    ? "bg-[#4B4038] text-white"
                    : "text-[#1A1A1A] hover:bg-[#D4D0CC]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
