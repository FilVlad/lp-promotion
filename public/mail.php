<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['client_name'];
$phone = $_POST['client_phone'];
$email = $_POST['client_email'];
$district = $_POST['client_district'];
$plow = $_POST['client_plow'];
$numCorps = $_POST['client_numCorps'];
$typeCorps = $_POST['client_typeCorps'];
$option1 = $_POST['client_option1'];
$option2 = $_POST['client_option2'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  					  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'albiontk@gmail.com';               // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'G608c00341ak200';                  // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('albiontk@gmail.com');                 // от кого будет уходить письмо?
$mail->addAddress('filatovv@albion.org.ua');          // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');             // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');       // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');  // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с лендинга RN100';
$mail->Body    = '' .$name . ' оставил заявку на плуг: ' .$plow. '<br>количество корпусов: ' .$numCorps. '<br>тип корпусов: ' .$typeCrops. '<br> из опций выбрал: ' .$option1. ' '.$option2. '<br> телефон клиента: ' .$phone. '<br>Почта клиента: ' .$email '<br>Область: ' .$district.;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error of sending';
} else {
    header('location: index.html');
}
?>