"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function deleteFeedback(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const feedback = await db.feedback.findUnique({
    where: { id },
  });

  if (!feedback || feedback.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await db.feedback.delete({
    where: { id },
  });
}
