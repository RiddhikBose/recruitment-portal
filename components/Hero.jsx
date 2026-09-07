"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden px-6 py-24 text-center sm:py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[420px] w-[420px] animate-pulse rounded-full bg-primary/30 blur-[120px] sm:h-[600px] sm:w-[600px]" />
        <div className="absolute h-[280px] w-[280px] animate-pulse rounded-full bg-blue-500/20 blur-[100px] [animation-delay:1s]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_auto] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
      >
        Recruitment 2026
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-xl font-medium text-muted-foreground sm:text-2xl"
      >
        Ready to make your mark?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl text-base text-muted-foreground sm:text-lg"
      >
        Join our departments and work on real-world projects. Your journey starts here.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <Button
          asChild
          size="lg"
          className="group mt-4 gap-2 transition-transform hover:scale-105"
        >
          <Link href="/departments">
            Join us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}