"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Departments", path: "/departments" },
  ];

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>Organization · Recruitment Portal {year}</p>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;