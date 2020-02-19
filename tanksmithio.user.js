// ==UserScript==
// @name         Tanksmith.io AIMBOT - Tanksmithio Hacks - Best Tanksmith Cheat 2019 to 2020
// @description  Tanksmithio Mods Features: Aimbot, Firebot, Speed Hack, Auto Heal, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/tanksmithio.user.js
// @downloadURL  https://iomods.org/mods/tanksmithio.user.js
// @match        *://tanksmith.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==

//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Aimbot","Firebot","Speed Hack","Auto Heal","Auto Skin","Auto Fire","Anti Lag","Anti Ads","Unlock Weapon","Level Hack","Auto Spawn"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$("head").append('<script src="https://apis.google.com/js/platform.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
$("#middle-column").append('<div style="font-size:13px;" class="card"><div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div><div id="serverip"></div><div id="partyid"></div><hr>ESC Key - <span class="minor">Kill Yourself</span></br>R Key - <span class="minor">Respawn</span></br>E Key - <span class="minor">Auto Fire</span></br>P Key - <span class="minor">Create Party</span></br>O Key - <span class="minor">Join Party</span></br></br><a id="readymi"><i class="fa fa-refresh"></i> Refresh Online Players</a></br><a id="serverb"><i class="fa fa-server"></i> Find New Server</a></br><a id="party-creater"><i class="fa fa-users"></i> Create Party</a></br><a id="party-joiner"><i class="fa fa-user-plus"></i> Join Party</a></div>');
$('#help').append('<div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$("#links-bar").html('<a href="https://iogameslist.org/" target="_blank">More .io Games</a> | <a href="https://www.reddit.com/r/tanksmithio/" target="_blank">Reddit</a> | <a href="changelog.txt" target="_blank">Changelog</a> | <a href="mailto:haxlifeforum@gmail.com" target="_blank">Contact</a> | <a href="privacy.txt" target="_blank">Privacy</a> | <a href="https://facebook.com/slitherecom" target="_blank"><div id="logo" class="logo baloo" style="display:inline;"><span class="ionorange">FACEBOOK</span> PAGE</div></a>');
$("#title").html('<h1 id="title" style="font-size:100px;"><a style="font-size:20px; color:white;" href="https://zombsroyaleio.org/" target="_blank">(bounty click)</a><a style="color:white;" href="https://goo.gl/XCNoJL/" target="_blank">Tank<span style="color:#e0e0e0;">smith</span><span style="font-size:70px;">.io</span> </a><a style="font-size:20px; color:white;" href="https://goo.gl/Lb1GKp/" target="_blank">(bonus click)</a></h1></a>');
$('#social').append('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');


$('#apps').css({
    'background-color': 'black',
	'position': 'absolute',
	'top': '50px',
	'left': '5px',
	'bottom': '92px',
	'height': '200px',
	'width': 'auto' /*Comment when adding iOS*/
});
$('.card').css({
	'font-size': '18px',
    'text-align': 'left'
});

	var youtubers = ["UCy6xGaMhm74YeHMDGgEr7kg", "UCyd2FRDOcS4gS-19JNQnkOA"];
	var youtuber = youtubers[Math.floor(Math.random() * youtubers.length)];
	var html = "<script src=\"https://apis.google.com/js/platform.js\"></script><div style=\"padding-bottom:8px;\">Featured YouTuber</div><div class=\"g-ytsubscribe\" data-channel";
	if (youtuber.length == 24) {
		html += "id";
	}
	html += "=\"" + youtuber + "\" data-layout=\"full\" data-count=\"default\"></div>";
	g("youtuber").innerHTML = html;

    function g(id) {
        return document.getElementById(id);
    }

    g("party-creater").onclick = function() {
        window.location.hash = party;
        prompt("Copy and send this link", location.origin + location.pathname + location.hash);
    }

    g("party-joiner").onclick = function() {
        var data = prompt("Enter party link or code");
		if (data != null && data.length > 0) {
	        data = data.split("#");
	        if (data.length > 1) {
	            ip = data[1];
	        } else {
	            ip = data[0];
	        }
			if (/[0-9A-F]{6}$/i.test(ip)) {
				ip = decodePartyLink(ip);
		        wantParty = true;
		        forceDisconnect();
			}
		}
    }

    g("serverb").onclick = function() {
		if (!killedTab) {
	    	console.log("Finding a server...");

			// TODO: fallback
			// var servers = ["45.33.57.189", "172.104.246.238"];
			// if (servers.length > 0) {
			// 	ip = servers[Math.floor(Math.random() * servers.length)];
			// 	console.log(ip);
			// 	connectToIP();
			// }

	    	var x = new XMLHttpRequest();
	    	x.onreadystatechange = function() {
	    		if (this.readyState == 4 && this.status == 200) {
	    			var data = JSON.parse(x.responseText);
	    			if (!data.error) {
	    				serverFound = true;
	                    ip = data.ip;
	                    party = data.link;
						g("version").innerText = "v" + data.version;
                        g("count").innerHTML = data.players.toLocaleString("en-US") + " Players Online - Result by <a style=\"color:yellow;\"href=\"https://goo.gl/XCNoJL\" target=\"blank\">SLITHERE.COM</a>";
                        g("serverip").innerHTML = "Server IP: " + ip;
                        g("partyid").innerHTML = "Party ID: " + party;
						console.log("Region: " + data.region);
						eu = data.eu;
	                    loadScript(data.version);
	    			} else {
	    				console.log("Error fetching server from load balancer");
						// Raven.captureException("Error fetching server from load balancer: " + JSON.stringify(data));
	    			}
	    		};
	    	};

	    	x.open("GET", "http://" + loadBalancer + ":8001/find/", true);
	    	x.send();
	    	setTimeout(serverTimeout, 3000);
		}
    }
    window.onload = function() {
        	gameScale = 0.1;
	                    g("serverip").innerHTML = "Server IP: " + ip;
        g("partyid").innerHTML = "Party ID: " + party;
                g("loading").innerHTML = "<a style=\"color:black\" href=\"https://goo.gl/XCNoJL\" target=\"_blank\">CLICK HERE FOR BONUS!</a>";
    }
    g("readymi").onclick = function() {
var x = new XMLHttpRequest();
    	x.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
    			var data = JSON.parse(x.responseText);
                g("count").innerHTML = data.players + " Players Online - Result by <a style=\"color:yellow;\"href=\"https://goo.gl/XCNoJL\" target=\"blank\">SLITHERE.COM</a>";
				eu = data.eu;
    		};
    	};

    	x.open("GET", "http://" + loadBalancer + ":8001/players/", true);
    	x.send();
    }

    $(document).keyup(function(e) {
           if (e.keyCode == 27){
       io.close();
           }
    });

