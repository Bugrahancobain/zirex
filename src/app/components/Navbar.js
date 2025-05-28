"use client";
import React from 'react';
import "../style/navbar.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/aboutUs", label: "Hakkımızda" },
    { href: "/ourProducts", label: "Ürünlerimiz" },
    { href: "/ourServices", label: "Hizmetlerimiz" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <div className="navbarMain">
      <Link href="/" className="navbarImgDiv">
        <img className="navbarImg" src="#" alt="Zirex_Kağıt_Logo" />
      </Link>
      <div className="navbarLinks">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbarLink ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;