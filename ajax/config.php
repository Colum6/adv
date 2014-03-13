<?// ÏÎÄÊËÞ×ÀÅÌÛÉ ÔÀÉË ÍÀÒÑÐÎÅÊ ÑÅÐÂÅÐÀ (ÈÇÌÈÍßÒÜ ÄßË ÊÀÆÄÎÃÎ ÏÐÎÅÊÒÀ ÎÒÄÅËÜÍÎ)
//mb_internal_encoding ('utf-8');
$db_server="localhost";                         //èìÿ ñåðâåðà
$db_user="Darok";                                           //èìÿ ïîëüçîâàòåëÿ
$db_password="123";                                         // ïàðîëü
$db="users";                                             // íàçâàíèå ÁÀÇÛ ÄÀÍÍÛÕ
//$db->query("set names utf8");
$connect = mysql_connect($db_server,$db_user,$db_password)
or die('Could not connect to mysql server.' );
mysql_set_charset('utf8');
mysql_select_db($db, $connect)
or die('Could not select database.');
?>
