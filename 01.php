<?php
$li-tags1="<li></li>";
$li-tags1.="<li></<li>";
//echo $li-tags;


$words=isset($_GET["S"]) ? trim($_GET["s"]) :"";
switch ($words){
	case "w":
	echo $li_tags1;
	break;
	case "l":
	echo $li_tags2;
	break;
	case "z":
	echo $li_tags3;
	default:
	echo"<li>break;没有找到相关信息</li>
	break;
}
?>