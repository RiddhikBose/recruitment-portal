"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import DataTable from "./DataTable";

const AdminContent = ({ applicants }) => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const isAuthenticated = !isPending && !!user;
  const isAdmin = isAuthenticated && user?.role === "admin";

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Authentication Required</h2>
        <p className="text-muted-foreground">Please sign in to access the admin panel.</p>
        <Button onClick={() => (window.location.href = "/auth/signin")}>
          Sign In
        </Button>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <p className="text-lg font-medium text-destructive">
          Access Denied! You are not authorized to view this webpage.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Admin Dashboard</h1>
      <DataTable data={applicants} />
    </div>
  );
};

export default AdminContent;