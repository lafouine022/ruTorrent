<?php
if ($_SERVER['SERVER_NAME'] === '_'){
$ServeurName = $_SERVER['SERVER_ADDR'];	// pas de nom ont affiche l'ip
}else{
$ServeurName = $_SERVER['SERVER_NAME']; // nom du serveur	
}
$ServeurIp = $_SERVER['HTTP_HOST']; //Ip du serveur
$UserName = $_SERVER['PHP_AUTH_USER']; //username
$Pass = $_SERVER['PHP_AUTH_PW'];  //mot de passe
//Debut xml
header('Content-Disposition: attachment; filename="Filezilla-FTP.xml"');
header('Content-type: "text/xml"; charset="utf8"');	
$xml = '<?xml version="1.0" encoding="UTF-8"?>'; 
   $xml .= '<FileZilla3><Servers><Server>';
   $xml .= '<Host>';
   $xml .= ''.$ServeurName.'';
   $xml .= '</Host>';
   $xml .= '<Port>';
   $xml .= '3339';
   $xml .= '</Port>';
    $xml .= '<Protocol>';
   $xml .= '0';
   $xml .= '</Protocol>';
   $xml .= '<Type>';
   $xml .= '0';
   $xml .= '</Type>';
   $xml .= '<User>';
   $xml .= ''.$UserName.'';
   $xml .= '</User>';
   $xml .= '<Pass>';
   $xml .= ''.$Pass.'';
   $xml .= '</Pass>';
   $xml .= '<Logontype>';
   $xml .= '1';
   $xml .= '</Logontype>';
   $xml .= '<TimezoneOffset>';
   $xml .= '0';
   $xml .= '</TimezoneOffset>';
   $xml .= '<PasvMode>';
   $xml .= 'MODE_DEFAULT';
   $xml .= '</PasvMode>';
   $xml .= '<MaximumMultipleConnections>';
   $xml .= '0';
   $xml .= '</MaximumMultipleConnections>';
   $xml .= '<EncodingType>';
   $xml .= 'UTF-8';
   $xml .= '</EncodingType>';
   $xml .= '<BypassProxy>';
   $xml .= '0';
   $xml .= '</BypassProxy>';
   $xml .= '<Name>';
   $xml .= 'Seedbox-'.$UserName.'-FTP';
   $xml .= '</Name>';
   $xml .= '<SyncBrowsing>';
   $xml .= '0';
   $xml .= '</SyncBrowsing>'; 
   //$xml .= '<DirectoryComparison>';
   //$xml .= '0';
  // $xml .= '</DirectoryComparison>';  
   $xml .= '</Server></Servers></FileZilla3>'; 
   echo $xml; 
	//exit();
?>
