-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2025 a las 21:17:26
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mivozrd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `denuncias`
--

CREATE TABLE `denuncias` (
  `idenun` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'pendiente',
  `ubicacion_x` decimal(10,6) NOT NULL,
  `ubicacion_y` decimal(10,6) NOT NULL,
  `evidencia` varchar(255) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `denuncias`
--

INSERT INTO `denuncias` (`idenun`, `usuario_id`, `categoria`, `descripcion`, `estado`, `ubicacion_x`, `ubicacion_y`, `evidencia`, `fecha`) VALUES
(1, 1, 'Robo', 'Prueba', 'pendiente', 18.500000, -69.900000, NULL, '2025-12-07 19:18:46'),
(2, 1, 'Robo', 'Prueba', 'pendiente', 10.100000, 20.100000, NULL, '2025-12-07 19:46:02'),
(3, 1, 'si', 'Prueba', 'pendiente', 10.100000, 20.100000, NULL, '2025-12-07 19:46:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre`) VALUES
(1, 'administrador'),
(3, 'anonimo'),
(2, 'usuarioregistrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cedula` varchar(20) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `reputacion` int(11) DEFAULT 0,
  `foto_perfil` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `cargo_rol` varchar(100) DEFAULT NULL,
  `historial` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`historial`)),
  `estadistica` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`estadistica`)),
  `id_rol` int(11) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `nombre`, `cedula`, `direccion`, `email`, `telefono`, `password`, `reputacion`, `foto_perfil`, `descripcion`, `cargo_rol`, `historial`, `estadistica`, `id_rol`, `fecha_registro`) VALUES
(1, 'Juan Pérez', '001-0000000-1', 'Av. Principal 123', 'juan@email.com', '555-0199', 'hash_secreto_123', 10, NULL, NULL, 'Supervisor', '[]', '{\"login_count\": 5, \"last_login\": \"2023-10-27\"}', 1, '2025-12-06 00:12:57'),
(2, 'Maria', NULL, NULL, 'maria@mail.com', NULL, '$2y$10$nL3o4GJOmcP5T/6f2Z4gA.u9OohQ09kgxQggr3dy2SPIgdQVicYcq', 0, NULL, NULL, NULL, NULL, NULL, NULL, '2025-12-07 16:02:58'),
(3, 'Carlos', NULL, NULL, 'carlos@mail.com', NULL, '$2y$10$XogfZA7LFzJ799qA3mJV5eM1YE9e/Qp5Y.uZzadEQeVA/.nf5GFIG', 0, NULL, NULL, NULL, NULL, NULL, NULL, '2025-12-07 18:46:57'),
(7, 'Noe', NULL, NULL, 'Noe@mail.com', NULL, '$2y$10$iZU18w.a7nRxxC8ffoEixORrqpeKB/gQHSnCicw/DziIy9tK1OnYu', 0, NULL, NULL, NULL, NULL, NULL, NULL, '2025-12-07 18:50:51'),
(8, 'Luis', NULL, NULL, 'Luis@mail.com', '8290000000', '$2y$10$GeEo5u4DoueQUGEplQIZ8eALjY49pfhfLeX6DiBodVy5hrEiY4w/O', 0, NULL, NULL, NULL, NULL, NULL, NULL, '2025-12-07 20:13:51');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD PRIMARY KEY (`idenun`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `correo` (`email`),
  ADD UNIQUE KEY `cedula` (`cedula`),
  ADD KEY `fk_usuario_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `idenun` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
