USE prog_web;

CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `senha_usuario` varchar(255) NOT NULL,
  `curso_usuario` varchar(255) NOT NULL,
  `universidade_usuario` varchar(255) NOT NULL,
  `balanco_total` decimal(10,2) DEFAULT 0 NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `despesa` (
  `id_despesa` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `tipo_despesa` varchar(255) NOT NULL,
  `valor_despesa` decimal(10,2) NOT NULL,
  `data_despesa` datetime NOT NULL,
  PRIMARY KEY (`id_despesa`),
  KEY `usuario_id_despesas_idx` (`usuario_id`),
  CONSTRAINT `usuario_id_despesas` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `dica` (
  `id_dica` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `conteudo_dica` varchar(255) NOT NULL,
  `data_dica` datetime NOT NULL,
  PRIMARY KEY (`id_dica`),
  KEY `usuario_id_dica_idx` (`usuario_id`),
  CONSTRAINT `usuario_id_dica` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `ganho` (
  `id_ganho` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `tipo_ganho` varchar(255) NOT NULL,
  `valor_ganho` decimal(10,2) NOT NULL,
  `data_ganho` datetime NOT NULL,
  PRIMARY KEY (`id_ganho`),
  KEY `usuario_id_ganho_idx` (`usuario_id`),
  CONSTRAINT `usuario_id_ganho` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `meta` (
  `id_meta` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `descricao_meta` varchar(255) NOT NULL,
  `valor_meta` decimal(10,2) NOT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime NOT NULL,
  PRIMARY KEY (`id_meta`),
  KEY `usuario_id_meta_idx` (`usuario_id`),
  CONSTRAINT `usuario_id_meta` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `poupanca` (
  `id_poupanca` int NOT NULL AUTO_INCREMENT,
  `id_meta` int DEFAULT NULL,
  `valor_poupanca` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_poupanca`),
  KEY `id_meta_idx` (`id_meta`),
  CONSTRAINT `id_meta` FOREIGN KEY (`id_meta`) REFERENCES `meta` (`id_meta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
