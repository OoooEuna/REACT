-- Active: 1715069578448@@127.0.0.1@3306@joeun

DROP TABLE BOARD;

CREATE TABLE board(
  no        INT             NOT NULL AUTO_INCREMENT COMMENT '게시판 번호',
  title     VARCHAR(100)    NOT NULL COMMENT '게시판 제목',
  writer    VARCHAR(100)    NOT NULL  COMMENT '게시판 작성자',
  content   TEXT            NULL COMMENT '게시판 내용',
  reg_date  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '게시판 등록일자',
  upd_date  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '게시판 수정일자',
  PRIMARY KEY (no)
) COMMENT '게시판';

INSERT INTO board (title, writer, content)
VALUES
('첫 번째 게시물', '작성자1', '이것은 첫 번째 게시물의 내용입니다.'),
('두 번째 게시물', '작성자2', '이것은 두 번째 게시물의 내용입니다.'),
('세 번째 게시물', '작성자3', '이것은 세 번째 게시물의 내용입니다.'),
('네 번째 게시물', '작성자4', '이것은 네 번째 게시물의 내용입니다.'),
('다섯 번째 게시물', '작성자5', '이것은 다섯 번째 게시물의 내용입니다.'),
('여섯 번째 게시물', '작성자6', '이것은 여섯 번째 게시물의 내용입니다.'),
('일곱 번째 게시물', '작성자7', '이것은 일곱 번째 게시물의 내용입니다.'),
('여덟 번째 게시물', '작성자8', '이것은 여덟 번째 게시물의 내용입니다.'),
('아홉 번째 게시물', '작성자9', '이것은 아홉 번째 게시물의 내용입니다.'),
('열 번째 게시물', '작성자10', '이것은 열 번째 게시물의 내용입니다.');