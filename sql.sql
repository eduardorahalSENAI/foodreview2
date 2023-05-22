CREATE DATABASE foodreview
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE USER 'foodreview'@'localhost' IDENTIFIED BY 'foodreview';

GRANT ALL PRIVILEGES ON foodreview.* TO 'foodreview'@'localhost';
