<?
//include('../config.php');
//получаем необходимые данные для отправки
//$form_array = array();
$email = $_POST['post_mail_adressat'];
$form_array = $_POST['post_form_array'];
$result_array = '';


foreach ($form_array as $key => $value) { // перебор элементов массива/объекта и ключа
    $result_array .= 'Ключ'.$key.'Значение'.$value.'-';
}

//подготавливаем письмо
function insert_user($email)
    {
        
    $query="INSERT INTO users (name) VALUES('$email')";
    $result=mysql_query($query) or die (mysql_error());
    
    }         
 
//insert_user($email);

$subject    = "С вашего сайта отправлено письмо ";//тема сообщения


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "From: ".$email."  <".$email.">\r\n";
$headers .= "Cc: ".$email."\r\n";
$headers .= "Bcc: ".$email."\r\n";

$message = 'Внимание! На вашем сайте оставлен отзыв. Пожалуйста зайдите в панель администратора и подтвердите его размещение на сайте';
$message .= 'e-mail отпраивтеля:';
$message .= 'Текст отзыва: </br>';

//mail($email,$subject,$message,$headers);

//echo count($form_array);
//echo $form_array["nameFeedback"];
echo  $result_array;
//echo $email;
?>