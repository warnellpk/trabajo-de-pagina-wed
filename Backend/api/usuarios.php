<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

// Cargar database.php
$path = __DIR__ . "/database.php";

if (!file_exists($path)) {
    echo json_encode(["error" => "No se encontró database.php"]);
    exit;
}

require_once $path;

// Conexión a BD
$db = new Database();
$conn = $db->getConnection();

if (!$conn) {
    echo json_encode(["error" => "Error al conectar a la base de datos"]);
    exit;
}

$action = $_GET["action"] ?? null;

// =======================================
// LISTAR USUARIOS
// =======================================
if ($action === "listar") {

    $sql = "SELECT usuario_id, nombre, email, telefono, fecha_registro 
            FROM usuarios 
            ORDER BY usuario_id DESC";

    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode(["error" => "Error en consulta SQL"]);
        exit;
    }

    $datos = [];
    while ($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }

    echo json_encode($datos);
    exit;
}

// =======================================
// CREAR USUARIO DESDE GET
// =======================================
if ($action === "crear") {

    $nombre   = $_GET["nombre"]   ?? null;
    $email    = $_GET["email"]    ?? null;
    $telefono = $_GET["telefono"] ?? null;
    $password = $_GET["password"] ?? null;

    if (!$nombre || !$email || !$telefono || !$password) {
        echo json_encode(["error" => "Faltan parámetros: nombre, email, telefono, password"]);
        exit;
    }

    // Encriptar password
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO usuarios (nombre, email, telefono, password) 
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $telefono, $password_hash);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "usuario_id" => $stmt->insert_id]);
    } else {
        echo json_encode(["error" => "No se pudo crear el usuario"]);
    }

    exit;
}

// =======================================
// ACCIÓN NO RECONOCIDA
// =======================================
echo json_encode(["error" => "Debes enviar ?action=listar o ?action=crear"]);
exit;


