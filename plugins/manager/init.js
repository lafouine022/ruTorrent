
// Attachez la page de l'onglet "Manager" aux onglets de rutorrent
plugin.attachPageToTabs(
  $('<div>').attr("id", "manager").addClass("table_tab stable").get(0),
  "Manager de fichiers",
  "lcont"
);

// Ajoutez du contenu en dessous du tableau

var contentBelowTable = document.createElement("div");
contentBelowTable.innerHTML = '<iframe src="./plugins/manager/tinyfilemanager.php" id="id_iframe" width="100%" height="350px" frameborder="0" scrolling="auto"></iframe>';
document.getElementById("manager").appendChild(contentBelowTable);


if (theWebUI.theme) {
  if (theWebUI.theme == 'Oblivion') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
  } if (theWebUI.theme == 'QuickBox-Dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
  }
    if (theWebUI.theme == 'Dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
  }
    if (theWebUI.theme == 'DarkBetter'){
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
  } if (theWebUI.theme == 'MaterialDesign'){
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
  } if (theWebUI.theme == 'Blue'){
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Supprimer le cookie theme clair
  } if (theWebUI.theme == 'Excel'){
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Supprimer le cookie theme clair
  }
  }else {
   document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Supprimer le cookie s'il existe
}

/*
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.cookie = "theme=dark; path=/"; // Définir un cookie pour le thème sombre
} else {
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Supprimer le cookie s'il existe
}

*/


 
