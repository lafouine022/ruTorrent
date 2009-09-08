﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
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
 * File Name: ru.js
 * 	Russian language file.
 * 
 * File Author:
 * 		Artem Lopata (mod-s@yandex.ru)
 */
 
 var WUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "General",
 Downloads			: "Downloads",
 Connection			: "Connection",
 BitTorrent			: "BitTorrent",
 Queueing			: "Queueing",
 Scheduler			: "Scheduler",
 Advanced			: "Advanced",
 Disk_Cache			: "Disk Cache",
 Enable_Web_Interface : "Enable Web Interface",
 Authent			: "Authentication",
 Username			: "Username",
 Password			: "Password",
 Enable_Guest_acc	: "Enable Guest account with username",
 Connectivity		: "Connectivity",
 Alt_list_port		: "Alternative listening port (default is the bittorrent port)",
 Rest_access		: "Restrict access to the following IPs (Separate multiple entries with ,)",
 User_Interface		: "User Interface",
 Confirm_del_torr	: "Confirm when deleting torrents",
 Update_GUI_every	: "Update GUI every",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternate list background colour",
 Show_speed			: "Show speed",
 Don_t				: "Don't",
 In_status_bar		: "In status bar",
 In_title_bar		: "In title bar",
 Show_cat_start		: "Show categories on startup",
 Virt_row_thres		: "Virtual Row Threshold",
 Show_det_start		: "Show details on startup",
 Restor_def			: "Restore to default",
 When_add_torrent	: "When adding torrents",
 Dnt_start_down_auto: "Don't start the download automatically",
 Other_sett			: "Other Settings",
 Append_ut_incompl	: "Append .!ut to incomplete files",
 Prealloc_all_files	: "Pre-allocate all files",
 Prev_stnd_w_act_con: "Prevent stand-by if there are active torrents",
 Listening_Port		: "Listening Port",
 Port_f_incom_conns	: "Port used for incoming connections",
 Random_Port		: "Random Port",
 Rnd_port_torr_start: "Randomize port each time rTorrent starts",
 En_UPnP_mapp		: "Enable UPnP port mapping",
 Add_torr_mustdie_f	: "Add rTorrent to Windows Firewall exceptions (Windows XP SP2 or later only)",
 Proxy_Server		: "Proxy Server",
 Type				: "Type",
 none				: "(none)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Use proxy server for peer-to-peer connections",
 Bandwidth_Limiting : "Bandwidth Limiting",
 Global_max_upl		: "Global maximum upload rate",
 unlimited			: "unlimited",
 Alt_down_r_downl	: "Alternate upload rate when not downloading",
 Glob_max_downl		: "Global maximum download rate",
 Num_of_conn		: "Number of Connections",
 Glob_max_conn		: "Global maximum number of connections",
 Max_conn_peer_torr	: "Maximum number of connected peers per torrent",
 Num_upl_slots		: "Number of upload slots per torrent",
 Extra_ulslots		: "Use additional upload slots if upload speed < 90%",
 Add_bittor_featrs	: "Additional BitTorrent Features",
 En_DHT_ntw			: "Enable DHT Network",
 Ask_scrape			: "Ask tracker for scrape information",
 En_DHT_new_torrs	: "Enable DHT for new torrents",
 Peer_exch			: "Peer Exchange",
 Ip_report_track	: "IP/Hostname to report to tracker",
 Protocol_enc		: "Protocol Encryption",
 Outgoing			: "Outgoing",
 Disabled			: "Disabled",
 Enabled			: "Enabled",
 Forced				: "Forced",
 All_inc_legacy_conn: "Allow incoming legacy connections",
 Queue_sett			: "Queue Settings",
 Max_n_act_torrs	: "Maximum number of active torrents (upload or download)",
 Max_num_act_downl	: "Maximum number of active downloads",
 Seed_while			: "Seed While [Default Values]",
 Ratio_is			: "Ratio is",
 or_time_is			: " % or seeding time is ",
 Ignore				: "(Ignore)",
 nin_min			: "90 minutes",
 two_h				: "2 hours",
 three_h			: "3 hours",
 four_h				: "4 hours",
 five_h				: "5 hours",
 six_h				: "6 hours",
 seven_h			: "7 hours",
 eight_h			: "8 hours",
 nine_h				: "9 hours",
 ten_h				: "10 hours",
 twelve_h			: "12 hours",
 sixteen_h			: "16 hours",
 twenty_h			: "20 hours",
 tw_four_h			: "24 hours",
 thirty_h			: "30 hours",
 thirty_six_h		: "36 hours",
 forty_eight_h		: "48 hours",
 sixty_h			: "60 hours",
 sev_two_h			: "72 hours",
 nin_six_h			: "96 hours",
 Seed_prior			: "Seeding tasks have higher priority than downloading tasks",
 When_torr_reach	: "When Torrent has reached the seeding goal",
 Limit_upl_rate		: "Limit the upload rate to [use 0 to stop torrent]",
 En_shedul			: "Enable Scheduler",
 Shed_sett			: "Scheduler Settings",
 Lim_upl_rate		: "Limited upload rate",
 Lim_dow_rate		: "Limited download rate",
 Dis_DHT_when_t_off	: "Disable DHT when turning off",
 Disc_cahe			: "Disk Cache",
 Disc_cahe_bla_bla	: "The disk cache is used to keep frequently accessed data in memory to reduce the number of reads and writes to the hard drive. rTorrent normally manages the cache automatically, but you may change its behaviour by modifying these settings.",
 Overwr_d_cahe_au	: "Overwrite automatic Cache Size and specify the size manually",
 MB					: "MB",
 Red_mem_usage		: "Reduce memory usage when cache is not needed",
 Adv_cache_sett		: "Advanced Cache Settings",
 En_cach_disc		: "Enable Caching of Disk Writes",
 Wr_out_ever_2_min	: "Write out untouched blocks every 2 minutes",
 Wr_immed			: "Write out finished pieces immediately",
 En_cah_disc_read	: "Enable Caching of Disk Reads",
 Turn_off_w_read	: "Turn off read caching if the upload speed is slow",
 Rem_old_from_cahe	: "Remove old blocks from cache",
 Increase_autom_cach: "Increase automatic cache size when cache thrashing",
 Advanced			: "Advanced",
 Advanced_label		: "Advanced Options [WARNING: Do not modify!]",
 Cancel				: "Cancel",
 uTorrent_settings	: "rTorrent Settings",
 
