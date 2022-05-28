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



