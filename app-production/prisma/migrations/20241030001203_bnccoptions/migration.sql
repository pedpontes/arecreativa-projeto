/*
  Warnings:

  - You are about to drop the column `BNCC` on the `Activities` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Activities` DROP COLUMN `BNCC`;

-- CreateTable
CREATE TABLE `BNCC_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activities_BNCC` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `Activities_id` INTEGER NOT NULL,
    `BNCC_id` INTEGER NOT NULL,
    `actived` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activities_BNCC` ADD CONSTRAINT `Activities_BNCC_Activities_id_fkey` FOREIGN KEY (`Activities_id`) REFERENCES `Activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities_BNCC` ADD CONSTRAINT `Activities_BNCC_BNCC_id_fkey` FOREIGN KEY (`BNCC_id`) REFERENCES `BNCC_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
