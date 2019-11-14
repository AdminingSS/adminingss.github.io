<?php

require 'phpmailer/class.phpmailer.php';

// ==== Принудительный захват массива переменных ==========================
// ==== раскомментировать, если письма отправляются без значений полей ====

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['mail'];
$fid = $_POST['fid'];


// ========================================================================

//Create a new PHPMailer instance
$mail = new PHPMailer;


// От кого
$mail->setFrom('paip18@yandex.ru', 'Host');

// Кому
$mail->addAddress('paip18@yandex.ru', 'paip18@yandex.ru');

// Тема
$mail->Subject = 'Заявка';

// Отправка как html
// $mail->IsHTML(true);

// convert HTML into a basic plain-text alternative body
$mail->msgHTML( "
    <b>Форма:</b> $fid<br>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>E-mail:</b> $email<br>
    ");

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}