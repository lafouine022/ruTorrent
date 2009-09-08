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
 
 var WUILang =
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
 Disk_Cache			: "Disková cache",
 Enable_Web_Interface : "Povoliť WebUI",
 Authent			: "Overenie uživateľa",
 Username			: "Meno",
 Password			: "Heslo",
 Enable_Guest_acc	: "Povoliť Quest učet s menom",
 Connectivity		: "Pripojenie",
 Alt_list_port		: "Alternatívny naslúchaci port (predvoleny je bittorrent)",
 Rest_access		: "Obmedzený prístup pre IP adresy (oddeľujte čiarkov ,)",
 User_Interface		: "Užívateľske rozhranie",
 Confirm_del_torr	: "Potvrdiť odobratie torrentu",
 Update_GUI_every	: "Aktualizovať GUI každych",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternatívne pozadie zoznamu",
 Show_speed			: "Zobraziť rýchlosť",
 Don_t				: "(nikde)",
 In_status_bar		: "V stavovom riadku",
 In_title_bar		: "V záhlavy",
 Show_cat_start		: "Zobraziť kategórie po spusteni",
 Virt_row_thres		: "Virtual Row Threshold",
 Show_det_start		: "Zobraziť detaily po spustení",
 Restor_def			: "Pôvodné nastavenia",
 When_add_torrent	: "Po pridaní torrentu",
 Dnt_start_down_auto: "Nespušťať sťahovanie automaticky",
 Other_sett			: "Ďalšie nastavenia",
 Append_ut_incompl	: "Pridať .!ut k nekompletným súborom",
 Prealloc_all_files	: "Alokovať miesto pre súbory",
 Prev_stnd_w_act_con: "Zakázať vypnutie aktívnym torrentom",
 Listening_Port		: "Naslúchací port",
 Port_f_incom_conns	: "Port použitý pre prichádzajúce spojenie",
 Random_Port		: "Náhodný port",
 Rnd_port_torr_start: "Náhodný port vždy pri štarte rTorrentu",
 En_UPnP_mapp		: "Povoliť UPnP mapovanie portu",
 Add_torr_mustdie_f	: "Pridať rTorrent do výnimiek Windows Firewall (Windows XP SP2 a novší)",
 Proxy_Server		: "Proxy Server",
 Type				: "Typ",
 none				: "(žiadny)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Používať proxy server pre peer-to-peer spojenia",
 Bandwidth_Limiting : "Rýchlostné limity",
 Global_max_upl		: "Celkové max. odosielanie dát",
 unlimited			: "neobmedzene",
 Alt_down_r_downl	: "Limit odosielania, keď nie je sťahovanie",
 Glob_max_downl		: "Celkové max. sťahovanie dát",
 Num_of_conn		: "Počet spojení",
 Glob_max_conn		: "Maximálny počet všetkých spojení",
 Max_conn_peer_torr	: "Maximalny počet pripojenych peerov na torrent",
 Num_upl_slots		: "Počet odosielacích slotov na torrent",
 Extra_ulslots		: "Použiť ďalší slot ak je rýchlosť odosielania < 90%",
 Add_bittor_featrs	: "Prídavné funkcie BitTorrent",
 En_DHT_ntw			: "Povoliť DHT Network",
 Ask_scrape			: "Žiadať tracker o scrape informácie",
 En_DHT_new_torrs	: "Povoliť DHT pre nové torrenty",
 Peer_exch			: "Povoliť Peer Exchange",
 Ip_report_track	: "IP/Hostname odoslaný trackeru",
 Protocol_enc		: "Kódovanie prenosu",
 Outgoing			: "Odchádzajúce",
 Disabled			: "Zakázané",
 Enabled			: "Povolené",
 Forced				: "Vynútené",
 All_inc_legacy_conn: "Povoliť nek´dované prichádzajúce spojenia",
 Queue_sett			: "Nastavenie Čakania v rade",
 Max_n_act_torrs	: "Max. počet aktívnych torrentov (odosielanie/sťahovanie)",
 Max_num_act_downl	: "Max. počet aktívnych sťahovaní",
 Seed_while			: "Seedovať ak [predvolené hodnoty]",
 Ratio_is			: "Ratio je",
 or_time_is			: " % alebo Seed čas je ",
 Ignore				: "(ignorovať)",
 nin_min			: "90 minút",
 two_h				: "2 hodiny",
 three_h			: "3 hodiny",
 four_h				: "4 hodiny",
 five_h				: "5 hodín",
 six_h				: "6 hodín",
 seven_h			: "7 hodín",
 eight_h			: "8 hodín",
 nine_h				: "9 hodín",
 ten_h				: "10 hodín",
 twelve_h			: "12 hodín",
 sixteen_h			: "16 hodín",
 twenty_h			: "20 hodín",
 tw_four_h			: "24 hodín",
 thirty_h			: "30 hodín",
 thirty_six_h		: "36 hodín",
 forty_eight_h		: "48 hodín",
 sixty_h			: "60 hodín",
 sev_two_h			: "72 hodín",
 nin_six_h			: "96 hodín",
 Seed_prior			: "Seedovanie má vyžšiu prioritu ako sťahovanie",
 When_torr_reach	: "Limit odosielania po dosiahnutí hodnoty ratio alebo Seed čas",
 Limit_upl_rate		: "Limit odosielania [použi 0 pre zastavenie torrentu]",
 En_shedul			: "Povoliť plánovač",
 Shed_sett			: "Nastavenie plánovania",
 Lim_upl_rate		: "Limit rýchlosti odosielania",
 Lim_dow_rate		: "Limit rýchlosti sťahovania",
 Dis_DHT_when_t_off	: "Vypnúť DHT v režime stop",
 Disc_cahe			: "Disková Cache",
 Disc_cahe_bla_bla	: "Disková cache si ukladá do pamäte často používané data pre zníženie počtu čítaní\na zápisov na harddisk. µTorrent spravuje cache automaticky, ale Vy môžete meniť jeho správanie zmenami v nastavení.",
 Overwr_d_cahe_au	: "Nepoužívať automatickú veľkosť cache, nastaviť manuálne na",
 MB					: "MB",
 Red_mem_usage		: "Obmedziť používanie pamäte, ak cache nie je potrebná",
 Adv_cache_sett		: "Rozšírené nastavenie cache",
 En_cach_disc		: "Povoliť cache pre zápis na disk",
 Wr_out_ever_2_min	: "Zapisovať nedotknuté bloky každé 2 minúty",
 Wr_immed			: "Zapisovať dokončené časti okamžite",
 En_cah_disc_read	: "Povoliť cache pre čítanie z disku",
 Turn_off_w_read	: "Vypnúť čítanie z cache, ak je odosielanie pomalé",
 Rem_old_from_cahe	: "Odstrániť staré bloky z cache",
 Increase_autom_cach: "Zväčšiť automatickú cache, ak sú problémy",
 Advanced			: "Rozšírené",
 Advanced_label		: "Rozšírené nastavenia [VAROVANIE: úpravy na vlastné riziko!]",
 Cancel				: "Zrušiť",
 uTorrent_settings	: "rTorrent Možnosti",
 
