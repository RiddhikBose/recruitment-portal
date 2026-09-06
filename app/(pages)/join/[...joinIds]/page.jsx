"use client";
// React import
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
// Constant import
import { reviews } from "@/constants/index";

// Component imports
import NavBar from "@/components/NavBar";
import FormComp from "@/components/FormComp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const JoinDepartmentPage = ({ params }) => {
  const [departmentParamIds, setDepartmentParamIds] = useState([]);
  const [resolvedDepartment1, setResolvedDepartment1] = useState(null);
  const [resolvedDepartment2, setResolvedDepartment2] = useState(null);

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (params?.joinIds) {
      setDepartmentParamIds([...params.joinIds]);
    }
  }, [params]);

  useEffect(() => {
    if (departmentParamIds.length > 0) {
      const d1 = reviews.find((d) => d.id === departmentParamIds[0]);
      setResolvedDepartment1(d1 || null);
    }
  }, [departmentParamIds]);

  useEffect(() => {
    if (departmentParamIds.length > 1) {
      const d2 = reviews.find((d) => d.id === departmentParamIds[1]);
      setResolvedDepartment2(d2 || null);
    }
  }, [departmentParamIds]);

  const user = session?.user;
  const isSignedIn = !!user;

  if (isPending) {
    return (
      <main>
        <NavBar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </main>
    );
  }

  const departments = reviews.filter((dept) =>
    params.joinIds.includes(dept.id),
  );
  const ids = params.joinIds;

  const valid = ids.every(
    (id) => reviews.some((dept) => dept.id === id) || id.startsWith("clerk_"),
  );

  if (!valid) {
    notFound();
  }

  return (
    <main>
      <NavBar />
      <div>
        {isSignedIn ? (
          <FormComp dept1={departments[0]} dept2={departments[1]} />
        ) : (
          <section className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Authentication Required
            </h2>
            <p className="text-muted-foreground">
              Please sign in to access the application form.
            </p>
            <Button onClick={() => router.push("/auth/signin")}>
              Sign In
            </Button>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default JoinDepartmentPage;