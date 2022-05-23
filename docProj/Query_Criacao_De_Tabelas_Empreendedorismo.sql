CREATE DATABASE DB_Ext_Empreendedorismo

GO

USE DB_Ext_Empreendedorismo

CREATE TABLE Tb_Usuario
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Nome VARCHAR(200),
	Login VARCHAR(200),
	Senha VARCHAR(100)
)

CREATE TABLE Tb_Categoria
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Titulo VARCHAR(200)
)

CREATE TABLE Tb_Curso
(
  ID INT IDENTITY(1,1) PRIMARY KEY,
  Titulo VARCHAR(200),
  Descricao VARCHAR(200),
  ID_Categoria INT FOREIGN KEY REFERENCES Tb_Categoria(ID),
  Imagem VARBINARY(MAX)
)

CREATE TABLE Tb_Inscricao 
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	ID_Curso INT FOREIGN KEY REFERENCES Tb_Curso(ID),
	ID_Usuario INT FOREIGN KEY REFERENCES Tb_Usuario(ID)
)

CREATE TABLE Tb_Capitulo
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Titulo VARCHAR(200),
	Descricao VARCHAR(200),
	ID_Curso INT FOREIGN KEY REFERENCES Tb_Curso(ID)
)

CREATE TABLE Tb_Aula 
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Titulo VARCHAR(200),
	ID_Capitulo INT FOREIGN KEY REFERENCES Tb_Capitulo(ID)
)

CREATE TABLE Tb_Video
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Titulo VARCHAR(200),
	Descricao VARCHAR(200),
	IDVideo VARCHAR(MAX),
	ID_Aula INT FOREIGN KEY REFERENCES Tb_Aula(ID)
)

CREATE TABLE Tb_Arquivo
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Titulo VARCHAR(200),
	Arquivo VARBINARY(MAX),
	ID_Capitulo INT FOREIGN KEY REFERENCES Tb_Capitulo(ID)
)

CREATE TABLE Tb_Andamento
(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	ID_Usuario INT FOREIGN KEY REFERENCES Tb_Usuario(ID),
	ID_Curso INT FOREIGN KEY REFERENCES Tb_Curso(ID),
	ID_Capitulo INT FOREIGN KEY REFERENCES Tb_Capitulo(ID),
	ID_Aula INT FOREIGN KEY REFERENCES Tb_Aula(ID),
	Concluido BIT
)

/* PARA DELETAR TUDO*/
--DROP TABLE Tb_Andamento
--DROP TABLE Tb_Arquivo
--DROP TABLE Tb_Video
--DROP TABLE Tb_Aula
--DROP TABLE Tb_Inscricao
--DROP TABLE Tb_Capitulo
--DROP TABLE Tb_Curso
--DROP TABLE Tb_Categoria
--DROP TABLE Tb_Usuario
--DROP DATABASE DB_Ext_Empreendedorismo