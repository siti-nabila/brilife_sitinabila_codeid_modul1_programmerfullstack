
CREATE TABLE `LIST_KONTRASEPSI` (
  `Id_Kontrasepsi` int NOT NULL AUTO_INCREMENT,
  `Nama_Kontrasepsi` varchar(45) NOT NULL,
  PRIMARY KEY (`Id_Kontrasepsi`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `LIST_KONTRASEPSI` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES (1,'Pil');
INSERT INTO `LIST_KONTRASEPSI` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES (2,'Kondom');
INSERT INTO `LIST_KONTRASEPSI` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES (3,'IUD');

CREATE TABLE `LIST_PEMAKAI_KONTRASEPSI` (
  `Id_List` int NOT NULL AUTO_INCREMENT,
  `Id_Propinsi` int NOT NULL,
  `Id_Kontrasepsi` int NOT NULL,
  `Jumlah_Pemakai` int NOT NULL,
  PRIMARY KEY (`Id_List`),
  KEY `idx_LIST_PEMAKAI_KONTRASEPSI_Id_Propinsi` (`Id_Propinsi`),
  KEY `fk_LIST_PEMAKAI_KONTRASEPSI_2_idx` (`Id_Kontrasepsi`),
  CONSTRAINT `fk_LIST_PEMAKAI_KONTRASEPSI_1` FOREIGN KEY (`Id_Propinsi`) REFERENCES `LIST_PROPINSI` (`Id_Propinsi`),
  CONSTRAINT `fk_LIST_PEMAKAI_KONTRASEPSI_2` FOREIGN KEY (`Id_Kontrasepsi`) REFERENCES `LIST_KONTRASEPSI` (`Id_Kontrasepsi`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (1,1,1,50);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (2,1,2,66);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (3,1,3,25);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (4,2,1,100);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (5,2,2,75);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (6,2,3,50);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (7,1,2,40);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (8,2,2,65);
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (9,3,1,90);

CREATE TABLE `LIST_PROPINSI` (
  `Id_Propinsi` int NOT NULL AUTO_INCREMENT,
  `Nama_Propinsi` varchar(45) NOT NULL,
  PRIMARY KEY (`Id_Propinsi`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (1,'Aceh');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (2,'Sumatera Utara');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (3,'Sumatera Barat');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (4,'Riau');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (5,'Kepulauan Riau');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (6,'Jambi');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (7,'Bangka Belitung');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (8,'Sumatera Selatan');
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (9,'Lampung');
