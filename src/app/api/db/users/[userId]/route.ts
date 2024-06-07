"use server";

import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  const { userId } = params;
  try {
    await db.user.delete({
      where: { id: Number(userId) },
    });
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 },
    );
  }
}

export async function methodNotAllowed() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
