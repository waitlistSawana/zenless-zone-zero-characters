"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen items-center justify-center">
      <SignIn />
      <Button
        variant={"default"}
        className="absolute right-3 top-3"
        onClick={() => router.back()}
      >
        Back
      </Button>
    </div>
  );
}
