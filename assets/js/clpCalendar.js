function displayReservations(){var e=document.querySelector(".reservaciones"),t=document.getElementById("actividadesCLP");const a=document.querySelector(".calendar");var l=document.getElementById("top"),s=document.querySelector(".nav-close"),d=document.getElementById("alerta");"none"==e.style.display?(e.style.display="flex",l.style.background="var(--red)",mediaQueryMobile.matches&&s.click(),mediaQueryTablet.matches&&(l.style.height="550px"),mediaQuerySmlDesktop.matches&&(l.style.height="400px")):"flex"==e.style.display&&((mediaQueryMobile.matches||mediaQueryTablet.matches)&&(l.style.height="60px"),d.style.display="none",t.style.display="flex",a.style.display="none",e.style.display="none")}function closeReservations(){var e=document.querySelector(".reservaciones"),t=document.getElementById("top"),a=document.querySelector(".calendar"),l=document.getElementById("alerta");"flex"==e.style.display&&(e.style.display="none",(mediaQueryMobile.matches||mediaQueryTablet.matches)&&(t.style.height="60px"),mediaQueryTablet.matches&&e.classList.remove("expand"),l.style.display="none",actividadesCLP.style.display="flex",a.style.display="none")}function displayCalendar(e){var t=e,a=document.querySelector(".calendar"),l=document.getElementById("actividadesCLP"),s=document.querySelector(".reservaciones"),d=document.getElementById("top");"flex"==l.style.display&&(mediaQueryTablet.matches&&(s.classList.add("expand"),s.classList.contains("expand")&&(d.style.height="800px")),mediaQueryDesktop.matches&&(d.style.height="878px"),l.style.display="none",a.style.display="block");var r="";r+='<header class="x"><div id="close" onclick="closeCalendar()"><img src="./assets/images/icons/close-outlined-red.png" alt="white menu icon" width="25px"></div></header>',c="eventCalendar"==t?0:"tenisCalendar"==t?1:2,r+=" <h3>"+reservArray[c].calendar_name+'</h3><p class="">'+reservArray[c].calendar_paragraph+'</p><div id="autoHide" style="text-align: center;">Cargando...</div>',r+='<div><iframe src="'+reservArray[c].calendar_iframe_src+'" width="100%" height="100%" frameborder="0"></iframe></div>',r+=" </section>",document.querySelector(".calendar").innerHTML=r}function closeCalendar(){var e=document.querySelector(".calendar"),t=document.querySelector(".reservaciones"),a=document.getElementById("top");"block"==e.style.display&&(mediaQueryTablet.matches&&t.classList.remove("expand"),e.style.display="none",actividadesCLP.style.display="flex",mediaQuerySmlDesktop.matches||mediaQueryDesktop.matches?a.style.height="400px":a.style.height="550px")}