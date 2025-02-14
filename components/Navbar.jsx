"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl text-blue-400 font-bold">
          JS
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-xl"
        >
          ☰
        </button>
        <div className={`sm:flex ${menuOpen ? "block" : "hidden"}`}>
          <Link href="/about" className="mx-4">
            About
          </Link>
          <Link href="/projects" className="mx-4">
            Projects
          </Link>
          <Link href="/skills" className="mx-4">
            Skills
          </Link>
          <Link href="/blog" className="mx-4">
            Blog
          </Link>
          <Link href="/contact" className="mx-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
