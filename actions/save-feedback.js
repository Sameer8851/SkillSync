"use server";

import { auth } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";
import { db } from "@/lib/prisma";

export async function saveFeedback({ name, email, role, message, rating }) {
  const { userId } = await auth();
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");
  const clerkUser = await users.getUser(userId);
  const image = clerkUser.imageUrl;

  await db.feedback.create({
    data: {
      userId,
      name,
      email,
      image,
      role,
      message,
      rating: parseInt(rating),
      featured: false,
    },
  });
}
