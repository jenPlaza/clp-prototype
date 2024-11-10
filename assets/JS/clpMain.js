//HEADER
var menu = '<ul class="list min">';
menu += '<li style="display: inline-flex">';
menu +=
  '<img src="./assets/images/icons/arrow-left-small-white.png" alt="white menu icon" width="16px" height="16px" class="nav-icon nav-close" onclick="shortenMenu();" />';
menu +=
  '<img src="./assets/images/icons/arrow-right-small-white.png" alt="white menu icon" width="16px" height="16px" class="nav-icon nav-open" onclick="extendMenu();" />';
menu += '</li>';
for (var h = 0; h < navigationArray.length - 5; h++) {
  menu +=
    '<li><a href="' +
    navigationArray[h].link_href +
    '"><img src="' +
    navigationArray[h].icon_src +
    '" alt="' +
    navigationArray[h].icon_alt +
    '" width="30px" height="30px" class="nav-icon"/></a>';
  menu +=
    '<a href="' +
    navigationArray[h].link_href +
    '" class="nav-link"><h6>' +
    navigationArray[h].link_name +
    '</h6></a>';
  menu += '</li>';
}
menu += '<li class="dropdown">';
menu +=
  '<img src="./assets/images/icons/categorize-white.png" alt="white menu icon" width="30px" height="30px" class="nav-icon" onclick="displayContent();"/>';
menu +=
  '<h6 class="dropbtn nav-link" onclick="displayActivities();">Actividades</h6>';
menu += '<div class="dropdown-content" style="display: none">';
menu += '<ul>';
for (var h = 4; h < navigationArray.length - 2; h++) {
  menu +=
    '<li><a href="' +
    navigationArray[h].link_href +
    '"><img src="' +
    navigationArray[h].icon_src +
    '" alt="' +
    navigationArray[h].icon_alt +
    '" width="30px" height="30px" class="nav-icon"/></a>';
  menu +=
    '<a href="' +
    navigationArray[h].link_href +
    '" class="nav-link"><h6>' +
    navigationArray[h].link_name +
    '</h6></a>';
  menu += '</li>';
}
menu += '</ul></div></li>';
for (var h = 7; h < navigationArray.length; h++) {
  menu +=
    '<li><a href="' +
    navigationArray[h].link_href +
    '"><img src="' +
    navigationArray[h].icon_src +
    '" alt="' +
    navigationArray[h].icon_alt +
    '" width="30px" height="30px" class="nav-icon"/></a>';
  menu +=
    '<a href="' +
    navigationArray[h].link_href +
    '" class="nav-link"><h6>' +
    navigationArray[h].link_name +
    '</h6></a>';
  menu += '</li>';
}
menu += '</ul>';

document.getElementById('navList').innerHTML = menu;

//NAV Scrolling
const navMenu = document.querySelector('.scroll-in-place');
console.log(window.scrollY);
(window.onscroll = function () {
  if (window.scrollY > 100) {
    navMenu.classList.add('nav-scroll');
  } else {
    navMenu.classList.remove('nav-scroll');
  }
})();

//Navigation Icon Menu onclick functionality for mobile sizes
function appear() {
  var headerBar = document.querySelector('.scroll-in-place');
  var navigationList = document.getElementById('navList');
  if (navigationList.style.display == 'none') {
    headerBar.style.background = 'var(--red)';
    navigationList.style.display = 'contents';
  } else if (navigationList.style.display == 'contents') {
    headerBar.style.background = 'revert-layer';
    navigationList.style.display = 'none';
  }
}
//Navbar avtivities dropdown content
function displayContent() {
  var navBar = document.getElementById('navList');
  var navList = navBar.querySelector('.list');
  var dcontent = document.querySelector('.dropdown-content');
  if (dcontent.style.display == 'none') {
    dcontent.style.display = 'flex';
    navList.classList.add('top255');
  } else if (dcontent.style.display == 'flex') {
    dcontent.style.display = 'none';
    navList.classList.remove('top255');
  }
}
function displayActivities() {
  var navBar = document.getElementById('navList');
  var navList = navBar.querySelector('.list');
  var dcontent = document.querySelector('.dropdown-content');
  if (dcontent.style.display == 'none') {
    dcontent.style.display = 'flex';
    navList.classList.add('top255');
  } else if (dcontent.style.display == 'flex') {
    dcontent.style.display = 'none';
    navList.classList.remove('top255');
  }
}
//Navigation Menu extension onclick functionality for mobile sizes
function extendMenu() {
  var navList = document.querySelector('.list');
  const navshow = document.getElementsByClassName('nav-link');
  const openLGMenu = document.querySelector('.nav-open');
  const closeLGMenu = document.querySelector('.nav-close');
  var dcontent = document.querySelector('.dropdown-content');
  //testing
  //console.log('navshow: ', navshow.length);
  navList.classList.add('max');
  openLGMenu.style.display = 'none';
  closeLGMenu.style.display = 'block';
  dcontent.classList.add('modifyMargin');
  for (var i = 0; i < navshow.length; i++) {
    //console.log(navshow[i]);
    navshow[i].classList.add('show');
  }
}
//Navigation Menu extension onclick functionality for mobile sizes
function shortenMenu() {
  var navList = document.querySelector('.list');
  const navshow = document.getElementsByClassName('nav-link');
  const closeLGMenu = document.querySelector('.nav-close');
  const openLGMenu = document.querySelector('.nav-open');
  var dcontent = document.querySelector('.dropdown-content');
  //console.log('navshow: ', navshow.length);
  navList.classList.remove('max');
  navList.classList.remove('top255');
  closeLGMenu.style.display = 'none';
  openLGMenu.style.display = 'block';
  dcontent.classList.remove('modifyMargin');
  dcontent.style.display = 'none';
  for (var i = 0; i < navshow.length; i++) {
    //console.log(navshow[i]);
    navshow[i].classList.remove('show');
  }
}

