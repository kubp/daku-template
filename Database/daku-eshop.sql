SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

SET FOREIGN_KEY_CHECKS = 0; 
CREATE TABLE IF NOT EXISTS `cart` (
`cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `price_cart` float NOT NULL,
  `payed` tinyint(1) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

TRUNCATE TABLE `cart`;
CREATE TABLE IF NOT EXISTS `customer` (
`customer_id` int(11) NOT NULL,
  `name` varchar(100) COLLATE latin1_general_cs NOT NULL,
  `adress` varchar(100) COLLATE latin1_general_cs NOT NULL,
  `phone` varchar(50) COLLATE latin1_general_cs NOT NULL,
  `mail` varchar(100) COLLATE latin1_general_cs NOT NULL,
  `password` varchar(100) COLLATE latin1_general_cs DEFAULT NULL,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

TRUNCATE TABLE `customer`;
CREATE TABLE IF NOT EXISTS `item` (
`item_id` int(11) NOT NULL,
  `item_name` varchar(250) COLLATE latin1_general_cs NOT NULL,
  `description` varchar(250) COLLATE latin1_general_cs NOT NULL,
  `price` float NOT NULL,
  `in_stock` int(11) NOT NULL,
  `category` varchar(250) COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

TRUNCATE TABLE `item`;
CREATE TABLE IF NOT EXISTS `list` (
`list_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `ammount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

TRUNCATE TABLE `list`;
CREATE TABLE IF NOT EXISTS `transaction` (
`id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `balance_recieved` float NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;

TRUNCATE TABLE `transaction`;
SET FOREIGN_KEY_CHECKS = 1;

ALTER TABLE `cart`
 ADD PRIMARY KEY (`cart_id`), ADD UNIQUE KEY `customer_id_2` (`customer_id`), ADD KEY `customer_id` (`customer_id`);

ALTER TABLE `customer`
 ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `item`
 ADD PRIMARY KEY (`item_id`);

ALTER TABLE `list`
 ADD PRIMARY KEY (`list_id`), ADD UNIQUE KEY `item_id` (`item_id`,`cart_id`), ADD KEY `cart_id` (`cart_id`);

ALTER TABLE `transaction`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `customer_id` (`customer_id`,`cart_id`), ADD KEY `cart_id` (`cart_id`);


ALTER TABLE `cart`
MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `customer`
MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `item`
MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `list`
MODIFY `list_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `transaction`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `cart`
ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

ALTER TABLE `list`
ADD CONSTRAINT `list_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
ADD CONSTRAINT `list_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);

ALTER TABLE `transaction`
ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `cart` (`customer_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
