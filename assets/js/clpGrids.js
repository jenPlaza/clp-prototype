//index Gallery
console.log(window.location.pathname);
console.log(window.location.href);
//-----------------pathname-----------------
// variable needs to be a const; in order, or the pop() to work (it will return the last element of the array)
const relativePath = window.location.pathname.split('/');
console.log(relativePath);
var page = relativePath.pop();
console.log(page); //index.html
//testing
//console.log('h4: ', gallery[0].home.h6);
//console.log('main: ', gallery[0].home.list.length);
//-----------------href-----------------
const xxx = window.location.href.split('=');
console.log(xxx);
var activityId = xxx.pop();
console.log(activityId);
var main;
var id;
var click;

if (page == 'index.html') {
  main = gallery[0].home;
  id = 'home_gallery';
  click = '';
} else if (page == 'acontecimientos.html') {
  main = gallery[1].eventos;
  id = 'event_gallery';
  click = 'displayData(this.id)';
}

//-------------------------------------------for Neocities
// if (page == '') {
//   main = gallery[0].home;
//   id = 'home_gallery';
// } else if (page == 'acontecimientos') {
//   main = gallery[1].eventos;
//   id = 'event_gallery';
// }
//----------------------------------------------

var newGrid = '<h6>' + main.h6 + '</h6>';
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

document.getElementById(id).innerHTML = newGrid;
