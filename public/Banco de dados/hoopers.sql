create database hoopers;

use hoopers;

create table voto (
idVoto int primary key ,
nome varchar(45)
);

insert into voto values
(1,'Caio teixeira'),
(2,'Dpc'),
(3,'Ninja');

select * from voto;

create table usuario (
idUsuario int primary  key auto_increment,
nome varchar (55),
email varchar (50),
senha varchar (55),
celular varchar (12),
cep varchar (15),
bairro varchar (45),
cidade varchar (45),
rua varchar (45),
fkVoto int,
foreign key (fkVoto) references voto(idVoto)
);
select * from usuario;

CREATE TABLE comentario (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
descricao VARCHAR(450),
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);


select * from comentario;

select * from usuario;

SELECT a.id as idAviso, a.titulo, a.descricao, a.fk_usuario, u.idUsuario as idUsuario, u.nome, u.email, u.senha
        FROM comentario as a
            INNER JOIN usuario as u
                ON a.fk_usuario = u.idUsuario;
                
SELECT  count(u.idUsuario) as 'qtde_comentarios', u.idUsuario, u.nome
        FROM comentario as c
            INNER JOIN usuario as u
                ON c.fk_usuario = u.idUsuario group by u.idUsuario;
    
    
select * from comentario;

select * from usuario;

insert into usuario (nome,fkVoto) values
('teste', 1),
('teste', 2),
('teste', 1),
('teste', 2),
('teste', 3),
('teste', 3),
('teste', 2),
('teste', 1),
('teste', 3),
('teste', 2);

insert into usuario (nome,fkVoto) values 
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 1),
('teste', 3);

insert into comentario (titulo, descricao , fk_usuario) values 
('teste1', 'só para a dash funcionar', 5),
('teste1', 'só para a dash funcionar', 6),
('teste1', 'só para a dash funcionar', 7),
('teste1', 'só para a dash funcionar', 8);