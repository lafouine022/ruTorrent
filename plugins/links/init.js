/* URL de  Subsonic sur le serveur */
var url = '/rutorrent/seedbox-info/';
var url2 = '/rutorrent/seedbox-info/reboot.php';

plugin.loadLang(true);
plugin.loadCSS("linksub");

plugin.onLangLoaded = function()
{
  this.addButtonToToolbar("linksubsonic", theUILang.linksubsonic, "window.open('"+url+"')", "help");
  this.addButtonToToolbar("linksubboot", theUILang.linksubboot, "window.location.href = '" + url2 + "'", "help");
  this.addSeparatorToToolbar("help");
}
