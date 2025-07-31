/*
  Warnings:

  - You are about to drop the column `email` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `feedback` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userRole` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "email",
DROP COLUMN "message",
DROP COLUMN "name",
DROP COLUMN "role",
ADD COLUMN     "feedback" TEXT NOT NULL,
ADD COLUMN     "userEmail" TEXT NOT NULL,
ADD COLUMN     "userImage" TEXT,
ADD COLUMN     "userName" TEXT NOT NULL,
ADD COLUMN     "userRole" TEXT NOT NULL;
