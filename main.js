  var body = document.getElementsByTagName("body")[0];
  var head = document.getElementsByTagName("head")[0];
  var container = document.createElement("div");
  container.classList.add("envia");
  body.appendChild(container);

  var telefon = document.createElement("input");
  telefon.setAttribute("placeholder", "Telèfon");
  var msg = document.createElement("textarea");
  msg.setAttribute("placeholder", "Missatge");
  var btn = document.createElement("button");
  btn.innerHTML = "CARREGANT...";
  container.appendChild(telefon);
  container.appendChild(msg);
  container.appendChild(btn);

  function enviaMissatge(to, body) {
    var msg = Store.Msg.models[0];
    msg.id.id = idd();
    msg.id.remote = "34" + to + "@c.us";
    msg.id.fromMe = true;
    msg.type = "chat";
    msg.body = body;
    msg.to = "34" + to + "@c.us";
    msg.t = Math.ceil(new Date().getTime() / 1000);
    Store.Msg.send(msg);
  };
  var idd = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  var int = setInterval(function() {
      if (document.getElementById('side') != null) {
        window.setTimeout(function() {
          btn.innerHTML = "ENVIAR";
          btn.addEventListener("click", function() {
            enviaMissatge(telefon.value, msg.value);
          });
        }, 500);
        clearInterval(int);
      }
    },
    200);