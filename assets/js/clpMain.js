const mediaQueryDesktop=window.matchMedia("(min-width: 1600px)"),mediaQuerySmlDesktop=window.matchMedia("(min-width: 1200px)"),mediaQueryTablet=window.matchMedia("(min-width: 768px)"),mediaQueryMobile=window.matchMedia("(min-width: 375px)");function appear(){var e=document.querySelector(".scroll-in-place"),t=document.getElementById("navList");"none"==t.style.display?(e.style.background="var(--red)",t.style.display="contents"):"contents"==t.style.display&&(e.style.background="revert-layer",t.style.display="none")}function displayContent(){var e=document.getElementById("navList").querySelector(".list"),t=document.querySelector(".dropdown-content");"none"==t.style.display?(t.style.display="flex",e.classList.add("top255")):"flex"==t.style.display&&(t.style.display="none",e.classList.remove("top255"))}function displayActivities(){var e=document.getElementById("navList"),t=e.querySelector(".list"),a=document.querySelector(".dropdown-content");"none"==a.style.display?(a.style.display="flex",t.classList.add("top255"),mediaQueryDesktop.matches&&(e.style.width="70%",e.style.maxWidth="1010px")):"flex"==a.style.display&&(a.style.display="none",t.classList.remove("top255"),mediaQueryDesktop.matches&&(e.style.width="55%",e.style.maxWidth="830px"))}function extendMenu(){var e=document.querySelector(".list");const t=document.getElementsByClassName("nav-link"),a=document.querySelector(".nav-open"),i=document.querySelector(".nav-close");var n=document.querySelector(".dropdown-content");e.classList.add("max"),a.style.display="none",i.style.display="block",n.classList.add("modifyMargin");for(var l=0;l<t.length;l++)t[l].classList.add("show")}function displayData(e){var t,a,i,n,l=document.getElementById("event_story"),r=document.getElementById("tenis_story"),s=document.getElementById("padel_story"),o=document.getElementById("torneos_story"),c=window.location.pathname.split("/").pop(),m=window.location.href.split("=").pop();"eventos.html"==c?(t=l,a="event_story_content",i=1,n=gallery[i].eventos,eventitem="8114486"===e?0:"1135651"===e?1:"6678302"===e?2:"2207899"===e?3:"4588551"===e?4:"3190650"===e?5:"2985797"===e?6:"1186776"===e?7:"2931160"===e?8:"5009953"===e?9:"6982182"===e?10:11):"actividades.html"==c&&"tenis"==m?(t=r,a="tenis_story_content",i=2,n=gallery[i].tenis,"5564122"===e?eventitem=0:"5516395"===e?eventitem=1:"464724"===e?eventitem=2:"723250"===e?eventitem=3:"1285519"===e?eventitem=4:"9953363"===e?eventitem=5:"7188566"===e?eventitem=6:"5509214"===e&&(eventitem=7)):"actividades.html"==c&&"padel"==m?(t=s,a="padel_story_content",i=3,n=gallery[i].padel,"5564122"===e?eventitem=0:"5516395"===e?eventitem=1:"464724"===e?eventitem=2:"723250"===e?eventitem=3:"1285519"===e?eventitem=4:"9953363"===e?eventitem=5:"7188566"===e?eventitem=6:"5509214"===e&&(eventitem=7)):"escalerillas.html"==c&&(t=o,a="torneos_story_content",i=4,n=gallery[i].torneos_de_adultos,"5564122"===e?eventitem=0:"5516395"===e?eventitem=1:"464724"===e?eventitem=2:"723250"===e?eventitem=3:"1285519"===e?eventitem=4:"9953363"===e?eventitem=5:"7188566"===e?eventitem=6:"5509214"===e&&(eventitem=7)),"none"==t.style.display?t.style.display="flex":t.style.display="none";var d="<figure>";"video"==n.list[eventitem].source?(d+='<div class="iframeContainer">',d+='<iframe  class="'+n.list[eventitem].img_class+'" scrolling="no"  src="'+n.list[eventitem].img_src_color+'" allow="autoplay; fullscreen" frameborder="0" ></iframe>',d+="</div>"):"image"==n.list[eventitem].source&&(d+='<img class="'+n.list[eventitem].img_class+'" src="'+n.list[eventitem].img_src_color+'" alt="'+n.list[eventitem].img_alt+'"> '),d+="</figure><div><h3>"+n.list[eventitem].event_name+"</h3>",d+="<p>"+n.list[eventitem].event_info+"</p></div>",document.getElementById(a).innerHTML=d}function closeData(e){var t,a=e,i=document.getElementById("event_story"),n=document.getElementById("recreational_center"),l=document.getElementById("tenis_story"),r=document.getElementById("padel_story"),s=document.getElementById("torneos_story"),o=document.getElementById("tenisInstructor_story"),c=document.getElementById("torneoOrganizer_story");"eventos.html"==page&&"eventos"==a?t=i:"eventos.html"==page?t=n:"actividades.html"==page&&"tenis"==activityId&&"tenis"==a?t=l:"actividades.html"==page&&"tenis"==activityId&&"tenis_instructor"==a?t=o:"actividades.html"==page&&"padel"==activityId?t=r:"escalerillas.html"==page&&"torneo_organizer"==a?t=c:"escalerillas.html"==page&&(t=s),"flex"==t.style.display&&(t.style.display="none")}function shortenMenu(){var e=document.querySelector(".list");const t=document.getElementsByClassName("nav-link"),a=document.querySelector(".nav-close"),i=document.querySelector(".nav-open");var n=document.querySelector(".dropdown-content");e.classList.remove("max"),e.classList.remove("top255"),a.style.display="none",i.style.display="block",n.classList.remove("modifyMargin"),n.style.display="none";for(var l=0;l<t.length;l++)t[l].classList.remove("show")}function takeATour(){var e='<h4>Llamen hoy y programen un recorrido <a href="'+socialArray[1].media_link+'">&nbsp; +56 9 7766 0445.</a></h4><p>*Precios especales para grupos mayor a 80 personas</p>';e+="<ul>";for(var t=0;t<tour.length;t++)e+='<li><figure><img src="'+tour[t].media_src+'" alt="'+tour[t].media_alt+'" />',e+="</figure></li>";e+="</ul>",document.getElementById("tour").innerHTML=e}function displayTeam(){var e="<h6>"+teamArray[0].h6+"</h6>";e+="<ul>";for(var t=0;t<teamArray[0].list.length;t++)e+='<li id="'+teamArray[0].list[t].team_id+'"><article><figure>',e+='<img src="'+teamArray[0].list[t].mem_image_src+'" alt="'+teamArray[0].list[t].mem_image_alt+'" width="100%" height="100%" /></figure>',e+="<section><h5>"+teamArray[0].list[t].mem_name+"</h5><h6><b>"+teamArray[0].list[t].mem_CLP_role+"</b><br />"+teamArray[0].list[t].mem_country+'</h6><div><a href="'+teamArray[0].list[t].mem_link+'" ><img src="'+teamArray[0].list[t].mem_socialmedia_icon+'" alt="linkedIn icon" width="25px" height="25px" class="team_icon" /></a><a href="'+teamArray[0].list[t].mem_web_page+'" style="display: none" class="web"><img src="./assets/images/icons/social-bk.png" alt="website icon" width="25px" height="25px" class="team_icon" /></a></div><br /><br />',e+="<div>"+teamArray[0].list[t].mem_pro_title+"</div>",e+="<div><p>"+teamArray[0].list[t].mem_bio+"</p></div>",e+="</section></article></li>";e+="</ul>",document.getElementById("team_gallery").innerHTML=e}function toTeams(){location.href="./equipo.html"}function toInstructor(e){var t,a=e,i=document.getElementById("tenisInstructor_story"),n=document.getElementById("torneoOrganizer_story"),l=document.getElementById("recreational_center");"tenis"==a?(contentId="tenisInstructor_story_content",t=i,main=gallery[2].tenis):"torneo"==a?(contentId="torneoOrganizer_story_content",t=n,main=gallery[4].torneos_de_adultos):"centro"==a&&(contentId="recreational_center_content",t=l,main=gallery[1].eventos),"none"==t.style.display?t.style.display="flex":t.style.display="none";var r="<figure>";r+='<div class="iframeContainer">',r+='<iframe  class="'+main.instructor[0].img_class+'" scrolling="no"  src="'+main.instructor[0].img_src_color+'" allow="autoplay; fullscreen" frameborder="0" ></iframe>',r+="</div>",r+="</figure><div><h3>"+main.instructor[0].event_name+"</h3>",r+="<p>"+main.instructor[0].event_info+"</p></div>",document.getElementById(contentId).innerHTML=r}function toEvents(){location.href="./eventos.html"}function displaySocial(){for(var e="<ul>",t=0;t<socialArray.length;t++)e+="<li>",e+='<a href="'+socialArray[t].media_link[1]+'" target="_blank"><figure>',e+='<img src="'+socialArray[t].media_src[1]+'" alt="'+socialArray[t].media_alt+'" class="social-icon"/>',e+="</figure></a></li>";e+="</ul>",document.getElementById("socialMedia").innerHTML=e}let xToast,toast=document.getElementById("toast");function showToast(){clearTimeout(xToast),toast.style.transform="translateX(0)",toast.style.minWidth="345px",toast.style.height="86px",toast.style.display="flex",xToast=setTimeout((()=>{toast.style.transform="translateX(100vw)"}),8e3)}function closeToast(){toast.style.transform="translateX(100vw)"}function displayAlert(){document.getElementById("alerta").style.display="block",document.getElementById("alerta").innerHTML='<header class="x"><div id="close" onclick="closeAlert()" style="font-size: x-large; color: var(--red); font-weight:900;"><img src="./assets/images/icons/close-outlined-red.png" alt="white menu icon" width="25px" style="margin-right:25px;">ALERTA!</div></header> <p>The reservation prototype is currently unavailable for public use. Thank you. <hr>El prototipo, de reservas, no se encuentra disponible para uso público en este momento. <em style="color:var(--red); font-style: normal; font-weight: 600;">Las reservas realizadas a través de este centro no estarán asociadas al Club Los Paltos</em>. Para realizar reservas directamente con el Club Los Paltos, comuníquese al +56 9 7766 0445. Gracias.</p>'}function closeAlert(){document.getElementById("alerta").style.display="none"}var menu='<ul class="list min">';menu+='<li style="display: inline-flex">',menu+='<img src="./assets/images/icons/arrow-left-small-white.png" alt="white menu icon" width="16px" height="16px" class="nav-icon nav-close" onclick="shortenMenu();" />',menu+='<img src="./assets/images/icons/arrow-right-small-white.png" alt="white menu icon" width="16px" height="16px" class="nav-icon nav-open" onclick="extendMenu();" />',menu+="</li>",menu+='<li><a href="'+navigationArray[0].link_href+'"><img src="'+navigationArray[0].icon_src+'" alt="'+navigationArray[0].icon_alt+'" width="35px" height="35px" class="nav-icon"/></a>',menu+='<a href="'+navigationArray[0].link_href+'" class="nav-link"><h6><em>'+navigationArray[0].link_name+"</em></h6></a>",menu+="</li>",menu+='<li class="dropCalendar">',menu+='<img src="./assets/images/icons/calendar-white.png" alt="white menu icon" width="30px" height="30px" class="nav-icon" onclick="displayAlert(); displayReservations();"/>',menu+='<h6 class="brandbtn nav-link" onclick="displayAlert();displayReservations(); "><em>Calendario</em></h6>',menu+="</li>";for(var h=2;h<navigationArray.length-4;h++)menu+='<li><a href="'+navigationArray[h].link_href+'"><img src="'+navigationArray[h].icon_src+'" alt="'+navigationArray[h].icon_alt+'" width="35px" height="35px" class="nav-icon"/></a>',menu+='<a href="'+navigationArray[h].link_href+'" class="nav-link"><h6><em>'+navigationArray[h].link_name+"</em></h6></a>",menu+="</li>";for(menu+='<li class="dropdown">',menu+='<img src="./assets/images/icons/categorize-white.png" alt="white menu icon" width="30px" height="30px" class="nav-icon" onclick="displayContent();"/>',menu+='<h6 class="dropbtn nav-link" onclick="displayActivities();"><em>Actividades</em></h6>',menu+='<div class="dropdown-content" style="display: none">',menu+="<ul>",h=4;h<navigationArray.length-2;h++)menu+='<li><a href="'+navigationArray[h].link_href+'"><img src="'+navigationArray[h].icon_src+'" alt="'+navigationArray[h].icon_alt+'" width="30px" height="30px" class="nav-icon"/></a>',menu+='<a href="'+navigationArray[h].link_href+'" class="nav-link"><h6><em>'+navigationArray[h].link_name+"</em></h6></a>",menu+="</li>";for(menu+="</ul></div></li>",h=6;h<navigationArray.length;h++)menu+='<li><a href="'+navigationArray[h].link_href+'"><img src="'+navigationArray[h].icon_src+'" alt="'+navigationArray[h].icon_alt+'" width="30px" height="30px" class="nav-icon"/></a>',menu+='<a href="'+navigationArray[h].link_href+'" class="nav-link"><h6><em>'+navigationArray[h].link_name+"</em></h6></a>",menu+="</li>";menu+="</ul>",document.getElementById("navList").innerHTML=menu;for(var reserva="",r=0;r<reservArray.length;r++)reserva+="<li><article>",reserva+='<figure id="'+reservArray[r].calendar_id+'" onclick="displayCalendar(this.id)">',reserva+='<img src="'+reservArray[r].calendar_icon_src+'" alt="'+reservArray[r].calendar_icon_alt+'">',reserva+="<figcaption><h5>"+reservArray[r].calendar_name+"</h5></figcaption>",reserva+="</figure></article></li>";document.getElementById("actividadesCLP").innerHTML=reserva;const navMenu=document.querySelector(".scroll-in-place");if((window.onscroll=function(){window.scrollY>100?navMenu.classList.add("nav-scroll"):navMenu.classList.remove("nav-scroll")})(),mediaQueryTablet.matches){const e=document.getElementsByClassName("nav-icon"),t=document.getElementsByClassName("nav-link");for(var i=0;i<e.length;i++)e[i].style.display="none";for(var p=0;p<t.length;p++)t[p].style.display="block"}for(var activity="",a=0;a<activities.length;a++)activity+='<li><figure><a href="'+activities[a].media_link+'">',activity+='<img src="'+activities[a].media_src+'" alt="'+activities[a].media_alt+'" />',activity+='</a><figcaption><a href="'+activities[a].media_link+'"><h5>'+activities[a].media_cap+"</h5></a></figcaption>",activity+="</figure></li>";document.getElementById("sports").innerHTML=activity;var locate='<figure id="logo">';locate+='<a href="./index#top"><img src="'+company[0].logo_info[0].img_src[0]+'" alt="logo" width="40px" height="40px" /></a></figure>',locate+="<div><p><em><b>"+company[0].company_name+"</b></em></p>",locate+="<address>"+company[0].company_add+"</address>",locate+='<div><a href="'+socialArray[1].media_link+'"><p><em><b>'+company[0].company_phone+"</b></em></p></a></div></div>",document.getElementById("location").innerHTML=locate;var clp="<ul>";if(mediaQueryMobile.matches){for(var k=0;k<socialArray.length;k++)clp+="<li>",clp+='<a href="'+socialArray[k].media_link+'" target="_blank"><figure>',clp+='<img src="'+socialArray[k].media_src[0]+'" alt="'+socialArray[k].media_alt+'" class="social-icon"/>',clp+="</figure></a></li>";clp+="</ul>",document.getElementById("socialM").innerHTML=clp}if(mediaQueryTablet.matches){for(clp="<ul>",k=0;k<socialArray.length;k++)clp+="<li>",clp+='<a href="'+socialArray[k].media_link+'" target="_blank"><figure>',clp+='<img src="'+socialArray[k].media_src[1]+'" alt="'+socialArray[k].media_alt+'" class="social-icon"/>',clp+="</figure></a></li>";clp+="</ul>",document.getElementById("socialM").innerHTML=clp}