const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryMobile = window.matchMedia('(min-width: 375px)');
if (mediaQueryTablet.matches) {
  const navicon = document.getElementsByClassName('nav-icon');
  const navshow = document.getElementsByClassName('nav-link');

  for (var i = 0; i < navicon.length; i++) {
    navicon[i].style.display = 'none';
  }
  for (var p = 0; p < navshow.length; p++) {
    navshow[p].style.display = 'block';
  }
}

//ACTIVIDADES
var activity = '';
for (var a = 0; a < activities.length; a++) {
  activity += '<li><figure><a href="' + activities[a].media_link + '">';
  activity +=
    '<img src="' +
    activities[a].media_src +
    '" alt="' +
    activities[a].media_alt +
    '" />';
  activity +=
    '</a><figcaption><a href="' +
    activities[a].media_link +
    '"><h5>' +
    activities[a].media_cap +
    '</h5></a></figcaption>';
  activity += '</figure></li>';
}

document.getElementById('sports').innerHTML = activity;

//TOUR
function takeATour() {
  var newTour = '<h4>Llamen hoy y programen un recorrido 740 - 548-2041.</h4>';
  newTour += '<ul>';
  for (var t = 0; t < tour.length; t++) {
    newTour +=
      '<li><figure><img src="' +
      tour[t].media_src +
      '" alt="' +
      tour[t].media_alt +
      '" />';
    newTour += '</figure></li>';
  }
  newTour += '</ul>';
  document.getElementById('tour').innerHTML = newTour;
}

//FOOTER LOCATION
var locate = '<figure id="logo">';
locate +=
  '<img src="' +
  company[0].logo_info[0].img_src[0] +
  '" alt="logo" width="40px" height="40px" /></figure>';
locate += '<div><p><em><b>' + company[0].company_name + '</b></em></p>';
locate += '<address>' + company[0].company_add + '</address>';
locate +=
  '<div><p><em><b>' + company[0].company_phone + '</b></em></p></div></div>';

document.getElementById('location').innerHTML = locate;

//FOOTER SOCIAL

var clp = '<ul>';
if (mediaQueryMobile.matches) {
  for (var k = 0; k < socialArray.length; k++) {
    clp += '<li>';
    clp +=
      '<a href="' + socialArray[k].media_link[1] + '" target="_blank"><figure>';
    clp +=
      '<img src="' +
      socialArray[k].media_src[0] +
      '" alt="' +
      socialArray[k].media_alt +
      '" class="social-icon"/>';
    clp += '</figure></a></li>';
  }
  clp += '</ul>';
  document.getElementById('socialM').innerHTML = clp;
}
if (mediaQueryTablet.matches) {
  var clp = '<ul>';
  for (var k = 0; k < socialArray.length; k++) {
    clp += '<li>';
    clp +=
      '<a href="' + socialArray[k].media_link[1] + '" target="_blank"><figure>';
    clp +=
      '<img src="' +
      socialArray[k].media_src[1] +
      '" alt="' +
      socialArray[k].media_alt +
      '" class="social-icon"/>';
    clp += '</figure></a></li>';
  }
  clp += '</ul>';
  document.getElementById('socialM').innerHTML = clp;
}
