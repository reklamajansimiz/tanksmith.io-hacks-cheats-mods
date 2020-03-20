// ==UserScript==
// @name         Tanksmith.io AIMBOT - Tanksmithio Hacks - Best Tanksmith Cheat 2019 to 2020
// @description  Tanksmithio Mods Features: Aimbot, Firebot, Speed Hack, Auto Heal, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.1
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.29/howler.min.js
// @icon         https://io-mods.com/mods/iomods.png
// @updateURL    https://io-mods.com/mods/tanksmithio.user.js
// @downloadURL  https://io-mods.com/mods/tanksmithio.user.js
// @grant        GM_setValue
// @grant        GM_getValue
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
     f5: "Show Status",
     f6: "Full Screen",
	 f7: "Screen Shot",
	 f8: "Key Sounds",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 17px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<br><a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a>'
 };

//degisenkisimlar
$("head").append('<script src="https://apis.google.com/js/platform.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
$("#middle-column").append('<div style="font-size:13px;" class="card"><div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div><div id="serverip"></div><div id="partyid"></div><hr>ESC Key - <span class="minor">Kill Yourself</span></br>R Key - <span class="minor">Respawn</span></br>E Key - <span class="minor">Auto Fire</span></br>P Key - <span class="minor">Create Party</span></br>O Key - <span class="minor">Join Party</span></br></br><a id="readymi"><i class="fa fa-refresh"></i> Refresh Online Players</a></br><a id="serverb"><i class="fa fa-server"></i> Find New Server</a></br><a id="party-creater"><i class="fa fa-users"></i> Create Party</a></br><a id="party-joiner"><i class="fa fa-user-plus"></i> Join Party</a></div>');
$('#help').append('<div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$("#links-bar").html('<a href="https://iogameslist.org/" target="_blank">More .io Games</a> | <a href="https://www.reddit.com/r/tanksmithio/" target="_blank">Reddit</a> | <a href="changelog.txt" target="_blank">Changelog</a> | <a href="mailto:haxlifeforum@gmail.com" target="_blank">Contact</a> | <a href="privacy.txt" target="_blank">Privacy</a> | <a href="https://facebook.com/slitherecom" target="_blank"><div id="logo" class="logo baloo" style="display:inline;"><span class="ionorange">FACEBOOK</span> PAGE</div></a>');
$("#title").html('<h1 id="title" style="font-size:100px;"><a style="font-size:20px; color:white;" href="https://zombsroyaleio.org/" target="_blank">(bounty click)</a><a style="color:white;" href="https://goo.gl/XCNoJL/" target="_blank">Tank<span style="color:#e0e0e0;">smith</span><span style="font-size:70px;">.io</span> </a><a style="font-size:20px; color:white;" href="https://goo.gl/Lb1GKp/" target="_blank">(bonus click)</a></h1></a>');
$('#social').append('<div class="list1"></div>');
$("#canvas").css({"cursor": "auto"});

//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+this.st.f5+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="ping" onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option1').on('click', '.ping', function() { showfpsping(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+this.st.f6+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fullscreen" onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+this.st.f7+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'button\' style="height:13px;width:14px;background-color:gray;" class="bonushack" onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option2').on('click', '.fullscreen', function() { showfullscreen(); });
$('.option2').on('click', '.bonushack', function() { showbonushack(); });
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+this.st.f8+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="gamesounder" onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option3').on('click', '.gamesounder', function() { if($(this).is(":checked")) { ingamesounds(); } else { ofgamesounds(); } });
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="150" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min:70-Max:150)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>');

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


  //font styler
const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = ["𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙","𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡","𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕","𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉","𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ","𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅","𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵","𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩","ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ","🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩","𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ","ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ","ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ","ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ","αв¢∂єfgнιנкℓмиσρqяѕтυνωχуzαв¢∂єfgнιנкℓмиσρqяѕтυνωχуz","αвcdeғɢнιjĸlмɴopqrѕтυvwхyzαвcdeғɢнιjĸlмɴopqrѕтυvwхyz","αвcdєfghíjklmnσpqrstuvwхчzαвcdєfghíjklmnσpqrstuvwхчz","卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
];
const styles = [
"Default (Name Font)","𝐁𝐨𝐥𝐝","𝘐𝘵𝘢𝘭𝘪𝘤","𝘽𝙤𝙡𝙙+𝙄𝙩𝙖𝙡𝙞𝙘","𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎","𝔉𝔯𝔞𝔨𝔱𝔲𝔯","𝕭𝖔𝖑𝖉+𝕱𝖗𝖆𝖐𝖙𝖚𝖗","𝐻𝒶𝓃𝒹","𝓑𝓸𝓵𝓭+𝓗𝓪𝓷𝓭","Ⓑⓤⓑⓑⓛⓔⓢ","🅑🅛🅐🅒🅚 🅑🅤🅑🅑🅛🅔🅢","𝔻𝕠𝕦𝕓𝕝𝕖","Ｔｈｉｎ","sᴍᴀʟʟ ᴄᴀᴘs","ᔕᑭEᑕIᗩᒪ","αитяσρвια","ѕмooтнer","pαrαnσrmαl","千卂几匚ㄚ"
];

var styleSelect = document.createElement("select");
styleSelect.style.backgroundColor = "#1a1a1a";
styleSelect.style.color = "white";
styleSelect.style.marginTop  = "40px";
styleSelect.id = "fontselecter";
for (var k = 0; k < styles.length; k++) {
    var option = document.createElement("option");
    option.text = styles[k];
    styleSelect.add(option);
}

document.getElementById("middle-column").appendChild(styleSelect);

styleSelect.selectedIndex = GM_getValue("style");
styleSelect.onchange = function() { GM_setValue("style", styleSelect.selectedIndex); }

var chatInput = document.getElementById("name");
chatInput.onkeyup = function() {
    if (styleSelect.selectedIndex !== 0 & !chatInput.value.startsWith('/') | chatInput.value.startsWith("/p ")) {
        var fancyText = (chatInput.value.startsWith("/p ")) ? chatInput.value.substr(3) : chatInput.value;
        for (var k = 0; k < 52; k++) {
            var regex = new RegExp(abc[k], 'g');
            fancyText = fancyText.replace(regex, Array.from(letters[styleSelect.selectedIndex - 1])[k]);
        }
        chatInput.value = (chatInput.value.startsWith("/p ")) ? "/p " + fancyText : fancyText;
    }
}
//font styler

//cursor styler
const stycross = [
    "Default (Cursor)","Default (Red)","Default (Blue)","Default (Green)","Default (Yellow)","Default (Purple)","Middle Finger","Corona Virus (Red)","Corona Virus (Blue)","Minecraft Sword","Minecraft Pickaxe","Minecraft Axe","Reddot","Crossdot","Smalldot","Crosshair","Crosshair Maxi","Crosshair Mini","Crosshair Spray","Crosshair Sniper","Crosshair Bazooka","Crosshair Alien","Crosshair (Black)","Crosshair (Red)","Crosshair (Blue)","Crosshair (Green)","Crosshair (Gold)","Crosshair (Gold+)","Crosshair (Silver)","CrosshairX (Black)","CrosshairX (Red)","CrosshairX (Blue)","CrosshairX (Green)","CrosshairL (Red)","CrosshairL (Blue)","CrosshairL (Green)","CrosshairL (Yellow)","CrosshairL (Purple)",
];

var stylerSelect = document.createElement("select");
stylerSelect.style.backgroundColor = "#1a1a1a";
stylerSelect.style.color = "white";
stylerSelect.id = "cursor-game";
stylerSelect.style.marginBottom  = "0px";
for (var mn = 0; mn < stycross.length; mn++) {
    var optioner = document.createElement("option");
    optioner.text = stycross[mn];
    if(stycross[mn] == "Default (Cursor)") { optioner.value="auto"; }
    if(stycross[mn] == "Default (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25204'), auto"; }
    if(stycross[mn] == "Default (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25209'), auto"; }
    if(stycross[mn] == "Default (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25203'), auto"; }
    if(stycross[mn] == "Default (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25211'), auto"; }
    if(stycross[mn] == "Default (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25208'), auto"; }
    if(stycross[mn] == "Middle Finger") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=23291'), auto"; }
    if(stycross[mn] == "Corona Virus (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134748'), auto"; }
    if(stycross[mn] == "Corona Virus (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134662'), auto"; }
    if(stycross[mn] == "Minecraft Sword") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129896'), auto"; }
    if(stycross[mn] == "Minecraft Pickaxe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129911'), auto"; }
    if(stycross[mn] == "Minecraft Axe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129903'), auto"; }
    if(stycross[mn] == "Crosshair Maxi") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30924'), auto"; }
    if(stycross[mn] == "Crosshair Mini") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30925'), auto"; }
    if(stycross[mn] == "Crosshair Spray") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31245'), auto"; }
    if(stycross[mn] == "Crosshair Sniper") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31250'), auto"; }
    if(stycross[mn] == "Crosshair Bazooka") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31248'), auto";}
    if(stycross[mn] == "CrosshairX (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42279'), auto"; }
    if(stycross[mn] == "CrosshairX (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42285'), auto"; }
    if(stycross[mn] == "CrosshairX (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42287'), auto"; }
    if(stycross[mn] == "CrosshairX (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42286'), auto"; }
    if(stycross[mn] == "Crosshair Alien") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42281'), auto"; }
    if(stycross[mn] == "Crosshair (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42280'), auto"; }
    if(stycross[mn] == "Crosshair (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42288'), auto"; }
    if(stycross[mn] == "Crosshair (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42290'), auto"; }
    if(stycross[mn] == "Crosshair (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42289'), auto"; }
    if(stycross[mn] == "Crosshair (Gold)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97792'), auto"; }
    if(stycross[mn] == "Crosshair (Gold+)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97801'), auto"; }
    if(stycross[mn] == "Crosshair (Silver)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=99159'), auto"; }
    if(stycross[mn] == "Reddot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47970'), auto"; }
    if(stycross[mn] == "Crossdot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47974'), auto"; }
    if(stycross[mn] == "Smalldot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47971'), auto"; }
    if(stycross[mn] == "CrosshairL (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42292'), auto"; }
    if(stycross[mn] == "CrosshairL (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42294'), auto"; }
    if(stycross[mn] == "CrosshairL (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42293'), auto"; }
    if(stycross[mn] == "CrosshairL (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42300'), auto"; }
    if(stycross[mn] == "CrosshairL (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42295'), auto"; }
    stylerSelect.add(optioner);
}

document.getElementById("middle-column").appendChild(stylerSelect);

stylerSelect.onchange = function() {
    var links = ["https://slithere.com","https://krunkerio.org","https://krunkerio.net","https://iomods.org","https://skribbl-io.net","https://diepioplay.com","https://diepioplay.org","https://mope-io.net","https://mopeiogame.com","https://wormax.org","https://shellshockio.org","https://survivio.net","https://zombsroyaleio.org","https://moomooioplay.com","https://iogameslist.org","https://krunkerioplay.com","https://bonk-io.net", "http://io-oyunlar.com","https://wormax2io.com","https://wormate-io.net","https://buildroyaleio.org","https://paperiogame.com","https://garticio.org","https://devastioplay.com","https://splixio.net"];
	links.sort(function(a, b){return 0.5 - Math.random()});

var cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
var cursorRefresh = function() { document.getElementById("canvas").style.cursor = cursorStyle; };
window.onmouseup = function() { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); };
window.onmousedown = function() { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); };
window.onmousemove = function() { if ( document.getElementById("canvas").style.cursor != cursorStyle ) { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); } };
    document.body.style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
    document.getElementById("canvas").style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
    window.open(""+links[0]+"", null, `location=yes,scrollbars=yes,status=yes,height=570,width=520`);
}
//cursor styler

