"use server";

import { db } from "@/lib/prisma";

export async function getAllFeedback() {
  return await db.feedback.findMany({
    orderBy: { createdAt: "desc" },
    take: 12,
    select: {
      id: true,
      name: true,
      role: true,
      message: true,
      rating: true,
      image: true,
      userId: true, // ✅ include this
    },
  });
}
