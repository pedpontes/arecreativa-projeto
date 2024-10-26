-- CreateTable
CREATE TABLE `Activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `resum` TEXT NULL,
    `objective` VARCHAR(255) NOT NULL,
    `BNCC` TEXT NOT NULL,
    `time_total` INTEGER NOT NULL,
    `necessary_resources` TEXT NOT NULL,
    `guide` TEXT NOT NULL,
    `actived` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
