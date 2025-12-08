<?php
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/usuarios.php';
require_once __DIR__ . '/denuncias.php';


$db = new Database();
$conn = $db->connect();

$method = $_SERVER["REQUEST_METHOD"];
$path   = $_GET["path"] ?? "";

switch ($path) {

    // USERS
    case "users":
        $api = new Users($conn);

        // Intento de crear usuario por GET
        if ($method == "GET" && isset($_GET["nombre"]) && isset($_GET["email"]) && isset($_GET["password"])) {
            $api->createFromGet();
            break;
        }

        // Obtener usuarios
        if ($method == "GET") {
            $api->getAll();
            break;
        }

        // Crear usuario por POST
        if ($method == "POST") {
            $api->create();
            break;
        }

        break;


    case "login":
        $api = new Users($conn);
        if ($method == "POST") $api->login();
        break;

    // DENUNCIAS
    case "denuncias":
        $api = new Denuncias($conn);

        if ($method == "GET")    $api->getAll();
        if ($method == "POST")   $api->create();
        if ($method == "PUT")    $api->update();
        if ($method == "DELETE") $api->delete();
        break;

    default:
        http_response_code(404);
        echo json_encode(["error" => "Ruta no encontrada"]);
}
?>
