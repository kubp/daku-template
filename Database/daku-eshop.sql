SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE IF NOT EXISTS `cart` (
`cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `price_cart` float NOT NULL,
  `paid` enum('true','false') COLLATE utf8_bin NOT NULL DEFAULT 'false',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `customer` (
`customer_id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `adress` varchar(100) COLLATE utf8_bin NOT NULL,
  `phone` varchar(50) COLLATE utf8_bin NOT NULL,
  `mail` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `item` (
`item_id` int(11) NOT NULL,
  `item_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `description` varchar(250) COLLATE utf8_bin NOT NULL,
  `price` float NOT NULL,
  `in_stock` int(11) NOT NULL,
  `category` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `list` (
`list_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `promo_code_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `promo_code` (
`promo_code_id` int(11) NOT NULL,
  `valid` enum('true','false') NOT NULL DEFAULT 'true',
  `code` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `used_times` int(11) NOT NULL DEFAULT '0',
  `max_use` int(11) NOT NULL DEFAULT '1',
  `discount` int(11) NOT NULL,
  `expiration_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `transaction` (
`id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `balance_recieved` float NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


ALTER TABLE `cart`
 ADD PRIMARY KEY (`cart_id`), ADD UNIQUE KEY `customer_id_2` (`customer_id`), ADD KEY `customer_id` (`customer_id`);

ALTER TABLE `customer`
 ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `item`
 ADD PRIMARY KEY (`item_id`);

ALTER TABLE `list`
 ADD PRIMARY KEY (`list_id`), ADD UNIQUE KEY `item_id` (`item_id`,`cart_id`), ADD UNIQUE KEY `promo_code_id` (`promo_code_id`), ADD KEY `cart_id` (`cart_id`);

ALTER TABLE `promo_code`
 ADD PRIMARY KEY (`promo_code_id`);

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
ALTER TABLE `promo_code`
MODIFY `promo_code_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `transaction`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `cart`
ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

ALTER TABLE `list`
ADD CONSTRAINT `list_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
ADD CONSTRAINT `list_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
ADD CONSTRAINT `list_ibfk_3` FOREIGN KEY (`promo_code_id`) REFERENCES `promo_code` (`promo_code_id`);

ALTER TABLE `transaction`
ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `cart` (`customer_id`);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
