<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = file_get_contents('php://input');
    $postData = json_decode($data, true);

    if (isset($postData['username'])) {
        $username = $postData['username'];
        $filePath = 'users.json';

        if (file_exists($filePath)) {
            $users = json_decode(file_get_contents($filePath), true);
        } else {
            $users = [];
        }

        if (!in_array($username, array_column($users, 'username'))) {
            $users[] = ['username' => $username];
            file_put_contents($filePath, json_encode($users));
        }

        echo json_encode(['status' => 'success', 'username' => $username]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
