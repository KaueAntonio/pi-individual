create database projetoindividual;

use projetoindividual;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE equipe (
idEquipe VARCHAR(30) PRIMARY KEY,
nomeeqp VARCHAR(25),
steamResp VARCHAR(30)
);

create table usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30),
email VARCHAR(30),
idade INT,
steam VARCHAR(30),
patente VARCHAR(30),
nick VARCHAR(30),
token VARCHAR(30),
fkEquipe varchar(30),
FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe)
);


CREATE TABLE avaliacoes (
idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(30),
num_estrelas INT,
mensagem VARCHAR(150),
dia INT,
mes INT,
ano INT,
fkJogador INT,
FOREIGN KEY (fkJogador) REFERENCES usuario(idUsuario)

);

INSERT INTO usuario (nome, email, idade, steam, patente, nick, token) VALUES
('Kaue Antonio', 'kaue36123@gmail.com', 20, 'mandrakaodelas', 'Supremo', 'MaNdRaKe', 'kaue@123'),
('Gustavo Machado', 'g.machado@gmail.com', 20, 'xobonho', 'Ouro 3', 'Coxinha', 'xoba@123'),
('Otávio', 'otavio@gmail.com', 20, 'Tatts__', 'AK 1', 'Tatts', 'tata@123'),
('Gabriel Ayres', 'zinho@gmail.com', 20, 'ninoia', 'Prata Elite Mestre', 'Zinhox', 'zinho@123'),
('Luiz Henrique', 'luiz@gmail.com', 20, 'quemtviuquemtve', 'AK Cruzada', 'Luizin', 'trinca@123'),
('Bradley', 'bradley@gmail.com', 23, 'jawwadbr', 'Ouro 4', 'Jawwad', 'jawwad@123'),
('Miguel Almeida', 'almeida@gmail.com', 20, 'WaifuCombatLeague', 'AK 1', '556Moe', 'almeida@123'),
('Antônio', 'antonio@gmail.com', 21, '2Nin', 'Supremo', '2Nin', 'tony@123'),
('Lucas Nunes', 'nunes@gmail.com', 18, 'homemzueiro', 'Prata 2', 'Nunoox', 'nunes@123');

INSERT INTO equipe VALUES
('jdj@123', 'Jordânia de Jerusalém', 'mandrakaodelas');

UPDATE usuario SET fkEquipe = 'jdj@123' WHERE token = 'kaue@123';
UPDATE usuario SET fkEquipe = 'jdj@123' WHERE token = 'trinca@123';
UPDATE usuario SET fkEquipe = 'jdj@123' WHERE token = 'jawwad@123';
UPDATE usuario SET fkEquipe = 'jdj@123' WHERE token = 'almeida@123';
UPDATE usuario SET fkEquipe = 'jdj@123' WHERE token = 'tata@123';