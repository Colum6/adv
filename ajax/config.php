<?// ������������ ���� �������� ������� (�������� ��� ������� ������� ��������)
//mb_internal_encoding ('utf-8');
$db_server="localhost";                         //��� �������
$db_user="Darok";                                           //��� ������������
$db_password="123";                                         // ������
$db="users";                                             // �������� ���� ������
//$db->query("set names utf8");
$connect = mysql_connect($db_server,$db_user,$db_password)
or die('Could not connect to mysql server.' );
mysql_set_charset('utf8');
mysql_select_db($db, $connect)
or die('Could not select database.');
?>
