-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: HRM_project
-- ------------------------------------------------------
-- Server version	8.0.25-cluster

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Accounts`
--

DROP TABLE IF EXISTS `Accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Accounts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Accounts`
--

LOCK TABLES `Accounts` WRITE;
/*!40000 ALTER TABLE `Accounts` DISABLE KEYS */;
INSERT INTO `Accounts` VALUES ('06161f12-a647-4dbe-89d7-cb338693d53e','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','manager','$2b$10$XAkyhU2I3sF606rergpcIuX164cScGGVc9ksl.9hjIQR4pA25bG6K','2021-06-24 02:22:37','2021-06-24 02:22:37','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('38d66388-a4d8-44a9-90cb-0049a1b1c332','f2d0582a-0c5e-4716-b834-ae1b8076077f','director','$2b$10$sPagEa8c3Bu3Qi89z8P.meHo1D18NrbPi3L5hjxGM1M1c3Zp3zYgO','2021-06-24 04:40:02','2021-06-24 09:32:36','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('450f3600-f32f-4c0b-a892-e63d7021dc43','fbd0d11c-6ae5-46f9-bd84-87e496a142f5','employee2','$2b$10$ZowJJPWrQAwlnm6U1jQGSuIjGZNY/6n7t8kvmKUx85xhEBCLYln62','2021-06-30 04:24:16','2021-06-30 04:24:16',NULL,'f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('84af41e5-6c07-4812-b2b5-043dd30bf90d','f037a2db-5002-43c1-80cb-1bbffc4758f2','admin','$2b$10$cil/s0.QTshBVcX4Qb/AJOAv6IoxqCC7bqQ.SkIt5JZ1CX.elQeJm','2021-06-23 03:22:12','2021-06-23 03:22:12','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('8c01d07d-3e9f-47d8-adfc-040b1c41ae84','b8552298-7075-45bb-9fc1-4f9e28c127a1','hraccount','$2b$10$ysj8/5uQ2QOwTLFEKrQSRu5yqs.7dJxukbOA8FPDBmQrlAtvfpnAS','2021-06-24 02:23:12','2021-06-24 02:23:12','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('8fc3233a-674a-4107-8fa4-cfbcb148d59a','cab64ec3-e333-4675-985e-1c7cde4b444b','employee3','$2b$10$QugfayuDXNBPWyXsbwM07eERyVwWL1Z7vewWiNAt2V9iC1DgJO9pm','2021-07-02 07:52:56','2021-07-02 07:58:05',NULL,'b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('a6ccb244-7954-42e3-945b-657027547387','8b8ba587-5ec4-4bac-aab7-4923f7af447e','employee1','$2b$10$RPGruenLDJhyF/bwDZWgbOQMVGCt4mXAG1cItZEd4tcGylI/pLlB6','2021-06-25 07:31:30','2021-07-02 04:06:28','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',1),('bb4c88a4-f224-4b6f-b319-4bf7ae105fd2','2b105106-25ed-49d1-8bb5-d0d1001d5793','employee','$2b$10$xdmCkaEQg9mk2XeBdP5NrO0dc1G372fpianMl4yzOEOOmTFLSvnsq','2021-06-24 02:22:02','2021-06-24 02:22:02','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('c1b48bfb-b42e-4fb8-9419-687e4d78b21c','cab64ec3-e333-4675-985e-1c7cde4b444b','employee3','$2b$10$FcQRo7dHbzLmmlEqJo/7jORIPFvmqtqqhvstWownFI/0IT6ZE3dn2','2021-07-15 13:29:52','2021-07-15 13:29:52','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0);
/*!40000 ALTER TABLE `Accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Forms`
--

DROP TABLE IF EXISTS `Forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Forms` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `typeOf` varchar(255) DEFAULT NULL,
  `managerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `note` text,
  `task` text,
  `achievement` text,
  `managerComment` text,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Forms`
--

LOCK TABLES `Forms` WRITE;
/*!40000 ALTER TABLE `Forms` DISABLE KEYS */;
INSERT INTO `Forms` VALUES ('85979cca-bd67-4c72-b91d-6c252ea2b3fe','2b105106-25ed-49d1-8bb5-d0d1001d5793','yearly','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','So many','Many','Nothing ','Ok Done','closed','2021-07-16 04:10:04','2021-07-16 04:12:51','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('9fb475da-c800-4e6e-bd24-25bd0b3bf923','8b8ba587-5ec4-4bac-aab7-4923f7af447e','yearly',NULL,NULL,NULL,NULL,NULL,'new','2021-07-16 04:10:04','2021-07-16 04:10:04','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('b00e4a90-6f67-42ac-b0a8-b74716055399','fbd0d11c-6ae5-46f9-bd84-87e496a142f5','yearly',NULL,NULL,NULL,NULL,NULL,'new','2021-07-16 04:10:04','2021-07-16 04:10:04','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('c97021c6-1f23-4631-9fc2-65c88cc8e029','9b878523-8f7c-4e8e-8ce0-bc9ae261a19f','yearly',NULL,NULL,NULL,NULL,NULL,'new','2021-07-16 04:10:04','2021-07-16 04:10:04','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('d2dc1317-65f8-4b14-b875-eee9fc2349d8','cab64ec3-e333-4675-985e-1c7cde4b444b','yearly',NULL,NULL,NULL,NULL,NULL,'new','2021-07-16 04:10:04','2021-07-16 04:10:04','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0);
/*!40000 ALTER TABLE `Forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rolepermissions`
--

DROP TABLE IF EXISTS `Rolepermissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rolepermissions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `roleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `moduleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `canRead` int DEFAULT NULL,
  `canWrite` int DEFAULT NULL,
  `canUpdate` int DEFAULT NULL,
  `canDelete` int DEFAULT NULL,
  `canApprove` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rolepermissions`
--

LOCK TABLES `Rolepermissions` WRITE;
/*!40000 ALTER TABLE `Rolepermissions` DISABLE KEYS */;
INSERT INTO `Rolepermissions` VALUES ('02c2461f-b660-411f-9379-a53417c24c83','5a4a612c-a4ee-4b58-a220-38e5b2203741','5a4a612c-a4ee-4b58-a220-38e5b2203741',1,1,1,1,1,'2021-07-01 01:57:26','2021-07-01 01:57:26','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/infors'),('07ac39ec-9d83-4a5f-8e44-69d5ec7c8bde','5a4a612c-a4ee-4b58-a220-38e5b2203741','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,1,1,1,1,'2021-06-23 08:51:16','2021-06-23 08:51:16','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms'),('0c87f819-aee2-4664-a441-3ebcab00e1f5','faafd1f0-518f-4fe4-ae36-654d67da1562','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,1,1,1,1,'2021-06-23 09:33:56','2021-06-23 09:33:56','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms'),('552d7804-9be3-4ecb-88e1-ce897b01035b','ee3c4173-f6e2-454e-99a3-e1c59f455d22','934efd23-3212-4ace-9041-c9d4ed6010aa',0,0,0,0,0,'2021-06-30 04:28:56','2021-06-30 04:28:56','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms'),('65c53a8a-1dc1-449e-bd1e-223496144df9','258c3db8-5a98-40e4-94bc-753c2c0eb73c','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,0,1,0,1,'2021-06-23 09:33:40','2021-06-23 09:33:40','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms'),('7deacea8-1b33-4abe-bd26-c5ccc5079b64','38cf3745-268f-43f3-a283-b4a49d9d21ad','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,1,1,1,0,'2021-06-23 09:32:47','2021-06-23 09:32:47','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms'),('89044ffc-cd90-4f98-b2c0-aa9fe94a8e10','faafd1f0-518f-4fe4-ae36-654d67da1562','f5ed0de4-b3f2-4e58-871b-8a6a547bfbb7',1,0,1,0,0,'2021-07-01 02:00:49','2021-07-01 02:00:49','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/users'),('921c88a2-4df3-48bd-9ca0-959d11e666cf','38cf3745-268f-43f3-a283-b4a49d9d21ad','f5ed0de4-b3f2-4e58-871b-8a6a547bfbb7',1,1,1,1,0,'2021-07-01 02:01:09','2021-07-01 02:01:09','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/users'),('a6a542b1-0156-49f7-af49-d7f96b140693','faafd1f0-518f-4fe4-ae36-654d67da1562','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,1,0,0,0,'2021-07-02 07:45:23','2021-07-02 07:49:30','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0,'/roles'),('b0c6f288-20d2-4069-8797-3dcb0894f230','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','f5ed0de4-b3f2-4e58-871b-8a6a547bfbb7',1,0,1,0,0,'2021-07-01 02:01:37','2021-07-01 02:01:37','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/users'),('b5a65078-bc13-4b5e-b858-431efc481093','5a4a612c-a4ee-4b58-a220-38e5b2203741','f5ed0de4-b3f2-4e58-871b-8a6a547bfbb7',1,1,1,1,1,'2021-07-01 01:57:53','2021-07-01 01:57:53','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/users'),('bcbe7ca6-4fa1-4b6f-a8ed-82d447c905e1','258c3db8-5a98-40e4-94bc-753c2c0eb73c','f5ed0de4-b3f2-4e58-871b-8a6a547bfbb7',1,0,1,0,0,'2021-07-01 02:00:33','2021-07-01 02:00:33','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/users'),('c9100fb1-3890-477e-bdf9-6261d3d77919','1de057e3-9867-4bbe-b0ad-7c509151f22a','6b33259f-fcb2-4178-ab81-589cd894f9f4',1,0,0,0,0,'2021-07-02 07:44:26','2021-07-02 07:44:26','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0,'/roles'),('da992bf7-de6a-457d-8223-1db27e145dd8','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','aa221bae-884e-4d41-8ca5-f2d36beeab8c',1,0,1,0,0,'2021-06-23 09:30:42','2021-06-23 09:30:42','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0,'/forms');
/*!40000 ALTER TABLE `Rolepermissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Roles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `roleName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
INSERT INTO `Roles` VALUES ('258c3db8-5a98-40e4-94bc-753c2c0eb73c','manager','2021-06-23 04:12:33','2021-06-23 04:12:33','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('38cf3745-268f-43f3-a283-b4a49d9d21ad','hr','2021-06-23 04:10:18','2021-06-23 04:10:18','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('5a4a612c-a4ee-4b58-a220-38e5b2203741','admin','2021-06-23 04:09:11','2021-06-23 04:09:11','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('a5c7c3bc-8889-4396-9961-dea5732639df','demo-update','2021-07-27 03:17:17','2021-07-27 03:17:29',NULL,NULL,0),('d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','employee','2021-06-23 04:12:47','2021-06-23 04:12:47','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('faafd1f0-518f-4fe4-ae36-654d67da1562','director','2021-06-23 04:12:20','2021-06-23 04:12:20','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0);
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Screens`
--

