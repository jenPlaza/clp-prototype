const relativePaths = window.location.pathname.split('/');
var page = relativePaths.pop();
const xId = window.location.href.split('=');
var activityId = xId.pop();

var main;
var id;
var click;
var heading;

if (page == 'actividades.html' && activityId == 'tenis') {
  main = gallery[2].tenis;
  id = 'tenis_gallery';
  heading = 'tenis';
  click = 'displayData(this.id)';
} else if (page == 'actividades.html' && activityId == 'padel') {
  main = gallery[3].padel;
  id = 'padel_gallery';
  heading = 'padel';
  click = 'displayData(this.id)';
} else if (page == 'actividades.html' && activityId == 'yoga') {
  main = gallery[4].yoga;
  id = 'yoga_gallery';
  heading = 'yoga';
  click = 'displayData(this.id)';
}

var heading =
  '<h1 id="activityHeading" style="text-transform: capitalize;" class="' +
  heading +
  '">' +
  heading +
  '</h1>';
document.getElementById('activityHeading').innerHTML = heading;

var activity = '<main id="event_gallery" class="grid">';
activity += '<h6>' + main.h6 + '</h6>';
activity += '<ul>';
for (let i = 0; i < main.list.length; i++) {
  activity +=
    '<li><figure id="' + main.list[i].link_id + '" onclick="' + click + ';">';
  activity +=
    '<img src="' +
    main.list[i].img_src_bk +
    '" alt="' +
    main.list[i].img_alt +
    '"';
  activity += '</figure></li>';
}
activity += '</ul>';
//index item
activity +=
  '<div id="' + main.activities[0].story_id + '" style="display: none">';
activity +=
  '<header><figure id="' +
  main.activities[0].media_id +
  '" onclick="closeData(this.id);">';
activity +=
  '<img src="./assets/images/icons/close-white.png" alt="close icon" width="25px" height="25px"/></figure></header>';
activity += '<div id="' + main.activities[0].story_content_id + '"><figure>';
activity +=
  '<img src="./assets/images/galleria/eventos/color/Event3.png" alt="event image" /></figure>';
activity += '<h3>El Evento 3</h3>';
activity +=
  '<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>';
activity += '</div></div>';
//Instructor
activity +=
  '<div id="' + main.activities[1].story_id + '" style="display: none">';
activity +=
  '<header><figure id="' +
  main.activities[1].media_id +
  '" onclick="closeData(this.id);">';
activity +=
  '<img src="./assets/images/icons/close-white.png" alt="close icon" width="25px" height="25px"/></figure></header>';
activity += '<div id="' + main.activities[1].story_content_id + '"><figure>';
activity +=
  '<img src="./assets/images/galleria/eventos/color/Event3.png" alt="event image" /></figure>';
activity += '<h3>El Evento 3</h3>';
activity +=
  '<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>';
activity += '</div></div>';

document.getElementById('activities').innerHTML = activity;
