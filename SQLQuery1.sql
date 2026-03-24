CREATE DATABASE USERVIXDB;
GO

USE USERVIXDB;
GO
CREATE TABLE Usuarios (
    id_usuario INT IDENTITY(1,1) PRIMARY KEY,
    nombre_completo NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL UNIQUE,
    contrasena NVARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    fecha_registro DATETIME DEFAULT GETDATE()
);
CREATE TABLE Temas (
    id_tema INT IDENTITY(1,1) PRIMARY KEY,
    nombre_tema NVARCHAR(50) NOT NULL,
    iconos NVARCHAR(MAX),      -- JSON o rutas
    fondos NVARCHAR(MAX),      -- JSON o rutas
    descripcion NVARCHAR(MAX)
);
CREATE TABLE Perfiles (
    id_perfil INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    tema_actual INT NULL,
    modo_oscuro BIT DEFAULT 0,
    interfaz_simplificada BIT DEFAULT 0,
    fuente NVARCHAR(50) DEFAULT 'Arial',
    tamano_texto INT DEFAULT 14,
    fecha_ultima_modificacion DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Perfiles_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    CONSTRAINT FK_Perfiles_Temas FOREIGN KEY (tema_actual) REFERENCES Temas(id_tema)
);
CREATE TABLE Optimizaciones (
    id_optimizacion INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    tipo_funcion NVARCHAR(50),
    estado NVARCHAR(50),
    fecha DATETIME DEFAULT GETDATE(),
    resultados NVARCHAR(MAX),  -- JSON o detalles
    CONSTRAINT FK_Optimizaciones_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
CREATE TABLE Dispositivos (
    id_dispositivo INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    nombre_dispositivo NVARCHAR(50),
    tipo_dispositivo NVARCHAR(50),
    sistema_operativo NVARCHAR(50),
    fecha_registro DATETIME DEFAULT GETDATE(),
    estado_conexion BIT DEFAULT 1,
    CONSTRAINT FK_Dispositivos_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
CREATE TABLE Seguridad (
    id_seguridad INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    tipo_seguridad NVARCHAR(50),
    ultimo_acceso DATETIME,
    intentos_fallidos INT DEFAULT 0,
    CONSTRAINT FK_Seguridad_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
CREATE TABLE Descargas (
    id_descarga INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_tema INT NOT NULL,
    fecha_descarga DATETIME DEFAULT GETDATE(),
    estado_descarga NVARCHAR(50) DEFAULT 'completada',
    CONSTRAINT FK_Descargas_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    CONSTRAINT FK_Descargas_Temas FOREIGN KEY (id_tema) REFERENCES Temas(id_tema)
);
CREATE TABLE Logs (
    id_log INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    accion NVARCHAR(100),
    detalles NVARCHAR(MAX),
    fecha DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Logs_Usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);