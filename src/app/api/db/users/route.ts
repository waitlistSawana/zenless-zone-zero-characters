"use server"

import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";

export async function GET(req: NextRequest) {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(
      { message: "All Users", users: users },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get users" },
      { status: 500 },
    );
  }
}

export function methodNotAllowed() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
