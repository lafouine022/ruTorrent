﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.cz
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: sk.js
 * 	Slovak language file.
 * 
 * File Author:
 * 		AndzinSan
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Hlavné",
 Downloads			: "Sťahovanie",
 Connection			: "Pripojenie",
 BitTorrent			: "BitTorrent",
 Queueing			: "V rade",
 Scheduler			: "Plánovač",
 Advanced			: "Rozšírené",
 User_Interface		: "Užívateľske rozhranie",
 Confirm_del_torr	: "Potvrdiť odobratie torrentu",
 Update_GUI_every	: "Aktualizovať GUI každych",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternatívne pozadie zoznamu",
 Show_cat_start		: "Zobraziť kategórie po spusteni",
 Show_det_start		: "Zobraziť detaily po spustení",
 Dnt_start_down_auto: "Nespušťať sťahovanie automaticky",
 Other_sett			: "Ďalšie nastavenia",
 Listening_Port		: "Naslúchací port",
 Port_f_incom_conns	: "Port použitý pre prichádzajúce spojenie",
 Rnd_port_torr_start: "Náhodný port vždy pri štarte rTorrentu",
 Type				: "Typ",
 Bandwidth_Limiting : "Rýchlostné limity",
 Global_max_upl		: "Celkové max. odosielanie dát",
 unlimited			: "neobmedzene",
 Glob_max_downl		: "Celkové max. sťahovanie dát",
 Add_bittor_featrs	: "Prídavné funkcie BitTorrent",
 En_DHT_ntw			: "Povoliť DHT Network",
 Peer_exch			: "Povoliť Peer Exchange",
 Ip_report_track	: "IP/Hostname odoslaný trackeru",
 Disabled			: "Zakázané",
 Enabled			: "Povolené",
 Advanced			: "Rozšírené",
 Cancel				: "Zrušiť",
 uTorrent_settings	: "rTorrent Možnosti",
 
