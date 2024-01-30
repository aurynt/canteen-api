/*
  Warnings:

  - You are about to drop the column `detail_orderId` on the `menu` table. All the data in the column will be lost.
  - You are about to drop the `detail_order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detail_order` DROP FOREIGN KEY `detail_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `menu` DROP FOREIGN KEY `menu_detail_orderId_fkey`;

-- AlterTable
ALTER TABLE `menu` DROP COLUMN `detail_orderId`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `detail_order`;

-- CreateTable
CREATE TABLE `pesanan` (
    `id` VARCHAR(191) NOT NULL,
    `menuId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pesanan` ADD CONSTRAINT `pesanan_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pesanan` ADD CONSTRAINT `pesanan_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