DROP TABLE IF EXISTS `Screens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Screens` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `moduleName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Screens`
--

LOCK TABLES `Screens` WRITE;
/*!40000 ALTER TABLE `Screens` DISABLE KEYS */;
INSERT INTO `Screens` VALUES ('934efd23-3212-4ace-9041-c9d4ed6010aa','account','2021-06-28 06:23:14','2021-06-28 06:23:14','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('aa221bae-884e-4d41-8ca5-f2d36beeab8c','form','2021-06-23 08:33:18','2021-06-23 08:33:18','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('b6a32ce2-3937-4ba6-bfef-8e1cba5c68ac','role','2021-07-27 02:52:58','2021-07-27 02:53:14',NULL,NULL,0);
/*!40000 ALTER TABLE `Screens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210622032542-create-user.js'),('20210622032853-create-role.js'),('20210622033329-create-account.js'),('20210622100743-create-user-role.js'),('20210622101015-create-module.js'),('20210622101249-create-role-permission.js'),('20210622101422-create-form.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Userroles`
--

DROP TABLE IF EXISTS `Userroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Userroles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `roleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  `isDelete` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Userroles`
--

LOCK TABLES `Userroles` WRITE;
/*!40000 ALTER TABLE `Userroles` DISABLE KEYS */;
INSERT INTO `Userroles` VALUES ('030ba2b6-d48e-401c-b122-7640c6095a8c','f037a2db-5002-43c1-80cb-1bbffc4758f2','5a4a612c-a4ee-4b58-a220-38e5b2203741','2021-06-23 06:47:13','2021-06-23 06:47:13','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('34aac06f-7b2a-4db5-a554-677392a8453a','c6488a4f-9789-46fb-a4f6-7bdd9a5ae732','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-11 03:03:49','2021-07-11 03:03:49','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('4db8da86-5243-4f60-a6cd-2e01194e8c1b','cab64ec3-e333-4675-985e-1c7cde4b444b','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-02 07:01:52','2021-07-02 07:23:53','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('6903f66e-b141-4f9f-b8a5-3469a1bfc446','1e43299c-0c8d-4e3f-8163-b97e4be26fc5','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-10 00:42:58','2021-07-10 00:42:58','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('6b705b9d-eac7-4bc2-a00e-c5671251c325','2b105106-25ed-49d1-8bb5-d0d1001d5793','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-06-23 06:49:31','2021-06-23 06:49:31','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('6ef9ac50-f707-49d2-a70f-a077ef871025','f290226e-9b4c-46dc-8b38-46bb441e59f9','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-11 03:22:14','2021-07-11 03:22:14','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('9eecc75b-8812-4513-861a-de5e9895f05f','88fba9a2-3e6a-48cc-ac40-66e373192e43','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-11 08:11:13','2021-07-11 08:11:13','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('a9ed2a80-ea75-4777-a0b8-1a25d1a90265','9b878523-8f7c-4e8e-8ce0-bc9ae261a19f','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-06 04:10:56','2021-07-06 04:10:56','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('b891d748-5be8-42e6-8fbc-c7ea2e277e78','647c4054-bcfb-4c94-ae72-0a155e9f9531','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-11 03:11:18','2021-07-11 03:11:18','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('bed26402-7628-4b85-b9c0-a23158ba1950','4574867a-ddd9-4b50-8c23-4d554744dab8','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-14 13:26:59','2021-07-14 13:26:59','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('cd17d89e-82c2-464f-89bb-0947ba5881af','fbd0d11c-6ae5-46f9-bd84-87e496a142f5','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-06-30 04:23:42','2021-06-30 04:23:42','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('cf4941df-3d20-4de3-b70b-48e0a1164efc','f2d0582a-0c5e-4716-b834-ae1b8076077f','faafd1f0-518f-4fe4-ae36-654d67da1562','2021-06-23 06:48:00','2021-06-23 06:48:00','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('d22bcf43-9ca0-4c26-bd70-4b47bc0d9cc3','b8552298-7075-45bb-9fc1-4f9e28c127a1','258c3db8-5a98-40e4-94bc-753c2c0eb73c','2021-06-30 07:56:03','2021-06-30 07:56:03','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('d4d9acfa-92d1-4562-b971-fd8a5504f1b0','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','258c3db8-5a98-40e4-94bc-753c2c0eb73c','2021-06-23 06:48:28','2021-06-23 06:48:28','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('e6074893-1d09-486e-8c4e-9449960fa9bb','c3c7219b-6f99-43ab-8128-7f691474854a','d9d0ed97-3459-47fe-b60d-a5bb9ca4233c','2021-07-11 03:11:40','2021-07-11 03:11:40','b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1',0),('f4d61cc6-ff9a-4e5b-8a67-77af14600774','b8552298-7075-45bb-9fc1-4f9e28c127a1','38cf3745-268f-43f3-a283-b4a49d9d21ad','2021-06-23 06:48:57','2021-06-23 06:48:57','f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2',0),('fb636f57-8603-48b3-904f-f89706304530','8b8ba587-5ec4-4bac-aab7-4923f7af447e','ee3c4173-f6e2-454e-99a3-e1c59f455d22','2021-06-25 06:18:54','2021-07-02 03:47:30','f037a2db-5002-43c1-80cb-1bbffc4758f2','b8552298-7075-45bb-9fc1-4f9e28c127a1',0);
/*!40000 ALTER TABLE `Userroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `employeeId` varchar(255) DEFAULT NULL,
  `managerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `identificationNumber` varchar(255) DEFAULT NULL,
  `insuranceNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isDelete` int DEFAULT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `updateBy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('1e43299c-0c8d-4e3f-8163-b97e4be26fc5','vmo0007','f2d0582a-0c5e-4716-b834-ae1b8076077f','Le ','Thi Employees','canthietcuatoi.van@gmail.com','123','123123','uploads/anh2.png','fff','6666','4444','2021-07-10 00:42:58','2021-07-26 10:21:32',0,'b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1'),('61aafdc0-354d-4014-9fe5-9f291b4edc29','vmo0012','f2d0582a-0c5e-4716-b834-ae1b8076077f','Update3','Employee2','canthietcuatoi.van@gmail.com','12333333333','123123','anh 3.png','fff','6666','4444','2021-07-06 04:10:56','2021-07-27 11:38:51',0,'b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1'),('88753c25-1713-4feb-b48b-97dec106c001','vmo0012','f2d0582a-0c5e-4716-b834-ae1b8076077f','Update2','Employee2','canthietcuatoi.van@gmail.com','12333333333','123123','anh 3.png','fff','6666','4444','2021-06-23 04:34:00','2021-07-27 11:18:46',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('b8552298-7075-45bb-9fc1-4f9e28c127a1','vmo005','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','Do','Van HR','canthietcuatoi.van@gmail.com','0932217422','22, Ba Dinh','uploads/Screenshot from 2021-05-25 10-03-34.png','C3','789','367','2021-06-23 04:36:21','2021-06-23 04:36:21',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('cab64ec3-e333-4675-985e-1c7cde4b444b','vmo0012','f2d0582a-0c5e-4716-b834-ae1b8076077f','Hoang','Employee2','canthietcuatoi.van@gmail.com','12333333333','123123','uploads/anh 4.png','fff','6666','4444','2021-07-02 07:01:52','2021-07-15 02:51:36',0,'b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1'),('d77d97db-a756-486d-bc19-b1fe329b131b','vmo0010','f2d0582a-0c5e-4716-b834-ae1b8076077f','Do','Thi employee5','canthietcuatoi.van@gmail.com','0932217422','22, Ba Dinh','uploads/anh2.png','C3','789','367','2021-07-11 08:11:13','2021-07-26 12:16:27',0,'b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1'),('ea9fe798-550e-4415-9403-fa67a68b43e0','vmo004','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','Vu','Van Employee','vuducvan999@gmail.com','0932217422','22, Ba Dinh','uploads/Screenshot from 2021-05-25 10-03-34.png','C3','789','367','2021-06-23 04:35:38','2021-07-26 12:31:34',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('ecd663f6-2017-4fd0-b04e-ef6c7088f9fa','vmo006','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','Hoang','Van employeeeee','canthietcuatoi.van@gmail.com','0932217422','22, Ba Dinh','uploads/anh2.png','C3','789','367','2021-06-25 06:18:54','2021-07-26 12:19:18',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('f037a2db-5002-43c1-80cb-1bbffc4758f2','vmo001',NULL,'admin','admin','admin@vmodev.com','0912213345','18, Trung Khuong','uploads/Screenshot from 2021-05-25 10-03-34.png','ADMIN','123','234','2021-06-23 03:21:33','2021-06-23 03:21:33',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('f290226e-9b4c-46dc-8b38-46bb441e59f9','vmo0010','f2d0582a-0c5e-4716-b834-ae1b8076077f','Do','Thi employee5','canthietcuatoi.van@gmail.com','0932217422','22, Ba Dinh','uploads/anh1.png','C3','789','367','2021-07-11 03:22:14','2021-07-11 03:22:14',0,'b8552298-7075-45bb-9fc1-4f9e28c127a1','b8552298-7075-45bb-9fc1-4f9e28c127a1'),('f2d0582a-0c5e-4716-b834-ae1b8076077f','vmo002',NULL,'Nguyen','Van A','canthietcuatoi.van@gmail.com','0932217432','18, Trung Hoa','uploads/Screenshot from 2021-05-25 10-03-34.png','C18','789','367','2021-06-23 04:25:25','2021-06-23 04:25:25',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2'),('fbd0d11c-6ae5-46f9-bd84-87e496a142f5','vmo006','ac3a4c4b-1037-427d-a0ad-c3b2029c709b','Tran ','Hoang employee1','canthietcuatoi.van@gmail.com','0932217422','22, Ba Dinh','uploads/anh1.png','C3','789','367','2021-06-30 04:23:42','2021-06-30 04:23:42',0,'f037a2db-5002-43c1-80cb-1bbffc4758f2','f037a2db-5002-43c1-80cb-1bbffc4758f2');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employeeId` varchar(255) NOT NULL,
  `managerId` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `identificationNumber` varchar(255) NOT NULL,
  `insuranceNumber` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isDelete` int NOT NULL,
  `createBy` varchar(255) NOT NULL,
  `updateBy` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-28 10:27:42
