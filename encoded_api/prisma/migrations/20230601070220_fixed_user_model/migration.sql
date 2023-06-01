/*
  Warnings:

  - Added the required column `birthYear` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motive` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleNo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `birthYear` INTEGER NOT NULL,
    ADD COLUMN `motive` LONGTEXT NOT NULL,
    ADD COLUMN `roleNo` INTEGER NOT NULL;
