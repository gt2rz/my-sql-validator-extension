CREATE DEFINER 'miguel@example' TABLE `checkin_history` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `domiciliary_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `reason` VARCHAR(1000) NOT NULL COMMENT 'Campo donde se guarda el motivo por el cual se creo el checkin.',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;