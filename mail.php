<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'ljypower1@gmail.com';
    $subject = 'New message from ' . $_POST['name'];
    $phone = $_POST['phone_number'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['email'] . "\r\n" .
                'Reply-To: ' . $_POST['phone'] . "\r\n" .
                'Reply-To: ' . $_POST['email'] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
}

//php, nginx 설치 해야함.~~
