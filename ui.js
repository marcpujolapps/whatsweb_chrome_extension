function afegeixScript(link) {
  var scr = document.createElement("script");
  scr.type = "text/javascript";
  scr.src = link;
  (document.head || document.body || document.documentElement).appendChild(scr);
}

afegeixScript(chrome.extension.getURL("main.js"));