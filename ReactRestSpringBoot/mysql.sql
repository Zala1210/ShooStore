/*
 Navicat Premium Data Transfer

 Source Server         : shoodb
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : localhost:3306
 Source Schema         : mysql

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 06/07/2020 20:10:45
*/

SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `comment_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `date_posted` date NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `commented_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 'Comfortable Shoe, would recommend!!', 1, '2020-06-01', NULL, NULL);
INSERT INTO `comment` VALUES (2, 'Awful material but anyways, pretty comfortable', 2, '2020-06-12', NULL, NULL);
INSERT INTO `comment` VALUES (3, 'Bad shoe!', 1, '2020-06-12', NULL, NULL);


-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group`  (
  `group_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES (1, 'admin');
INSERT INTO `group` VALUES (2, 'mod');
INSERT INTO `group` VALUES (3, 'user');


-- ----------------------------
-- Table structure for shoe
-- ----------------------------
DROP TABLE IF EXISTS `shoe`;
CREATE TABLE `shoe`  (
  `shoe_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`shoe_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shoe
-- ----------------------------
INSERT INTO `shoe` VALUES (1, 'Jordan 1 Retro', 10, 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Bred-Toe/Images/Air-Jordan-1-Retro-High-Bred-Toe/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256');
INSERT INTO `shoe` VALUES (2, 'Nike Air Force 1', 6, 'https://i8.amplience.net/i/jpl/jd_156841_a?qlt=92');
INSERT INTO `shoe` VALUES (3, 'Adidas Yeezy', 5, 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra/Images/Adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1578503931');
INSERT INTO `shoe` VALUES (4, 'Jordan 4', 10, 'https://stockx-360.imgix.net/Air-Jordan-4-Retro-Bred-2019/Images/Air-Jordan-4-Retro-Bred-2019/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1555622524');
INSERT INTO `shoe` VALUES (5, 'Nike SB', 10, 'https://www.sportvision.rs/files/thumbs/files/images/slike_proizvoda/thumbs_800/CT3463-001_800_800px.jpg');
INSERT INTO `shoe` VALUES (6, 'Nike Air Max', 5, 'https://stockx.imgix.net/Nike-Air-Max-90-Independence-Day-2013-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256');
INSERT INTO `shoe` VALUES (7, 'Reebok Classic', 2, 'https://www.djaksport.com/image.aspx?imageId=105688');

-- ----------------------------
-- Table structure for shoe_comment
-- ----------------------------
DROP TABLE IF EXISTS `shoe_comment`;
CREATE TABLE `shoe_comment`  (
  `shoe_comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `shoe_id` int(10) UNSIGNED NOT NULL,
  `comment_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`shoe_comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shoe_comment
-- ----------------------------
INSERT INTO `shoe_comment` VALUES (1, 2, 1, 0);
INSERT INTO `shoe_comment` VALUES (3, 6, 3, 4);
INSERT INTO `shoe_comment` VALUES (8, 2, 4, 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `group_id` int(10) UNSIGNED NOT NULL,
  `is_admin` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `fk_user_group_id`(`group_id`) USING BTREE,
  CONSTRAINT `fk_user_group_id` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'lazar@mail.com', 'lazar', 'lazar1210', 'x0xJJUteKVfP3vp44pVkpQA', 1, b'1');
INSERT INTO `users` VALUES (2, 'admin@mail.com', 'admin', '123', NULL, 1, b'0');
INSERT INTO `users` VALUES (3, 'Test@mail.com', 'admin1', 'admin', 'ENK8NHtdRj6PrVLNHpKUj33', 3, b'0');
INSERT INTO `users` VALUES (4, 'test@mail.com', 'test1', 'test1', NULL, 3, b'0');
INSERT INTO `users` VALUES (5, 'test552mail.com', 'test2', 'test2', NULL, 3, b'0');
INSERT INTO `users` VALUES (6, 'test42mail.com', 'test3', 'test3', NULL, 3, b'0');
INSERT INTO `users` VALUES (7, 'test123mail.com', 'test4', 'test4', NULL, 3, b'0');
INSERT INTO `users` VALUES (8, 'moderator@modmail.com', 'moderator', '12345', NULL, 2, b'0');

SET FOREIGN_KEY_CHECKS = 1;
