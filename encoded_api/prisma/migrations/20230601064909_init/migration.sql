-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(6) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_nickname_key`(`nickname`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
