/*
  Warnings:

  - The primary key for the `BlogPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BlogPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `tagId` on table `BlogPost` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BlogPost" DROP CONSTRAINT "BlogPost_tagId_fkey";

-- AlterTable
ALTER TABLE "BlogPost" DROP CONSTRAINT "BlogPost_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "tagId" SET NOT NULL,
ADD CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
