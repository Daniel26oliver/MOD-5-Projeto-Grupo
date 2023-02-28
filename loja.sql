

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `produtos` (
  id int(11) NOT NULL,
  nome varchar(100) DEFAULT NULL,
  fabricante varchar(100) DEFAULT NULL,
  quantidade int(10) DEFAULT NULL,
  peso float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `produtos` (`id`, `nome`, `fabricante`, `quantidade`, `preco`) VALUES
(1, 'tênis', 'adidas', 40, 549.00),
(2, 'camiseta', 'new era', 32, 89.90),
(3, '', '', 11, 0.02),
(4, '', '', 97, 0.031),
(5, ' ', '', 53, 0.042);


ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);



ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;


