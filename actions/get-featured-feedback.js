
import { db } from "@/lib/prisma";

export async function getFeaturedFeedback() {
  return await db.feedback.findMany({
    where: {
      featured: true,
    },
    take: 3, 
    orderBy: {
      createdAt: "desc",
    },
  });
}
