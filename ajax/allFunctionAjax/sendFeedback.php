<?
//include('../config.php');
//�������� ����������� ������ ��� ��������
//$form_array = array();
$email = $_POST['post_mail_adressat'];
$form_array = $_POST['post_form_array'];
$result_array = '';


foreach ($form_array as $key => $value) { // ������� ��������� �������/������� � �����
    $result_array .= '����'.$key.'��������'.$value.'-';
}

//�������������� ������
function insert_user($email)
    {
        
    $query="INSERT INTO users (name) VALUES('$email')";
    $result=mysql_query($query) or die (mysql_error());
    
    }         
 
//insert_user($email);

$subject    = "� ������ ����� ���������� ������ ";//���� ���������


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "From: ".$email."  <".$email.">\r\n";
$headers .= "Cc: ".$email."\r\n";
$headers .= "Bcc: ".$email."\r\n";

$message = '��������! �� ����� ����� �������� �����. ���������� ������� � ������ �������������� � ����������� ��� ���������� �� �����';
$message .= 'e-mail �����������:';
$message .= '����� ������: </br>';

//mail($email,$subject,$message,$headers);

//echo count($form_array);
//echo $form_array["nameFeedback"];
echo  $result_array;
//echo $email;
?>