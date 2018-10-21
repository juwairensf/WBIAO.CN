/*
Navicat MySQL Data Transfer

Source Server         : phpnow
Source Server Version : 50150
Source Host           : localhost:3306
Source Database       : userlist

Target Server Type    : MYSQL
Target Server Version : 50150
File Encoding         : 65001

Date: 2018-10-21 14:20:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `detaillist`
-- ----------------------------
DROP TABLE IF EXISTS `detaillist`;
CREATE TABLE `detaillist` (
  `person` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `QQ` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detaillist
-- ----------------------------
INSERT INTO `detaillist` VALUES ('http://www.baidu.com', '2147483647', '2561567718', '2561567718@qq.com', '9722869f96a6acc1b8099e5d6c35bb4d', 'szfe34', '2');
INSERT INTO `detaillist` VALUES ('http://www.baidu.com', '2147483647', '2345567889', '2345567889@qq.com', 'e10adc3949ba59abbe56e057f20f883e', 'szfe35', '3');

-- ----------------------------
-- Table structure for `wanbiao`
-- ----------------------------
DROP TABLE IF EXISTS `wanbiao`;
CREATE TABLE `wanbiao` (
  `rphone` varchar(11) COLLATE utf8_bin NOT NULL,
  `cpwd` varchar(255) COLLATE utf8_bin NOT NULL,
  `pwd` varchar(255) COLLATE utf8_bin NOT NULL,
  `txt` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone` varchar(11) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of wanbiao
-- ----------------------------
INSERT INTO `wanbiao` VALUES ('2147483647', 'd10906c3dac1172d4f60bd41f224ae75', 'd10906c3dac1172d4f60bd41f224ae75', '566o', '2147483647', '1');
INSERT INTO `wanbiao` VALUES ('18294920044', 'd10906c3dac1172d4f60bd41f224ae75', 'd10906c3dac1172d4f60bd41f224ae75', 'Ebn7', '15213805593', '2');
INSERT INTO `wanbiao` VALUES ('18294920044', 'd10906c3dac1172d4f60bd41f224ae75', 'd10906c3dac1172d4f60bd41f224ae75', 'Ebn7', '15213805825', '3');
