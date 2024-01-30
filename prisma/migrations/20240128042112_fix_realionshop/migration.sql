/*
  Warnings:

  - Made the column `usersId` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_id_fkey`;

-- DropForeignKey
ALTER TABLE `variant` DROP FOREIGN KEY `variant_id_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `usersId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `variant` ADD CONSTRAINT `variant_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `menu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
