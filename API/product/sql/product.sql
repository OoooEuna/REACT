-- Active: 1715069578448@@127.0.0.1@3306@joeun
DROP TABLE product;

CREATE TABLE product (
	no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id	CHAR(36) NOT NULL DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    img	TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM product;

TRUNCATE TABLE product;

-- 샘플 데이터
INSERT INTO product(name, price, img)
VALUES
('상품01', 11000, 'https://placehold.co/300x200'),
('상품02', 12000, 'https://placehold.co/300x200'),
('상품03', 13000, 'https://placehold.co/300x200'),
('상품04', 14000, 'https://placehold.co/300x200'),
('상품05', 15000, 'https://placehold.co/300x200'),
('상품06', 16000, 'https://placehold.co/300x200'),
('상품07', 17000, 'https://placehold.co/300x200'),
('상품08', 18000, 'https://placehold.co/300x200'),
('상품09', 19000, 'https://placehold.co/300x200'),
('상품10', 20000, 'https://placehold.co/300x200')
;

