"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import DataTable from "./DataTable";

const AdminContent = ({ applicants }) => {
  const { data: session } = authClient.useSession();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8 space-y-1">
        <p className="text-sm font-medium text-muted-foreground">
          Signed in as {session?.user?.name || session?.user?.email}
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Admin Panel
        </h1>
        <p className="text-sm text-muted-foreground">
          {applicants.length} total application{applicants.length !== 1 ? "s" : ""}
        </p>
      </header>

      <DataTable data={applicants} />
    </div>
  );
};

export default AdminContent;