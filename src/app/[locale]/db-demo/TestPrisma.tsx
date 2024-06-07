"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";

type UsersT = {
  id: number;
  email: string;
  name: string | null;
};

export default function TestPrisma({
  initialUsers,
}: {
  initialUsers: UsersT[];
}) {
  const [users, setUsers] = useState<UsersT[]>(initialUsers);

  const { toast } = useToast();

  const deleteUserHandler = async (userId: number) => {
    try {
      toast({ title: "Delete User ..." });
      const response = await fetch(`/api/db/users/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        toast({ title: "not ok response", duration: 3000 });
        throw new Error("Failed to delete user");
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      toast({ title: "User deleted successfully!", duration: 3000 });
    } catch (error) {
      toast({
        title: "Failed to delete user. Please try again.",
        duration: 3000,
      });
      console.error(error);
    }
  };

  return (
    <div>
      {users.map((u) => (
        <div key={u.id} className="flex justify-between py-0.5">
          <Button variant={"ghost"}>{u.id}</Button>
          <Button variant={"ghost"}>{u.name}</Button>
          <Button variant={"ghost"}>{u.email}</Button>
          <Button variant={"secondary"} onClick={() => deleteUserHandler(u.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
