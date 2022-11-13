/*
  Warnings:

  - You are about to drop the column `code` on the `ActivationStand` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `User` table. All the data in the column will be lost.
  - Added the required column `cellphone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ActivationStand" DROP COLUMN "code";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "code",
ADD COLUMN     "cellphone" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
