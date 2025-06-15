"use client";
import React, { useState } from 'react';
import "../style/navbar.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/aboutUs", label: "Hakkımızda" },
    { href: "/ourProducts", label: "Ürünlerimiz" },
    { href: "/ourServices", label: "Hizmetlerimiz" },
    { href: "/contact", label: "İletişim" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbarMain">
      <Link href="/" className="navbarImgDiv">
        <img className="navbarImg" src="/Zirex_Logo.png" alt="Zirex_Kağıt_Logo" />
      </Link>

      <div className="burgerIcon" onClick={toggleMenu}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <div className={`navbarLinks ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbarLink ${pathname === link.href ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;