// Main window
 Doesnt_support		: "ruTorrent nepodporuje tvoj prehliadač.",
 Name				: "Názov",
 Status				: "Status",
 Size				: "Veľkosť",
 Done				: "Hotovo",
 Downloaded			: "Stiahnuté",
 Uploaded			: "Odoslané",
 Ratio				: "Ratio",
 DL					: "DL",
 UL					: "UL",
 ETA				: "ETA",
 Label				: "Kategoria",
 Peers				: "Peerov",
 Seeds				: "Seedov",
 Avail				: "Dostupnosť",
 Remaining			: "Zostáva",
 Priority			: "Priorita",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "Súbor musí byť torrent súbor.",
 Pausing			: "Pauza",
 Seeding			: "Seedujem",
 Downloading		: "Sťahujem",
 Checking			: "Kontrolujem",
 Error				: "Chyba",
 Queued				: "V rade",
 Finished			: "Dokončené",
 Stopped			: "Zastavené",
 Request_timed_out	: "Pre požiadavek na rTorrent vypršal čas.",
 
 Start				: "Štart",
 Pause				: "Pauza",
 Stop				: "Stop",
 Force_recheck		: "Hash kontrola",
 New_label			: "Nová kategória...",
 Remove_label		: "Odstrániť kategóriu",
 Labels				: "Kategorie",
 Remove				: "Odstrániť",
 Delete_data		: "Odstrániť dáta",
 Remove_and			: "Odobrať úlohu a",
 Details			: "Detaily...",
 Properties			: "Vlastnosti...",
 of					: "z", 		//this two creates line 
 connected			: "pripojených",	//  XX of YY connected
 High_priority		: "Vysoká",
 Normal_priority	: "Normálna",
 Low_priority		: "Nízka",
 Dont_download		: "Nesťahovať",
 Files				: "Súbory",
 Logger				: "Záznamy",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bajtov",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Nahrávam...",
 Torrent_file		: "Torrent súbor",
 Torrent_URL		: "Torrent URL",
 Torrent_properties	: "Nastavenia Torrentu",
 Trackers			: "Trackery",
 Bandwidth_sett		: "Nastavenia prenosu",
 Number_ul_slots	: "Počet odosielacích slotov:",
 Peer_ex			: "Povoliť Peer Exchange",
 About				: "O programe...",
 Enter_label_prom	: "Zadajte novú kategóriu pre vybrané torrenty",
 Remove_torrents	: "Odstrániť Torrent(y)",
 Rem_torrents_prompt: "Naozaj chceš odstrániť vybrané torrenty?",
 All				: "Všetky",
 Active				: "Aktívne",
 Inactive			: "Neaktívne",
 No_label			: "Bez kategórie",
 Transfer			: "Prenos",
 Time_el			: "Uplynulý čas",
 Remaining			: "Zostáva",
 Share_ratio		: "Ratio",
 Down_speed			: "Sťahovanie",
 Down_limit			: "Limit sťahovania",
 Ul_speed			: "Odosielania",
 Ul_limit			: "Limit odosielania",
 Wasted				: "Zahodených",
 Tracker			: "Tracker",
 Track_URL			: "URL Trackeru",
 Track_status		: "Stav Trackeru",
 Save_as			: "Uložiť ako",
 Created_on			: "Vytvorené dňa",
 Comment			: "Komentár",
 
 
 //buttons
 add_button			: "Pridať Súbor",
 add_url			: "Pridať URL",
 ok				: "   OK   ",
 Cancel				: " Zrušiť ",
 no				: "   Nie   ",
 
 mnu_add			: "Pridať Torrent",
 mnu_remove			: "Odstrániť",
 mnu_start			: "Štart",
 mnu_pause			: "Pauza",
 mnu_stop			: "Stop",
 mnu_rss			: "RSS Sťahovač",
 mnu_settings			: "Nastavenia",
 mnu_search			: "Hľadať",
 mnu_lang			: "Jazyk",
 
 //Other variables added by spide
 torrent_add			: "Pridať Torrent",
 time_w				: "t ",
 time_d				: "d ",
 time_h				: "h ",
 time_m				: "m ",
 time_s				: "s ",

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Webserver does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Webserver user can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Webserver user can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "Can't start plugin for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limit",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Webserver user can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid of rTorrent user. Some functionality will be unavailable.",
 retryOnErrorTitle		: "If rTorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" },
 statNotFound			: "rTorrent user can't access 'stat' program. Some functionality will be unavailable.",
 statNotFoundW			: "Webserver user can't access 'stat' program. Some functionality will be unavailable.",
 badrTorrentVersion		: "This version of rTorrent doesn't support this plugin. Plugin will not work. rTorrent version must be >=",
 badPHPVersion                  : "This version of PHP doesn't support this plugin. Plugin will not work. PHP version must be >=",
 rTorrentExternalNotFoundError	: "Plugin will not work. rTorrent user can't access external program",
 rTorrentExternalNotFoundWarning: "Some functionality will be unavailable. rTorrent user can't access external program",
 webExternalNotFoundError	: "Plugin will not work. Webserver user can't access external program",
 webExternalNotFoundWarning	: "Some functionality will be unavailable. Webserver user can't access external program",
 rTorrentBadScriptPath		: "Plugin will not work. rTorrent user can't access file for read/execute",
 rTorrentBadPHPScriptPath	: "Plugin will not work. rTorrent user can't access file for read",
 dependenceError		: "Plugin will not work. It requires plugin(s)",
 peerAdd			: "Add peer...",
 peerBan			: "Ban",
 peerKick			: "Kick",
 peerSnub			: "Snub",
 peerDetails			: "Details",
 peerUnsnub			: "Unsnub",
 peerAddLabel			: "Enter IP/Hostname[:port]",
 noTorrentList			: "Torrent list not yet available, connection to rTorrent not established.",
 yes				: "yes",
 no				: "no",
 DateFormat			: "Date format",
 DLStrategy			: "Download strategy",
 prioritizeFirst		: "Leading chunk first",
 prioritizeLast			: "Trailing chunk first",
 prioritizeNormal		: "Normal",
 updateTracker			: "Update trackers",
 scrapeUpdate			: "Last updated",
 trkInterval			: "Interval",
 logAutoSwitch			: "Autoswitch to 'Log' tab",
 phpParameterUnavailable	: "PHP directive register_argc_argv is set to Off. Change its value to On, otherwise some plugins won't work.",
 addTorrentFailedURL		: "Error: torrent wasn't passed to rTorrent. Can't retrieve URL.",
 addTorrentFailedFile		: "Error: torrent wasn't passed to rTorrent. The retrieved content is not a valid torrent file.",
 addTorrentFailedDirectory	: "Error: torrent wasn't passed to rTorrent. Incorrect downloads directory was specified."
 };
