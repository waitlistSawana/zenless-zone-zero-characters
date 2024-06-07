import React from "react";
import { db } from "@/db";
import TestPrisma from "./TestPrisma";
import { fetchAllUsers } from "@/lib/db-demo/user-data";

export default async function DatabaseDemoPage() {
  const allUsers = await fetchAllUsers();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-50">
      <div className="">DatabaseDemoPage</div>
      <TestPrisma initialUsers={allUsers} />
    </div>
  );
}
