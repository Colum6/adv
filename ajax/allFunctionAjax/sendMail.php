<?
header("Content-type: text/html; charset=utf-8");
//�������� ����������� ������ ��� ��������
//$form_array = array();
$email = $_POST['post_mail_adressat'];
$form_array = $_POST['post_form_array'];

foreach ($form_array as $key => $value) { // ������� ��������� �������/������� � �����
    //$result_array .= '����'.$key.'��������'.$value.'-';
        switch ($key) {
        case 'nameFeedback'       :$name_sender = $value;break;
        case 'e-mailFeedback'     :$email_sender = $value;break;
        case 'textFeedback'       :$text_message = $value;break;
        case 'telephoneFeedback'  :$telephone_message = $value;break;
        
        //case 'EN':echo "����������";break;
        //case 'EN':echo "����������";break;
        default:
        echo "��������� ������� ������";
        }; 
     
}



$subject    = "� ������ ����� ���������� ������ ";//���� ���������

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "From: ".$email."  <".$email.">\r\n";
$headers .= "Cc: ".$email."\r\n";
//$headers .= "Bcc: ".$email."\r\n";

$message = '<div>��������! ������ ��������� ����������� ����� ����� ��������� ����� � �����:</div> </br></br> ';
$message .= '<div>��� �����������:'.mb_convert_encoding($name_sender, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>e-mail �����������:'.mb_convert_encoding($email_sender, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>������� �����������:'.mb_convert_encoding($telephone_message, "windows-1251", "utf-8").' </div> </br></br> ';
$message .= '<div>����� ��������� � �����:'.mb_convert_encoding($text_message, "windows-1251", "utf-8").' </div> </br></br> ';

mail($email,$subject,$message,$headers);

//echo count($form_array);
//echo $form_array["nameFeedback"];
echo  'true';
//echo $email;
?>