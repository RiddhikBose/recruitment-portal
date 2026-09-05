"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import UserButton from "./UserButton";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const [formattedTimeDisplay, setFormattedTimeDisplay] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setFormattedTimeDisplay(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isAuthenticated = Boolean(session?.user?.email);
  const isAdmin = session?.user?.role === "admin";

  const navItems = [{ label: "Departments", href: "/departments" }];
  if (isAuthenticated && isAdmin) {
    navItems.push({ label: "Admin Panel", href: "/admin" });
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Recruitment Portal
          </Link>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {formattedTimeDisplay}
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {isPending ? (
            <span className="text-muted-foreground">Loading...</span>
          ) : !isAuthenticated ? (
            <Link
              href="/auth/signin"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign In
            </Link>
          ) : (
            <UserButton user={session.user} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;