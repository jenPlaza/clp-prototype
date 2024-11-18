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
var ninos;
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
} else if (page == 'torneos.html') {
  main = gallery[5].torneos_de_adultos;
  id = 'torneos_gallery';
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

function displayNinos(main, id_ninos) {
  var ninosGrid =
    '<h2 style="color:var(--secondary-color-text)">Para Los Niños</h2>';
  ninosGrid += '<h6>' + gallery[6].torneos_de_ninos.h6 + '</h6>';
  ninosGrid += '<ul>';
  for (let i = 0; i < gallery[6].torneos_de_ninos.list.length; i++) {
    ninosGrid +=
      '<li><figure id="' +
      gallery[6].torneos_de_ninos.list[i].link_id +
      '" onclick="displayNinoTorneos(this.id);">';
    ninosGrid +=
      '<img src="' +
      gallery[6].torneos_de_ninos.list[i].img_src_bk +
      '" alt="' +
      gallery[6].torneos_de_ninos.list[i].img_alt +
      '"';
    ninosGrid += '</figure></li>';
  }
  ninosGrid += '</ul>';

  document.getElementById('torneos_de_ninos_gallery').innerHTML = ninosGrid;
}
