/*
  Warnings:

  - You are about to drop the column `feedback` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userImage` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userRole` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `email` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "feedback",
DROP COLUMN "userEmail",
DROP COLUMN "userImage",
DROP COLUMN "userName",
DROP COLUMN "userRole",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
