<?php
require_once __DIR__ . "/Database.php";

// =======================================
// Conexión a BD
// =======================================
$db = new Database();
$conn = $db->getConnection();

if (!$conn) {
    echo json_encode(["error" => "Error de conexión a la BD"]);
    exit;
}

// =======================================
// Obtener acción
// =======================================
$action = $_GET["action"] ?? null;

if (!$action) {
    echo json_encode(["error" => "Debes enviar ?action=crear o ?action=listar"]);
    exit;
}

// =======================================
// TEST rápido
// =======================================
if ($action === "test") {
    echo json_encode(["status" => "ok"]);
    exit;
}

// =======================================
// ACCIÓN: CREAR DENUNCIA
// =======================================
if ($action === "crear") {

    $usuario_id   = $_GET["usuario_id"] ?? null;
    $categoria    = $_GET["categoria"] ?? null;
    $descripcion  = $_GET["descripcion"] ?? null;
    $ubicacion_x  = $_GET["ubicacion_x"] ?? null;
    $ubicacion_y  = $_GET["ubicacion_y"] ?? null;

    if (!$usuario_id || !$categoria || !$descripcion || !$ubicacion_x || !$ubicacion_y) {
        echo json_encode(["error" => "Faltan parámetros obligatorios"]);
        exit;
    }

    $sql = "INSERT INTO denuncias (usuario_id, categoria, descripcion, ubicacion_x, ubicacion_y)
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        echo json_encode(["error" => "Error preparando consulta"]);
        exit;
    }

    $stmt->bind_param("issdd", $usuario_id, $categoria, $descripcion, $ubicacion_x, $ubicacion_y);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "id" => $stmt->insert_id]);
    } else {
        echo json_encode(["error" => "No se pudo crear la denuncia"]);
    }

    exit;
}

// =======================================
// ACCIÓN: LISTAR DENUNCIAS
// =======================================
if ($action === "listar") {

    $sql = "SELECT 
                idenun,
                usuario_id,
                categoria,
                descripcion,
                ubicacion_x,
                ubicacion_y,
                fecha
            FROM denuncias
            ORDER BY fecha DESC";

    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode(["error" => "Error ejecutando SELECT"]);
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
// Acción inválida
// =======================================
echo json_encode(["error" => "Acción no válida. Usa crear o listar"]);
exit;
