//index Gallery
//console.log(window.location.pathname);
//console.log(window.location.href);
//-----------------pathname-----------------
// variable needs to be a const; in order, or the pop() to work (it will return the last element of the array)
const relativePath = window.location.pathname.split('/');
//console.log(relativePath);
var page = relativePath.pop();
//console.log(page); //index
//testing
//console.log('h4: ', gallery[0].home.h6);
//console.log('main: ', gallery[0].home.list.length);
//-----------------href-----------------
const xxx = window.location.href.split('=');
//console.log(xxx);
var activityId = xxx.pop();
//console.log(activityId);
var main;
var ninos;
var id;
var click;

if (page == 'index.html') {
  main = gallery[0].home;
  id = 'home_gallery';
  click = '';
} else if (page == 'eventos.html') {
  main = gallery[1].eventos;
  id = 'event_gallery';
  click = 'displayData(this.id)';
} else if (page == 'escalerillas.html') {
  main = gallery[4].torneos_de_adultos;
  id = 'torneos_gallery';
  click = 'displayData(this.id)';
}

var newGrid = '<div>' + main.h6 + '</div>';
// notification bar
newGrid += '<div class="notification"><div id="toast_content"><ul>';
for (var n = 0; n < main.notifications.length; n++) {
  newGrid +=
    '<li><img  src="./assets/images/icons/tennis.gif" alt="target icon" width="auto" height="30px"/><p>' +
    main.notifications[n] +
    '</p></li>';
}
newGrid += '</ul></div></div>'; // bar end
newGrid += '<ul>';
for (let i = 0; i < main.list.length; i++) {
  newGrid +=
    '<li><figure id="' + main.list[i].link_id + '" onclick="' + click + ';">';
  newGrid +=
    '<img src="' +
    main.list[i].img_src_bk +
    '" alt="' +
    main.list[i].img_alt +
    '"';
  newGrid += '</figure></li>';
}
newGrid += '</ul>';

//index item
newGrid +=
  '<div id="' + main.activities[0].story_id + '" style="display: none">';
newGrid +=
  '<header><figure id="' +
  main.activities[0].media_id +
  '" onclick="closeData(this.id);">';
newGrid +=
  '<img src="./assets/images/icons/close-outlined-red.png" alt="close icon" width="50px" height="50px"/></figure></header>';
newGrid += '<div id="' + main.activities[0].story_content_id + '"><figure>';
newGrid +=
  '<img src="./assets/images/galleria/eventos/color/Event3.png" alt="event image" /></figure>';
newGrid += '<h3>El Evento 3</h3>';
newGrid +=
  '<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>';
newGrid += '</div></div>';
//Instructor
newGrid +=
  '<div id="' + main.activities[1].story_id + '" style="display: none">';
newGrid +=
  '<header><figure id="' +
  main.activities[1].media_id +
  '" onclick="closeData(this.id);">';
newGrid +=
  '<img src="./assets/images/icons/close-outlined-red.png" alt="close icon" width="50px" height="50px"/></figure></header>';
newGrid += '<div id="' + main.activities[1].story_content_id + '"><figure>';
newGrid +=
  '<img src="./assets/images/galleria/eventos/color/Event3.png" alt="event image" /></figure>';
newGrid += '<h3>El Evento 3</h3>';
newGrid +=
  '<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>';
newGrid += '</div></div>';

document.getElementById(id).innerHTML = newGrid;
