<?php
if ($_SERVER['SERVER_NAME'] === '_'){
$ServeurName = $_SERVER['SERVER_ADDR'];	// pas de nom ont affiche l'ip
}else{
$ServeurName = $_SERVER['SERVER_NAME']; // nom du serveur	
}
$ServeurIp = $_SERVER['HTTP_HOST']; //Ip du serveur
$UserName = $_SERVER['PHP_AUTH_USER']; //username
$Pass = $_SERVER['PHP_AUTH_PW'];  //mot de passe

//
 $fichier = file('../conf/users/'.$UserName.'/config.php'); // Chemin Scgi info
 $total = count($fichier);
 for($i = 0; $i < $total; $i++) 
 { $fichier[$i];} 
 $mot = str_replace(array("'", ";", "$"), "", $fichier[11]);
$Scgi = $mot;

 $mot2 = str_replace(array("'", ";", "$"), "", $fichier[9]);
$Scgi2 = $mot2;
//
 $loads = sys_getloadavg();
 $core_nums = trim(shell_exec("grep -P '^processor' /proc/cpuinfo|wc -l")); //CPU LOAD
$load = round($loads[0]/($core_nums + 1)*100, 2);
//
  $data = shell_exec('uptime');
  $uptime = explode(' up ', $data);
  $uptime = explode(',', $uptime[1]);
  $uptime = $uptime[0].', '.$uptime[1];

  $uptime1 = 'Serveur online: '.$uptime.''; //online serveur
//
$dt = round(disk_total_space("/home/".$UserName."") / 1024 / 1024 / 1024);
$df = round(disk_free_space("/home/".$UserName."") / 1024 / 1024 / 1024);
$pd3 = $dt-$df; 
$pd = $pd3/$dt*100;
$pd2 = round($pd, 2);
$pdr = 100-$pd2;
//
function count_files_Rdir($dir_start)
{
  $number = 0;
  $open = opendir($dir_start);
  while($file = readdir($open))
  {
    if($file != '.' && $file != '..' && $file != '.tmb')
    {
      if(is_dir($dir_start .'/'.$file))
      {
        $new_dir = $dir_start .'/'.$file;
        $number = $number + count_files_Rdir($new_dir);
      }
      else
      {
        $number++;
      }
    }
  }
  return $number;
}