// Main window
 Doesnt_support		: "WebUI<sup>BETA</sup> nepodporuje tvoj prehliadač.",
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
 
 Force_Start		: "Vynútený štart",
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
 High_priority		: "Vysoká priorita",
 Normal_priority	: "Normálna priorita",
 Low_priority		: "Nízka priorita",
 Dont_download		: "Nesťahovať",
 Shure_restore_UI	: "Si si istý, že chceš obnoviť UI?",
 Reloading			: "Reloading...",
 Name				: "Meno",
 Date_				: "Dátum",
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
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Sťahovač",
 Torrent_properties	: "Nastavenia Torrentu",
 Trackers			: "Trackery",
 Max_down_rate		: "Max. rýchlosť sťahovania",
 Max_upl_rate		: "Max. rýchlosť odosielania",
 Bandwidth_sett		: "Nastavenia prenosu",
 Number_ul_slots	: "Počet odosielacích slotov:",
 Override_default	: "Ignorovať hlavné nastavenia",
 Initial_seed		: "Počiatočný Seed",
 Enable_DHT			: "Povoliť DHT",
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
 Update_in			: "Aktualizácia za",
 DHT_status			: "Stav DHT",
 Save_as			: "Uložiť ako",
 Tot_size			: "Celková veľkosť",
 Created_on			: "Vytvorené dňa",
 Comment			: "Komentár",
 
 
 //buttons
 add_button			: "Pridať Súbor",
 add_url			: "Pridať URL",
 ok1				: "   OK   ",
 ok2				: "   OK   ",
 ok3				: "   OK   ",
 Cancel1			: " Zrušiť ",
 Cancel2			: " Zrušiť ",
 no1				: "   Nie   ",
 
 mnu_add			: "Pridať Torrent...",
 mnu_remove			: "Odstrániť",
 mnu_start			: "Štart",
 mnu_pause			: "Pauza",
 mnu_stop			: "Stop",
 mnu_rss			: "RSS Sťahovač",
 mnu_settings		: "Nastavenia...",
 mnu_search			: "Hľadať...",
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
 PHPDoesnt_enabled		: "Your web server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to directory", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About...",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work."
 };
