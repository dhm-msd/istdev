
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `machines`
-- ----------------------------
DROP TABLE IF EXISTS `machines`;
CREATE TABLE `machines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `relationship_id` int(11) DEFAULT '0',
  `base_power` int(11) DEFAULT '2',
  `max_power` int(11) DEFAULT '10',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of machines
-- ----------------------------
INSERT INTO `machines` VALUES ('1', '1', '1', '2', '10');
INSERT INTO `machines` VALUES ('2', '1', '1', '2', '10');

-- ----------------------------
-- Table structure for `measurements`
-- ----------------------------
DROP TABLE IF EXISTS `measurements`;
CREATE TABLE `measurements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `machine_id` int(11) DEFAULT '1',
  `value` decimal(11,1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=363 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of measurements
-- ----------------------------
INSERT INTO `measurements` VALUES ('264', '2017-05-12 00:15:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('265', '2017-05-12 00:30:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('266', '2017-05-12 00:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('267', '2017-05-12 01:00:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('268', '2017-05-12 01:15:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('269', '2017-05-12 01:30:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('270', '2017-05-12 01:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('271', '2017-05-12 02:00:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('272', '2017-05-12 02:15:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('273', '2017-05-12 02:30:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('274', '2017-05-12 02:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('275', '2017-05-12 03:00:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('276', '2017-05-12 03:15:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('277', '2017-05-12 03:30:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('278', '2017-05-12 03:45:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('279', '2017-05-12 04:00:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('280', '2017-05-12 04:15:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('281', '2017-05-12 04:30:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('282', '2017-05-12 04:45:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('283', '2017-05-12 05:00:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('284', '2017-05-12 05:15:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('285', '2017-05-12 05:30:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('286', '2017-05-12 05:45:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('287', '2017-05-12 06:00:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('288', '2017-05-12 06:15:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('289', '2017-05-12 06:30:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('290', '2017-05-12 06:45:00', '1', '2.4');
INSERT INTO `measurements` VALUES ('291', '2017-05-12 07:00:00', '1', '2.3');
INSERT INTO `measurements` VALUES ('292', '2017-05-12 07:15:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('293', '2017-05-12 07:30:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('294', '2017-05-12 07:45:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('295', '2017-05-12 08:00:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('296', '2017-05-12 08:15:00', '1', '2.0');
INSERT INTO `measurements` VALUES ('297', '2017-05-12 08:30:00', '1', '2.1');
INSERT INTO `measurements` VALUES ('298', '2017-05-12 08:45:00', '1', '2.4');
INSERT INTO `measurements` VALUES ('299', '2017-05-12 09:00:00', '1', '2.3');
INSERT INTO `measurements` VALUES ('300', '2017-05-12 09:15:00', '1', '4.0');
INSERT INTO `measurements` VALUES ('301', '2017-05-12 09:30:00', '1', '4.5');
INSERT INTO `measurements` VALUES ('302', '2017-05-12 09:45:00', '1', '7.9');
INSERT INTO `measurements` VALUES ('303', '2017-05-12 10:00:00', '1', '9.0');
INSERT INTO `measurements` VALUES ('304', '2017-05-12 10:15:00', '1', '9.6');
INSERT INTO `measurements` VALUES ('305', '2017-05-12 10:30:00', '1', '9.2');
INSERT INTO `measurements` VALUES ('306', '2017-05-12 10:45:00', '1', '9.4');
INSERT INTO `measurements` VALUES ('307', '2017-05-12 11:00:00', '1', '8.9');
INSERT INTO `measurements` VALUES ('308', '2017-05-12 11:15:00', '1', '8.6');
INSERT INTO `measurements` VALUES ('309', '2017-05-12 11:30:00', '1', '9.0');
INSERT INTO `measurements` VALUES ('310', '2017-05-12 11:45:00', '1', '8.8');
INSERT INTO `measurements` VALUES ('311', '2017-05-12 12:00:00', '1', '7.8');
INSERT INTO `measurements` VALUES ('312', '2017-05-12 12:15:00', '1', '8.5');
INSERT INTO `measurements` VALUES ('313', '2017-05-12 12:30:00', '1', '8.7');
INSERT INTO `measurements` VALUES ('314', '2017-05-12 12:45:00', '1', '8.5');
INSERT INTO `measurements` VALUES ('315', '2017-05-12 13:00:00', '1', '8.0');
INSERT INTO `measurements` VALUES ('316', '2017-05-12 13:15:00', '1', '7.8');
INSERT INTO `measurements` VALUES ('317', '2017-05-12 13:30:00', '1', '7.6');
INSERT INTO `measurements` VALUES ('318', '2017-05-12 13:45:00', '1', '7.1');
INSERT INTO `measurements` VALUES ('319', '2017-05-12 14:00:00', '1', '6.9');
INSERT INTO `measurements` VALUES ('320', '2017-05-12 14:15:00', '1', '7.7');
INSERT INTO `measurements` VALUES ('321', '2017-05-12 14:30:00', '1', '8.0');
INSERT INTO `measurements` VALUES ('322', '2017-05-12 14:45:00', '1', '7.5');
INSERT INTO `measurements` VALUES ('323', '2017-05-12 15:00:00', '1', '7.2');
INSERT INTO `measurements` VALUES ('324', '2017-05-12 15:15:00', '1', '7.0');
INSERT INTO `measurements` VALUES ('325', '2017-05-12 15:30:00', '1', '8.0');
INSERT INTO `measurements` VALUES ('326', '2017-05-12 15:45:00', '1', '7.5');
INSERT INTO `measurements` VALUES ('327', '2017-05-12 16:00:00', '1', '7.0');
INSERT INTO `measurements` VALUES ('328', '2017-05-12 16:15:00', '1', '8.3');
INSERT INTO `measurements` VALUES ('329', '2017-05-12 16:30:00', '1', '7.8');
INSERT INTO `measurements` VALUES ('330', '2017-05-12 16:45:00', '1', '7.0');
INSERT INTO `measurements` VALUES ('331', '2017-05-12 17:00:00', '1', '7.8');
INSERT INTO `measurements` VALUES ('332', '2017-05-12 17:15:00', '1', '7.8');
INSERT INTO `measurements` VALUES ('333', '2017-05-12 17:45:00', '1', '7.5');
INSERT INTO `measurements` VALUES ('334', '2017-05-12 18:00:00', '1', '6.0');
INSERT INTO `measurements` VALUES ('335', '2017-05-12 18:15:00', '1', '5.8');
INSERT INTO `measurements` VALUES ('336', '2017-05-12 18:30:00', '1', '4.3');
INSERT INTO `measurements` VALUES ('337', '2017-05-12 18:45:00', '1', '3.9');
INSERT INTO `measurements` VALUES ('338', '2017-05-12 19:00:00', '1', '2.5');
INSERT INTO `measurements` VALUES ('339', '2017-05-12 19:15:00', '1', '2.2');
INSERT INTO `measurements` VALUES ('340', '2017-05-12 19:30:00', '1', '2.4');
INSERT INTO `measurements` VALUES ('341', '2017-05-12 19:45:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('342', '2017-05-12 20:00:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('343', '2017-05-12 20:15:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('344', '2017-05-12 20:30:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('345', '2017-05-12 20:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('346', '2017-05-12 21:00:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('347', '2017-05-12 21:15:00', '1', '2.0');
INSERT INTO `measurements` VALUES ('348', '2017-05-12 21:30:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('349', '2017-05-12 21:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('350', '2017-05-12 22:00:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('351', '2017-05-12 22:15:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('352', '2017-05-12 22:30:00', '1', '1.7');
INSERT INTO `measurements` VALUES ('353', '2017-05-12 22:45:00', '1', '1.8');
INSERT INTO `measurements` VALUES ('354', '2017-05-12 23:00:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('355', '2017-05-12 23:15:00', '1', '1.9');
INSERT INTO `measurements` VALUES ('356', '2017-05-12 23:30:00', '1', '1.5');
INSERT INTO `measurements` VALUES ('357', '2017-05-12 23:45:00', '1', '1.6');
INSERT INTO `measurements` VALUES ('358', '2017-05-12 00:00:00', '1', '1.6');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `api_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'yolo', '12345');
