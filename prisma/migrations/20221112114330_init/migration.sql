-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('PROMOTER', 'VISITOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "type" "UserType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivationStand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "ActivationStand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActivation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "activationStandId" INTEGER NOT NULL,

    CONSTRAINT "UserActivation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserActivation_userId_key" ON "UserActivation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserActivation_activationStandId_key" ON "UserActivation"("activationStandId");

-- AddForeignKey
ALTER TABLE "UserActivation" ADD CONSTRAINT "UserActivation_activationStandId_fkey" FOREIGN KEY ("activationStandId") REFERENCES "ActivationStand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivation" ADD CONSTRAINT "UserActivation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
