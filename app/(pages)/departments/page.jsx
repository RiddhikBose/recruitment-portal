"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MagicCard } from "@/components/magicui/magic-card";
import { toast } from "sonner";
import { reviews } from "@/constants";
import { useSubmissions } from "@/components/SubmissionsProvider";

const departments = reviews;

const DepartmentsListPage = () => {
  const router = useRouter();
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const { submittedDepartments } = useSubmissions();

  const remainingSlots = 2 - submittedDepartments.length;

  const selectedIds = departments
    .filter((dept) => selectedDepartments.includes(dept.name))
    .map((dept) => dept.id);

  const isContinueDisabled = selectedIds.length === 0;

  const toggleDepartment = (departmentName) => {
    if (submittedDepartments.includes(departmentName)) {
      toast.error(`You have already submitted an application for ${departmentName}.`);
      return;
    }

    if (remainingSlots <= 0) {
      toast.error("You have already submitted the maximum allowed (2) applications.");
      return;
    }

    setSelectedDepartments((current) => {
      const isSelected = current.includes(departmentName);

      if (isSelected) {
        return current.filter((name) => name !== departmentName);
      }

      if (current.length >= remainingSlots) {
        toast.error(`You can select at most ${remainingSlots} department(s).`);
        return current;
      }

      return [...current, departmentName];
    });
  };

  const goToApplication = () => {
    if (!selectedIds.length) return;
    router.push(`/join/${selectedIds.join("/")}`);
  };

  return (
    <main>
      <NavBar />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-10 space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Step 01 · Select
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pick your departments
          </h1>
          <p className="text-muted-foreground">
            Select up to <strong>two</strong> departments. Check the departments you wish to apply for.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm font-semibold">
              {selectedDepartments.length} / 2 selected
            </span>
            <Button onClick={goToApplication} disabled={isContinueDisabled}>
              Continue to application →
            </Button>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Available Departments</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {departments.map((department) => {
              const isSelected = selectedDepartments.includes(department.name);
              const isSubmitted = submittedDepartments.includes(department.name);

              return (
                <li key={department.id} className={isSubmitted ? "opacity-60" : ""}>
                  <MagicCard
                    gradientColor={isSelected ? "#8ab4f8" : "#404040"}
                    gradientOpacity={0.5}
                    className={`w-full ${isSelected ? "border-primary" : ""}`}
                  >
                    <label className="flex w-full cursor-pointer items-start gap-3 p-4">
                      <Checkbox
                        disabled={isSubmitted}
                        checked={isSelected}
                        onCheckedChange={() => toggleDepartment(department.name)}
                        className="mt-1"
                      />
                      <span>
                        <span className="block font-semibold">
                          {department.name}
                          {isSubmitted && (
                            <span className="ml-2 text-xs font-normal text-muted-foreground">
                              (Already Submitted)
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {department.description}
                        </span>
                      </span>
                    </label>
                  </MagicCard>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default DepartmentsListPage;