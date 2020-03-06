<?php

$to = "macs.com74@gmail.com"; // емайл получателя данных из формы
$tema = "Заявка с сайта"; // тема полученного емайла
$name = "name: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
//$lost_name = ": ".$_POST['lost_name']."<br>";
$phone = "phonenumber: ".$_POST['phonenumber']."<br>";
$message = "massage: ".$_POST['massage']."<br>";
//$coment = "comment: ".$_POST['coment']."<br>";
$headers  = 'MIME-Version: 1.0' .  "\r\n";                         // заголовок соответствует формату плюс символ перевода строки
  $headers = 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
$send = mail( macs.com74@gmail.com, $to, $tema, $name, $phone, $message, $headers);


?>