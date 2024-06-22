"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen items-center justify-center">
      <SignUp />
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
