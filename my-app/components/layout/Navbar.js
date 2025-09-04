"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-900" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
       <Image src="/zeblogo.png"  alt="Logo" width={200} height={50} />

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center space-x-8 font-medium">
          <Link href="/work" className="hover:text-blue-500">Work</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-900 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/work" className="hover:text-blue-500">Work</Link>
            <Link href="/services" className="hover:text-blue-500">Services</Link>
            <Link href="/about" className="hover:text-blue-500">About Us</Link>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