// Main window
 Doesnt_support		: "The WebUI<sup>BETA</sup> does not support your browser.",
 Name				: "Name",
 Status				: "Status",
 Size				: "Size",
 Done				: "Done",
 Downloaded			: "Downloaded",
 Uploaded			: "Uploaded",
 Ratio				: "Ratio",
 DL					: "DL",
 UL					: "UL",
 ETA				: "ETA",
 Label				: "Label",
 Peers				: "Peers",
 Seeds				: "Seeds",
 Avail				: "Avail.",
 Remaining			: "Remaining",
 Priority			: "Priority",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "The file has to be a torrent file.",
 Pausing			: "Pausing",
 Seeding			: "Seeding",
 Downloading		: "Downloading",
 Checking			: "Checking",
 Error				: "Error",
 Queued				: "Queued",
 Finished			: "Finished",
 Stopped			: "Stopped",
 Request_timed_out	: "The request to rTorrent has timed out.",
 
 Force_Start		: "Force Start",
 Start				: "Start",
 Pause				: "Pause",
 Stop				: "Stop",
 Force_recheck		: "Force Re-check",
 New_label			: "New Label...",
 Remove_label		: "Remove Label",
 Labels				: "Labels",
 Remove				: "Remove",
 Delete_data		: "Delete Data",
 Remove_and			: "Remove And",
 Details			: "Details...",
 Properties			: "Properties...",
 of					: "of", 		//this two creates line 
 connected			: "connected",	//  XX of YY connected
 High_priority		: "High Priority",
 Normal_priority	: "Normal Priority",
 Low_priority		: "Low Priority",
 Dont_download		: "Don't Download",
 Shure_restore_UI	: "Are you sure that you want to restore the user interface?",
 Reloading			: "Reloading...",
 Name				: "Name",
 Date_				: "Date",
 Files				: "Files",
 Logger				: "Logger",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Loading...",
 Torrent_file		: "Torrent file",
 Torrent_URL		: "Torrent URL",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Downloader",
 Torrent_properties	: "Torrent Properties",
 Trackers			: "Trackers",
 Max_down_rate		: "Maximum download rate",
 Max_upl_rate		: "Maximum upload rate",
 Bandwidth_sett		: "Bandwidth Settings",
 Number_ul_slots	: "Number of upload slots",
 Override_default	: "Override default settings",
 Initial_seed		: "Initial Seed",
 Enable_DHT			: "Enable DHT",
 Peer_ex			: "Peer Exchange",
 About				: "About",
 Enter_label_prom	: "Enter the new label for the selected torrents",
 Remove_torrents	: "Remove Torrent(s)",
 Rem_torrents_prompt: "Do you really want to remove the selected torrent(s)?",
 All				: "All",
 Active				: "Active",
 Inactive			: "Inactive",
 No_label			: "No Label",
 Transfer			: "Transfer",
 Time_el			: "Time Elapsed",
 Remaining			: "Remaining",
 Share_ratio		: "Share Ratio",
 Down_speed			: "Download Speed",
 Down_limit			: "Down Limit",
 Ul_speed			: "Upload Speed",
 Ul_limit			: "Up Limit",
 Wasted				: "Wasted",
 Tracker			: "Tracker",
 Track_URL			: "Tracker URL",
 Track_status		: "Tracker Status",
 Update_in			: "Update In",
 DHT_status			: "DHT Status",
 Save_as			: "Save As",
 Tot_size			: "Total Size",
 Created_on			: "Created On",
 Comment			: "Comment",
 
 
 //buttons
 add_button			: "Add File",
 add_url			: "Add URL",
 ok1				: "   OK   ",
 ok2				: "   OK   ",
 ok3				: "   OK   ",
 Cancel1			: " Cancel ",
 Cancel2			: " Cancel ",
 no1				: "   No   ",
 
 mnu_add			: "Add Torrent...",
 mnu_remove			: "Remove",
 mnu_start			: "Start",
 mnu_pause			: "Pause",
 mnu_stop			: "Stop",
 mnu_rss			: "RSS Downloader",
 mnu_settings		: "Settings...",
 mnu_search			: "Search...",
 mnu_lang			: "Language",
 
 //Other variables added by spide
 torrent_add			: "Add Torrent", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

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
