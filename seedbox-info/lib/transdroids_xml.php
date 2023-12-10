<?php
if ($_SERVER['SERVER_NAME'] === '_'){
$ServeurName = $_SERVER['SERVER_ADDR'];	// pas de nom ont affiche l'ip
}else{
$ServeurName = $_SERVER['SERVER_NAME']; // nom du serveur	
}
$ServeurIp = $_SERVER['HTTP_HOST']; //Ip du serveur
$UserName = $_SERVER['PHP_AUTH_USER']; //username
$Pass = $_SERVER['PHP_AUTH_PW'];  //mot de passe

//Debut json
header('Content-Disposition: attachment; filename="settings.json"');
header('Content-type: application/json');	

 $json = json_encode( array( 'ui_swipe_labels' => false,
    'alarm_vibrate' => false,
    'alarm_enabled' => false,
	'alarm_enabled' => false,
    'alarm_check_rss_feeds' => false,
	'websites' => array(),
	'ui_refresh_interval' => "60",
	'ui_hide_refresh' => false,
    'search_sort_by' => "sort_seeders",
	'alarm_play_sound' => false,
	'ui_enable_ads' => true,
	'ui_only_show_transferring' => false,
    'search_num_results' => "sort_seeders",
	'alarm_play_sound' => "25",
	'servers' => array( array(
	            'port' => "443",
                'host' => "https://".$ServeurName."",
	            'ssl' => true,
                'type' => "daemon_rtorrent",
	            'password' => $Pass,
	            'os_type' => "type_linux",
	            'folder' => "/".strtoupper($UserName)."",
                'username' => $UserName,
	            'use_auth' => true,
	            'name' => "Seedbox-".$UserName."",
	            'base_ftp_url' => "ftp://".$UserName."@".$ServeurName."/torrents/",
                'download_alarm' => true,
	            'new_torrent_alarm' => true,
				'ssl_accept_all' => false
	)),
	'alarm_interval' => "600000",
    'rssfeeds' => array(),
	'ui_ask_before_remove' => true )); 
         
echo( $json);

?>
