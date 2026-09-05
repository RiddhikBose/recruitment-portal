"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Recruitment 2026
      </h1>
      <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
        Ready to make your mark?
      </h2>
      <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
        Join our departments and work on real-world projects. Your journey starts here.
      </p>
      <Button asChild size="lg" className="mt-4 gap-2">
        <Link href="/departments">
          Join us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}