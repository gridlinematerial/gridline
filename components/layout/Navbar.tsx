"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import { navLinks } from "../utils/data";
import { MaterialSymbol } from "../utils/MaterialSymbol";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-secondary/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 md:px-8 md:py-6">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="h-12 w-12 object-cover"
          />
          <div className="font-grotesk text-2xl hidden md:block font-black tracking-tighter text-secondary md:text-4xl">
            GRIDLINE
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-12 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-grotesk text-sm font-bold uppercase tracking-[0.05em] transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-secondary opacity-70 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#contact">
            <Button size="sm">Get Quote</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden"
        >
          <MaterialSymbol
            name={isOpen ? "close" : "menu"}
            size={35}
            className="text-secondary"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-6 px-6 pb-6">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-grotesk text-sm font-bold uppercase tracking-[0.05em] transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "text-primary"
                    : "text-secondary opacity-80 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a href="#contact">
            <Button
              size="sm"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
