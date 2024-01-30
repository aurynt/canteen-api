/*
  Warnings:

  - You are about to drop the column `orderId` on the `pesanan` table. All the data in the column will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pesanId` to the `pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_usersId_fkey`;

-- DropForeignKey
ALTER TABLE `pesanan` DROP FOREIGN KEY `pesanan_orderId_fkey`;

-- AlterTable
ALTER TABLE `pesanan` DROP COLUMN `orderId`,
    ADD COLUMN `pesanId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `order`;

-- CreateTable
CREATE TABLE `pesan` (
    `id` VARCHAR(191) NOT NULL,
    `usersId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pesan` ADD CONSTRAINT `pesan_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pesanan` ADD CONSTRAINT `pesanan_pesanId_fkey` FOREIGN KEY (`pesanId`) REFERENCES `pesan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
