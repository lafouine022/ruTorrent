<?php
$ServeurName = $_SERVER['SERVER_NAME']; //nom du serveur
$ServeurIp = $_SERVER['HTTP_HOST']; //Ip du serveur
$UserName = $_SERVER['PHP_AUTH_USER']; //username
$Pass = $_SERVER['PHP_AUTH_PW'];  //mot de passe

 $fichier = file('../conf/users/'.$UserName.'/config.php'); // Chemin Scgi info
 $total = count($fichier);
 for($i = 0; $i < $total; $i++) 
 { $fichier[$i];} 
 $mot = str_replace(array("'", ";", "$"), "", $fichier[11]);
$Scgi = $mot;

 $mot2 = str_replace(array("'", ";", "$"), "", $fichier[9]);
$Scgi2 = $mot2;

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
$df = round(disk_free_space("/home/".$UserName."") / 1024 / 1024 / 1024); //disque restant
$dt = round(disk_total_space("/home/".$UserName."") / 1024 / 1024 / 1024); //total Disque
$pd = $dt/$df;
$pd2 = round($pd, 2);
//
function count_files_Rdir($dir_start)
{
  $number = 0;
  $open = opendir($dir_start);
  while($file = readdir($open))
  {
    if($file != '.' && $file != '..')
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
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-theme"></span>
              </a>
          </li>
          <li id="header_notification_bar" class="dropdown">
            <a href="https://easy-tk.biz/contact.php" title="Contact">
              <i class="fa fa-comments-o"></i>
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
            <a href="index.php">
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
             <a class="active" href="files.php" title="Files Manager">
              <i class="fa fa-folder-o"></i>
              <span>Files Manager</span>
              </a>
          </li>
          <li>
            <a href="https://easy-tk.biz/submitticket.php?step=2&deptid=1">
              <i class="fa fa-envelope"></i>
              <span>Support </span>
              <span class="label label-theme pull-right mail-info"></span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="https://easy-tk.biz/contact.php">
              <i class="fa fa-comments-o"></i>
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
          <div class="col-lg-12 main-chart">

			  <!-- FILEMANAGER -->
            <div class="border-head">
              <h3>Files Manager</h3>
            </div>		  
			  <div class="col-md-12 mb">
          <iframe src="../files-manager/elfinder.src.html" style="border: 0; width: 100%; height: 686px">Your browser doesn't support iFrames.</iframe>
		  </div>
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
        title: 'Bienvenue sur votre Manager',
        // (string | mandatory) the text inside the notification
        text: 'Vous pouvez y retrouver tous les fichiers de votre espace disque.',
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