$Nfiles = count_files_Rdir('/home/'.$UserName.'/torrents/'); //nombre de torrents
//
if($pd2 > 98){
            $modal = '<div id="simpleModal" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                 <div class="modal-header">
                <h5 class="modal-title">Attention a votre espace disque!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <p>Espace disque: '.$pd2.'% utilisé Soit '.$pd3.' GB / '.$dt.' GB</p>
				<p>Vous pouvez supprimer vos fichiers avec votre Files Manager ou par FTP</p>
				<p><small>Un espace disque trop remplis, provoquer des erreurs et coupe votre seedbox.</small></p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal">Compris!</button>
            </div>
        </div>
    </div>
  </div>';
}else{
$modal = '';	
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="">
  <title>Seedbox Manager</title>

  <!-- Favicons -->
  <link href="img/favicon.png" rel="icon">
  <link href="img/favicon.png" rel="apple-touch-icon">
  

  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/zabuto_calendar.css">
  <link rel="stylesheet" type="text/css" href="lib/gritter/css/jquery.gritter.css" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet">
  <script src="lib/chart-master/Chart.js"></script>
   <script type="text/javascript">
    window.onload = function () {
        OpenBootstrapPopup();
    };
    function OpenBootstrapPopup() {
        $("#simpleModal").modal('show');
    }
</script>

</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Menu"></div>
      </div>
      <!--logo start-->
      <a href="index.php" class="logo"><b>Seedbox <span>Info</span></b></a>
      <!--logo end-->
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- bar menu apres logo -->
          <li class="dropdown">
            <a href="../" title="Seedbox">
              <i class="fa fa-tasks"></i>
              <span class="badge bg-theme"></span>
              </a>
          </li>
          <li class="dropdown">
            <a href="files.php" title="Files Manager">
              <i class="fa fa-folder-o"></i>
              <span class="badge bg-theme"></span>
              </a>
          </li>
          <li id="header_inbox_bar" class="dropdown">
            <a href="https://easy-tk.biz/submitticket.php?step=2&deptid=1" title="Support">
              <i class="fa fa-comments-o"></i>
              <span class="badge bg-theme"></span>
              </a>
          </li>
          <li id="header_notification_bar" class="dropdown">
            <a href="https://easy-tk.biz/contact.php" title="Contact">
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-warning"></span>
              </a>
          </li>
          <!-- notification dropdown end -->
        </ul>
        <!--  notification end -->
      </div>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" href="https://easy-tk.biz">Logout</a></li>
        </ul>
      </div>
    </header>
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <h5 class="centered"><?=$UserName?></h5>
          <li class="mt">
            <a class="active" href="index.php">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
              </a>
          </li>
          <li class="sub-menu">
             <a href="../" title="Seedbox">
              <i class="fa fa-tasks"></i>
              <span>Seedbox</span>
              </a>
          </li>
		  <li class="sub-menu">
             <a href="files.php" title="Files Manager">
              <i class="fa fa-folder"></i>
              <span>Files Manager</span>
              </a>
          </li>
          <li>
            <a href="https://easy-tk.biz/submitticket.php?step=2&deptid=1">
              <i class="fa fa-comments"></i>
              <span>Support </span>
              <span class="label label-theme pull-right mail-info"></span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="https://easy-tk.biz/contact.php">
              <i class="fa fa-envelope"></i>
              <span>Contact</span>
              </a>
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper">
        <div class="row">
		<!-- **********************************************************************************************************************************************************
        ESPACE MODAL
        *********************************************************************************************************************************************************** -->
    <!--MODAL-->
	<?=$modal?>
    <!--MODAL-->
          <div class="col-lg-9 main-chart">
            <!--CUSTOM CHART START -->
            <div class="border-head">
              <h3>Serveur Info</h3>
            </div>
			
            <div class="row mt">
              <!-- SERVER STATUS PANELS -->
              <div class="col-md-4 col-sm-4 mb">
                <div class="grey-panel pn donut-chart">
                  <div class="grey-header">
                    <h5>SERVER LOAD</h5>
                  </div>
                  <canvas id="serverstatus01" height="120" width="120"></canvas>
                  <script>
                    var doughnutData = [{
                        value: <?=$load?>,
                        color: "#FF6B6B"
                      },
                      {
                        value: 100,
                        color: "#fdfdfd"
                      }
                    ];
                    var myDoughnut = new Chart(document.getElementById("serverstatus01").getContext("2d")).Doughnut(doughnutData);
                  </script>
                  <div class="row">
                    <div class="col-sm-4 col-xs-4 goleft">
                      <p>Usage:</p>
                    </div>
                    <div class="col-sm-8 col-xs-8">
                      <h2><?=$load?>%</h2>
                    </div>
                  </div>
                </div>
                <!-- /grey-panel -->
              </div>
              <!-- /col-md-4-->
              <div class="col-md-4 col-sm-4 mb">
                <div class="darkblue-panel pn">
                  <div class="darkblue-header">
                    <h5>DISK SPACE</h5>
                  </div>
                  <canvas id="serverstatus02" height="120" width="120"></canvas>
                  <script>
                    var doughnutData = [{
                        value: <?=$pd2?>,
                        color: "#f68275"
                      },
                      {
						value: <?=$pdr?>,
                        color: "#1c9ca7"
                      }
                    ];
                    var myDoughnut = new Chart(document.getElementById("serverstatus02").getContext("2d")).Doughnut(doughnutData);
                  </script>
                  <p>Espace disque</p>
                  <footer>
                    <div class="pull-left">
                      <h5><i class="fa fa-hdd-o"></i> <?=$df?> GB Libre/ <?=$dt?> GB</h5>
                    </div>
                    <div class="pull-right">
                      <h5><?=$pd2?>% utilisé</h5>
                    </div>
                  </footer>
                </div>
                <!--  /darkblue panel -->
              </div>
               <!--/ col-md-4 -->
              <div class="col-md-4 col-sm-4 mb">
                <div class="green-panel pn">
                  <div class="green-header">
                    <h5>FILES</h5>
                  </div>
                  <canvas id="serverstatus03" height="120" width="120"></canvas>
                  <script>
                    var doughnutData = [{
                        value: <?=$Nfiles?>,
                        color: "#2b2b2b"
                      },
                      {
                        value: 1000,
                        color: "#fffffd"
                      }
                    ];
                    var myDoughnut = new Chart(document.getElementById("serverstatus03").getContext("2d")).Doughnut(doughnutData);
                  </script>
                  <h3>Vous avez <?=$Nfiles?> fichiers</h3>
                </div>
              </div>
            </div>
          <!-- /INFO CHART SERVEUR -->
		  <div class="col-md-6 mb">
                <!-- WHITE PANEL - TOP USER -->
                <div class="white-panel pn">
                  <div class="white-header">
                    <h5>FTP / FTPS</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <p>Host:</p>
                      <p>User:</p>
					  <p>Password:</p>
					  <p>Port FTP et FTPS:</p>
					  <p>FTPS avec fillezilla:</p>
					  <p>FTPS avec flash fxp :</p>
                    </div>
                    <div class="col-md-8">
                      <p><?=$ServeurName?></p>
                      <p><?=$UserName?></p>
					  <p><?=$Pass?></p>
					  <p>3339</p>
					  <p>ftp explicit sur TLS</p>
					  <p>ftp using explicit ssl(aut TLS)</p>
                    </div>
                  </div>
				  <p><div class="btn-group">
				  <button type="button" class="btn btn-danger"><a href="https://filezilla-project.org/download.php?type=client"><i class="fa fa-download"></i> Télécharger Filezilla</a></button>
				  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                  <span class="caret"></span>
                  <span class="sr-only">Xml Config</span>
                  </button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="lib/ftp_xml.php">XML Config FTP</a></li>
				  <li class="divider"></li>
                  <li><a href="lib/ftps_xml.php">XML Config FTP(s)</a></li>
                </ul>
				</div></p>
                </div>
              </div>
			<!-- WHITE PANEL - TOP USER -->  
		  <div class="col-md-6 mb">
                <div class="white-panel pn">
                  <div class="white-header">
                    <h5>Transdroid</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-5">
					  <p>Type de serveur:</p>
                      <p>Adresse HTTP:</p>
                      <p>User:</p>
					  <p>Password:</p>
					  <p>Port:</p>
					  <p><?=$Scgi?></p>
                    </div>
                    <div class="col-md-7">
					  <p>rtorrent</p>
                      <p>http://<?=$ServeurName?></p>
                      <p><?=$UserName?></p>
					  <p><?=$Pass?></p>
					  <p>80</p>
					  <p><?=$Scgi2?></p>
                    </div>
					</div>
					<p><div class="btn-group">
					<button type="button" class="btn btn-success"><a href="http://transdroid.org/latest"><i class="fa fa-android"></i> Télécharger Transdroid</a></button>
					<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
                  <span class="caret"></span>
                  <span class="sr-only">Xml Config</span>
                  </button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="lib/transdroid_xml.php">HTTP Config Transdroid</a></li>
				  <li class="divider"></li>
				   <li><a href="lib/transdroids_xml.php">HTTPS Config Transdroid</a></li>
                </ul>
				</div>
				</p>
                </div>
              </div>
			  <!-- Bouton redemarrer -->
			  <button type="button" class="btn btn-danger btn-lg btn-block"><a href="reboot.php"><i class="fa fa-cogs"></i> Redémarrer ma Seedbox</a></button>
			  <!-- FILEMANAGER -->
			 <div class="row"> </div>
            <div class="border-head">
              <h3>Files Manager</h3>
            </div>		  
			  <div class="col-md-12 mb">
          <iframe src="../files-manager/elfinder.src.html" style="border: 0; width: 100%; height: 418px">Your browser doesn't support iFrames.</iframe>
		  </div>
	     </div>
          <!-- **********************************************************************************************************************************************************
              RIGHT SIDEBAR CONTENT
              *********************************************************************************************************************************************************** -->
          <div class="col-lg-3 ds">
            <!--COMPLETED ACTIONS DONUTS CHART-->
            <div class="donut-main">
              <h4>Technique</h4>
			  <!-- First Activity -->
            <div class="desc">
              <div class="thumb">
                <span class="badge bg-theme"><i class="fa fa-info"></i></span>
              </div>
              <div class="">
                <p>
                  Si le bouton ne redemarre pas votre Seedbox, alors contacter le support sur <a href="https://easy-tk.biz/submitticket.php?step=2&deptid=1">Easy-tk</a>
                  <br/>
                </p>
              </div>
            </div>
              <button type="button" class="btn btn-danger btn-lg btn-block"><a href="reboot.php"><i class="fa fa-cogs"></i> Redémarrer Seedbox</a></button>
            </div>
			 <!-- serveur ONLINE SECTION -->
            <h4 class="centered mt"></h4>
            <!-- First Member -->
            <div class="desc">
              <div class="thumb">
                <span class="badge bg-theme"></span>
              </div>
              <div class="">
                <p>
                 <i class="fa fa-clock-o"></i> <?=$uptime1;?>
                </p>
              </div>
            </div>
            <!-- Second Member -->
            <div class="desc">
              <div class="thumb">               
              </div>
              <div class="details">
                <p>
                    <i class="fa fa-hdd-o"></i> Espace disque: <?=$pd2?>% <muted>utilisé</muted> Soit <?=$pd3?> GB / <?=$dt?> GB
                 </p>
              </div>
            </div>
            <!-- Third Member -->
            <div class="desc">
              <div class="thumb">
                
              </div>
              <div class="details">
                <p>
                  <i class="fa fa-folder-o"></i> Fichier: Vous avez <?=$Nfiles?> fichiers
                  
                </p>
              </div>
            </div>
            <!-- Fourth Member -->
            <div class="desc">
              <div class="thumb">
                
              </div>
              <div class="details">
                <p>
                  <i class="fa fa-map-marker"></i> Mon Ip est: <?=$_SERVER['REMOTE_ADDR'];?>
                </p>
              </div>
            </div>
            <!-- CALENDAR-->
            <div id="calendar" class="mb">
              <div class="panel green-panel no-margin">
                <div class="panel-body">
                  <div id="date-popover" class="popover top" style="cursor: pointer; disadding: block; margin-left: 33%; margin-top: -50px; width: 175px;">
                    <div class="arrow"></div>
                    <h3 class="popover-title" style="disadding: none;"></h3>
                    <div id="date-popover-content" class="popover-content"></div>
                  </div>
                  <div id="my-calendar"></div>
                </div>
              </div>
            </div>
            <!-- / calendar -->
			<!-- APP -->
			<div class="donut-main">
              <h4>Extension navigateur</h4>
            <div class="desc">
              <div class="thumb">
                <span class="badge bg-theme"><i class="fa fa-chrome"></i> Chrome <i class="fa fa-firefox"></i> Firefox</span>
              </div>
              <div class="">
			    <br/>
                <p>
                   <a href="https://chrome.google.com/webstore/detail/easytorrent/mlcnppomeahdkcljhnhaohhmadpdbnoc?hl=fr"><img src="img/chrome.png" alt="Extention chrome"></a>
				   <a href="https://addons.mozilla.org/fr/firefox/addon/easytorrent/"><img src="img/firefox.png" alt="Extention Firefox"></a>
                  <br/>
                </p>
              </div>
            </div>
            </div>
			<!-- /APP -->
          </div>
          <!-- /col-lg-3 -->
        </div>
        <!-- /row -->
      </section>
    </section>
    <!--main content end-->
    <!--footer start-->
    <footer class="site-footer">
      <div class="text-center">
        <p>
          &copy; Copyrights <strong>Easy-tk</strong>. All Rights Reserved
        </p>
        <div class="credits">
          <!--
            You are NOT allowed to delete the credit link to TemplateMag with free version.
            You can delete the credit link only if you bought the pro version.
            Buy the pro version with working PHP/AJAX contact form: https://templatemag.com/dashio-bootstrap-admin-template/
            Licensing information: https://templatemag.com/license/
          -->
          Created with <a href="https://easy-tk.biz/">Easy-tk</a>
        </div>
        <a href="index.php#" class="go-top">
          <i class="fa fa-angle-up"></i>
          </a>
      </div>
    </footer>
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="lib/jquery/jquery.min.js"></script>

  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <script src="lib/jquery.sparkline.js"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>
  <script type="text/javascript" src="lib/gritter/js/jquery.gritter.js"></script>
  <script type="text/javascript" src="lib/gritter-conf.js"></script>
  <!--script for this page-->
  <script src="lib/sparkline-chart.js"></script>
  <script src="lib/zabuto_calendar.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'Bienvenue sur votre Panel',
        // (string | mandatory) the text inside the notification
        text: 'Vous pouvez y retrouver vos informations et redémarrer votre seedbox.',
        // (string | optional) the image to display on the left
        image: '',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: false,
        // (int | optional) the time you want it to be alive for before fading out
        time: 8000,
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
      });

      return false;
    });
  </script>
  <script type="application/javascript">
    $(document).ready(function() {
      $("#date-popover").popover({
        html: true,
        trigger: "manual"
      });
      $("#date-popover").hide();
      $("#date-popover").click(function(e) {
        $(this).hide();
      });

      $("#my-calendar").zabuto_calendar({
		language: "fr",
       today: true,  
        action: function() {
          return myDateFunction(this.id, false);
        },
        action_nav: function() {
          return myNavFunction(this.id);
        },
        ajax: {
          url: "show_data.php?action=1",
          modal: true
        },
        legend: [{
            type: "text",
            label: "Special event",
            badge: "00"
          },
          {
            type: "block",
            label: "Regular event",
          }
        ]
	});
    });

    function myNavFunction(id) {
      $("#date-popover").hide();
      var nav = $("#" + id).data("navigation");
      var to = $("#" + id).data("to");
      console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
    }
  </script>
</body>

</html>