//soundmod
		var keyData = {
			q: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/bubbles.mp3']
				}),
				color: '#1abc9c'
			},
			w: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/clay.mp3']
				}),
				color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/confetti.mp3']
				}),
				color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/corona.mp3']
				}),
				color: '#9b59b6'
			},
				t: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/dotted-spiral.mp3']
				}),
				color: '#34495e'
			},
			y: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-1.mp3']
				}),
				color: '#16a085'
			},
			u: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-2.mp3']
				}),
				color: '#27ae60'
			},
			i: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					urls: ['https://io-mods.com/sounds/glimmer.mp3']
				}),
				color: '#8e44ad'
			},
			p: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			},
			a: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-1.mp3']
				}),
				color: '#e67e22'
			},
				d: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-2.mp3']
				}),
				color: '#e74c3c'
			},
			f: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-1.mp3']
				}),
				color: '#95a5a6'
			},
			g: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-3.mp3']
				}),
				color: '#d35400'
			},
			j: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/splits.mp3']
				}),
				color: '#1abc9c'
			},
			k: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/squiggle.mp3']
				}),
				color: '#2ecc71'
			},
			l: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/suspension.mp3']
				}),
				color: '#9b59b6'
			},
			x: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/timer.mp3']
				}),
				color: '#34495e'
			},
			c: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/veil.mp3']
				}),
				color: '#27ae60'
			},
			b: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
                urls: ['https://io-mods.com/sounds/zig-zag.mp3']
				}),
				color: '#8e44ad'
			},
			m: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			}
		}
		window.onkeydown = function(event) {
            if(gamesounds==true) {
			if(keyData[event.key]){
				keyData[event.key].sound.play();
			}
            }
		}

function ingamesounds() {
    gamesounds=true;
}
function ofgamesounds() {
    gamesounds=false;
}
//soundmod

function showbonushack() {
var firstDot = window.location.hostname.split('.').slice(-2).join('.');
html2canvas(document.body, {
onrendered: function(canvas)
{
canvas.toBlob(function(blob) {
saveAs(blob, ""+firstDot+"-ss.jpg");
});
}
});

}


function showfpsping() {
    javascript:(function loops(){
    var script=document.createElement('script');
    script.onload=function(){
    var stats=new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop(){
    stats.update();
    requestAnimationFrame(loop)});
    };
    script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);
})()
}

function showfullscreen() {
//Full screen
document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
      if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
//end
}


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
