<?
header("Content-type: text/html; charset=utf-8");
//получаем необходимые данные для отправки
//$form_array = array();
$email = $_POST['post_mail_adressat'];
$form_array = $_POST['post_form_array'];

foreach ($form_array as $key => $value) { // перебор элементов массива/объекта и ключа
    //$result_array .= 'Ключ'.$key.'Значение'.$value.'-';
        switch ($key) {
        case 'nameFeedback'       :$name_sender = $value;break;
        case 'e-mailFeedback'     :$email_sender = $value;break;
        case 'textFeedback'       :$text_message = $value;break;
        case 'telephoneFeedback'  :$telephone_message = $value;break;
        
        //case 'EN':echo "Английский";break;
        //case 'EN':echo "Английский";break;
        default:
        echo "Произошла какаято ошибка";
        }; 
     
}



$subject    = "С вашего сайта отправлено письмо ";//тема сообщения

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "From: ".$email."  <".$email.">\r\n";
$headers .= "Cc: ".$email."\r\n";
//$headers .= "Bcc: ".$email."\r\n";

$message = '<div>Внимание! данное сообщение отправленно через форму отбратной связи с сайта:</div> </br></br> ';
$message .= '<div>Имя отпраивтеля:'.mb_convert_encoding($name_sender, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>e-mail отпраивтеля:'.mb_convert_encoding($email_sender, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>Телефон отпраивтеля:'.mb_convert_encoding($telephone_message, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>Текст сообщения с сайта:'.mb_convert_encoding($text_message, "windows-1251", "utf-8").' </div> </br></br> ';

mail($email,$subject,$message,$headers);

//echo count($form_array);
//echo $form_array["nameFeedback"];
echo  'true';
//echo $email;
?>