document.addEventListener('keypress', (e)=>{
if (e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'name') {
        window.location.hash = party;
        prompt("Copy and send this link", location.origin + location.pathname + location.hash);
   } else if (e.keyCode == 111 && document.activeElement.id.toLowerCase() !== 'name') {
        var data = prompt("Enter party link or code");
		if (data != null && data.length > 0) {
	        data = data.split("#");
	        if (data.length > 1) {
	            ip = data[1];
	        } else {
	            ip = data[0];
	        }
			if (/[0-9A-F]{6}$/i.test(ip)) {
				ip = decodePartyLink(ip);
		        wantParty = true;
		        forceDisconnect();
			}
		}
   } else if (e.keyCode == 114 && document.activeElement.id.toLowerCase() !== 'name') {
       connectToIP();
               setTimeout(function(){continueToPlay();}, 3000);
   } else if (e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'name') {
       var x = new XMLHttpRequest();
    	x.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
    			var data = JSON.parse(x.responseText);
                g("count").innerHTML = data.players + " Players Online - Result by <a style=\"color:yellow;\"href=\"https://goo.gl/XCNoJL\" target=\"blank\">SLITHERE.COM</a>";
				eu = data.eu;
    		};
    	};

    	x.open("GET", "http://" + loadBalancer + ":8001/players/", true);
    	x.send();
            screen.width = 4000;
            screen.height = 4000;
            window.gameScale = 0.1;
       scale(0.1)
   }
});



//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
$('#overlay').css('background-color',''+changecolor+'');
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
                $("#overlay").css("background-color",selectedcolor);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}
