<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="Reboot Rutorrent"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Merci de vous authentifié';
    exit;
} else {
    $user = $_SERVER['PHP_AUTH_USER'];
shell_exec('sudo rm  /home/'.$user.'/.sesssion/rtorrent.lock');
sleep(1);
shell_exec('sudo systemctl restart '.$user.'-rtorrent');
  header('location:../');
  exit();
}
?>
