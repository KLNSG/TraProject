-- MySQL dump 10.13  Distrib 5.7.10, for Win32 (AMD64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `adminid` int(4) NOT NULL AUTO_INCREMENT,
  `adminname` varchar(20) NOT NULL,
  `adminpwd` varchar(20) NOT NULL,
  `adminimage` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `airplane`
--

DROP TABLE IF EXISTS `airplane`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `airplane` (
  `airID` varchar(10) DEFAULT NULL,
  `startcity` int(11) DEFAULT NULL,
  `starttime` datetime DEFAULT NULL,
  `endcity` int(11) DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airplane`
--

LOCK TABLES `airplane` WRITE;
/*!40000 ALTER TABLE `airplane` DISABLE KEYS */;
INSERT INTO `airplane` VALUES ('GS7870',1,'2019-04-06 22:00:00',2,'2019-04-07 02:00:00',500),('HU7803',1,'2019-04-07 12:30:00',2,'2019-04-08 13:30:00',1300),('KN5769',1,'2019-04-05 12:50:00',2,'2019-04-06 05:30:00',1200),('HU7623',1,'2019-04-06 13:20:00',6,'2019-04-07 04:00:00',1200),('HU4423',1,'2019-04-05 13:20:00',6,'2019-04-06 04:00:00',1100),('HU2234',1,'2019-04-07 13:10:00',6,'2019-04-08 03:00:00',1000),('GS6633',1,'2019-04-06 22:00:00',2,'2019-04-07 02:30:00',800),('GS1122',1,'2019-04-06 22:00:00',2,'2019-04-07 01:30:00',900),('GS8527',1,'2019-04-07 22:30:00',2,'2019-04-08 02:30:00',899),('HU4362',1,'2019-04-06 13:20:00',6,'2019-04-07 04:00:00',1400),('HU7413',1,'2019-04-06 13:20:00',6,'2019-04-07 02:00:00',1399),('FEN4712',1,'2019-04-06 13:20:00',6,'2019-04-07 03:00:00',850),('AA1234',19,'2019-04-07 15:30:00',19,'2019-04-07 19:30:00',1234);
/*!40000 ALTER TABLE `airplane` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buy`
--

DROP TABLE IF EXISTS `buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `airid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buy`
--

LOCK TABLES `buy` WRITE;
/*!40000 ALTER TABLE `buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `cityid` int(4) NOT NULL AUTO_INCREMENT,
  `cityname` varchar(20) NOT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'北京'),(2,'天津'),(3,'哈尔滨'),(4,'石家庄'),(5,'沈阳'),(6,'杭州'),(7,'广州'),(8,'武汉'),(9,'成都'),(10,'昆明'),(11,'兰州'),(12,'南宁'),(13,'太原'),(14,'南京'),(15,'合肥'),(16,'长沙'),(17,'西安'),(18,'安徽'),(19,'江西'),(20,'上海'),(21,'广东'),(22,'瑞金'),(23,'湖南'),(24,'黑龙江'),(25,'河北'),(26,'新疆');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cityjian`
--

DROP TABLE IF EXISTS `cityjian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cityjian` (
  `jid` int(11) DEFAULT NULL,
  `jname` varchar(20) DEFAULT NULL,
  `jjie` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cityjian`
--

LOCK TABLES `cityjian` WRITE;
/*!40000 ALTER TABLE `cityjian` DISABLE KEYS */;
INSERT INTO `cityjian` VALUES (2,'天津之眼','天津之眼是世界唯一建在桥上的摩天轮，是天津的地标之一。摩天轮直径为110米，轮外装挂48个360度透 明座舱，每个座舱可乘坐8个人，可同时供384个人观光。摩天轮旋转一周所需时间为28分钟，到达最高处时，周边景色一览无余，甚至能看到方圆40公里以内的景致，被誉为\"天津之眼'),(6,'雷峰塔','雷峰塔是由吴越国王钱俶为祈求国泰民安而于北宋太平兴国二年（977年）在西湖南岸夕照山上建造的佛塔,中国民间故事《白蛇传》中，法海和尚骗许仙至金山，白娘子水漫金山救许仙，被法海镇在雷峰塔下。后小青苦练法力，终于打败了法海，雷峰塔倒塌，白素贞获救.');
/*!40000 ALTER TABLE `cityjian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citymei`
--

DROP TABLE IF EXISTS `citymei`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `citymei` (
  `mid` int(11) DEFAULT NULL,
  `mname` varchar(20) DEFAULT NULL,
  `mjie` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citymei`
--

LOCK TABLES `citymei` WRITE;
/*!40000 ALTER TABLE `citymei` DISABLE KEYS */;
INSERT INTO `citymei` VALUES (2,'狗不理包子','狗不理包子是一道由面粉、猪肉等材料制作而成的小吃，始创于公元1858年（清朝咸丰年间），为\"天津三绝\"之首，是中华老字号之一。狗不理包子的面、馅选料精细，制作工艺严格，外形美观，特别是包子褶花匀称，每个包子都不少于15个 褶'),(6,'杭州东坡肉','杭州东坡肉是一道色香味俱全的传统名肴，属于浙菜系。东坡肉是以苏东坡的名字命名的菜肴。苏东坡(苏轼）是中国北宋时期的著名诗人，他对诗人、书法有很深的造诣，对烹调菜肴亦很有研究。他自己会烹制菜肴，并十分擅长烧肉，在他的许多名诗中，亦有 关于饮食方面的内容');
/*!40000 ALTER TABLE `citymei` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight_user`
--

DROP TABLE IF EXISTS `flight_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flight_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flight_id` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_user`
--

LOCK TABLES `flight_user` WRITE;
/*!40000 ALTER TABLE `flight_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `flight_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotel` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `hotelname` varchar(50) NOT NULL,
  `cityid` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scenic`
--

DROP TABLE IF EXISTS `scenic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scenic` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `scenicname` varchar(50) NOT NULL,
  `cityid` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scenic`
--

LOCK TABLES `scenic` WRITE;
/*!40000 ALTER TABLE `scenic` DISABLE KEYS */;
/*!40000 ALTER TABLE `scenic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `train`
--

DROP TABLE IF EXISTS `train`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `train` (
  `trainid` int(4) NOT NULL AUTO_INCREMENT,
  `trainname` varchar(20) NOT NULL,
  `cityid` int(4) NOT NULL,
  PRIMARY KEY (`trainid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `train`
--

LOCK TABLES `train` WRITE;
/*!40000 ALTER TABLE `train` DISABLE KEYS */;
/*!40000 ALTER TABLE `train` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userid` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `userpwd` varchar(20) NOT NULL,
  `userimage` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'卡列宁','123456','tou2.jpg'),(2,'张三','123456','tou.jpg'),(3,'3','123456',NULL),(4,'1','1','0.mp4');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `userid` int(255) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `useage` int(5) NOT NULL,
  `usersex` varchar(4) DEFAULT NULL,
  `userphone` varchar(12) DEFAULT NULL,
  `usercardid` varchar(18) DEFAULT NULL,
  `useraddress` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (2,'张三',20,'男','123123','123213','实打实','sad');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-06  4:44:30
