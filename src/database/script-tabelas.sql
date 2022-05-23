create database hoopers;

use hoopers;

create table usuario (
idUsuario int primary  key auto_increment,
nome varchar (55),
email varchar (50),
senha varchar (55),
celular varchar (12),
cep varchar (15),
bairro varchar (45),
cidade varchar (45),
rua varchar (45)
);

