const mediaQueryDesktop = window.matchMedia('(min-width: 1600px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryMobile = window.matchMedia('(min-width: 375px)');

function toTeams() {
  location.href = './equipo.html';
  //neocities
  //location.href = './equipo';
}
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
    if (mediaQueryDesktop.matches) {
      navBar.style.width = '70%';
      navBar.style.maxWidth = '1120px';
    }
  } else if (dcontent.style.display == 'flex') {
    dcontent.style.display = 'none';
    navList.classList.remove('top255');
    if (mediaQueryDesktop.matches) {
      navBar.style.width = '55%';
      navBar.style.maxWidth = '880px';
    }
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
//display grid data on Events, activities(tenis, yoga, padek)
function displayData(e) {
  var eventStory = document.getElementById('event_story');
  var tenisStory = document.getElementById('tenis_story');
  var padelStory = document.getElementById('padel_story');
  var yogaStory = document.getElementById('yoga_story');
  var displayGallery;
  var e;
  var contentId;
  var index;
  var main;
  const relativePaths = window.location.pathname.split('/');
  var page = relativePaths.pop();
  const xId = window.location.href.split('=');
  var activityId = xId.pop();
  console.log('page: ', page);
  console.log('activityId: ', activityId);
  console.log('displayGallery: ', displayGallery);

  if (page == 'acontecimientos.html') {
    displayGallery = eventStory;
    contentId = 'event_story_content';
    index = 1;
    main = gallery[index].eventos;

    if (e === '8114486') {
      eventitem = 0;
    } else if (e === '1135651') {
      eventitem = 1;
    } else if (e === '6678302') {
      eventitem = 2;
    } else if (e === '2207899') {
      eventitem = 3;
    } else if (e === '4588551') {
      eventitem = 4;
    } else if (e === '3190650') {
      eventitem = 5;
    } else if (e === '2985797') {
      eventitem = 6;
    } else if (e === '1186776') {
      eventitem = 7;
    } else if (e === '2931160') {
      eventitem = 8;
    } else if (e === '5009953') {
      eventitem = 9;
    } else if (e === '6982182') {
      eventitem = 10;
    } else {
      eventitem = 11;
    }
  } else if (page == 'actividades.html' && activityId == 'tenis') {
    displayGallery = tenisStory;
    contentId = 'tenis_story_content';
    index = 2;
    main = gallery[index].tenis;

    if (e === '5564122') {
      eventitem = 0;
    } else if (e === '5516395') {
      eventitem = 1;
    } else if (e === '464724') {
      eventitem = 2;
    } else if (e === '723250') {
      eventitem = 3;
    } else if (e === '1285519') {
      eventitem = 4;
    } else if (e === '9953363') {
      eventitem = 5;
    } else if (e === '7188566') {
      eventitem = 6;
    } else if (e === '5509214') {
      eventitem = 7;
    } else {
      eventitem = 8;
    }
  } else if (page == 'actividades.html' && activityId == 'padel') {
    displayGallery = padelStory;
    contentId = 'padel_story_content';
    index = 3;
    main = gallery[index].padel;

    if (e === '5564122') {
      eventitem = 0;
    } else if (e === '5516395') {
      eventitem = 1;
    } else if (e === '464724') {
      eventitem = 2;
    } else if (e === '723250') {
      eventitem = 3;
    } else if (e === '1285519') {
      eventitem = 4;
    } else if (e === '9953363') {
      eventitem = 5;
    } else if (e === '7188566') {
      eventitem = 6;
    } else if (e === '5509214') {
      eventitem = 7;
    } else {
      eventitem = 8;
    }
  } else if (page == 'actividades.html' && activityId == 'yoga') {
    displayGallery = yogaStory;
    contentId = 'yoga_story_content';
    index = 4;
    main = gallery[index].yoga;

    if (e === '5564122') {
      eventitem = 0;
    } else if (e === '5516395') {
      eventitem = 1;
    } else if (e === '464724') {
      eventitem = 2;
    } else if (e === '723250') {
      eventitem = 3;
    } else if (e === '1285519') {
      eventitem = 4;
    } else if (e === '9953363') {
      eventitem = 5;
    } else if (e === '7188566') {
      eventitem = 6;
    } else if (e === '5509214') {
      eventitem = 7;
    } else {
      eventitem = 8;
    }
  } //end of if else conditionals

  if (displayGallery.style.display == 'none') {
    displayGallery.style.display = 'flex';
  } else {
    displayGallery.style.display = 'none';
  } //end of if else conditionals

  var open = '<figure>';
  open +=
    '<img src="' +
    main.list[eventitem].img_src_color +
    '" alt="' +
    main.list[eventitem].img_alt +
    '"> ';
  open += '</figure><h3>' + main.list[eventitem].event_name + '</h3>';
  open += '<p>' + main.list[eventitem].event_info + '</p>';

  document.getElementById(contentId).innerHTML = open;
}
function closeData(displayGallery) {
  var eventStory = document.getElementById('event_story');
  var tenisStory = document.getElementById('tenis_story');
  var padelStory = document.getElementById('padel_story');
  var yogaStory = document.getElementById('yoga_story');
  var displayGallery;

  if (page == 'acontecimientos.html') {
    displayGallery = eventStory;
  } else if (page == 'actividades.html' && activityId == 'tenis') {
    displayGallery = tenisStory;
  } else if (page == 'actividades.html' && activityId == 'padel') {
    displayGallery = padelStory;
  } else if (page == 'actividades.html' && activityId == 'yoga') {
    displayGallery = yogaStory;
  }

  if (displayGallery.style.display == 'flex') {
    displayGallery.style.display = 'none';
  }
}
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
//TOUR
function takeATour() {
  var newTour =
    '<h4>Llamen hoy y programen un recorrido <a href="' +
    socialArray[1].media_link +
    '"> +56 9 7766 0445.</a></h4>';
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
//TEAM
function displayTeam() {
  //Tenis
  //console.log('team clp');
  //console.log('teamArray.list: ', teamArray[0].list);
  //console.log('teamArray[0].h6: ', teamArray[0].h6);
  var teamMembers = '<h6>' + teamArray[0].h6 + '</h6>';
  teamMembers += '<ul>';
  for (var t = 0; t < teamArray[0].list.length; t++) {
    teamMembers += '<li><article><figure>';
    teamMembers +=
      '<img src="' +
      teamArray[0].list[t].mem_image_src +
      '" alt="' +
      teamArray[0].list[t].mem_image_alt +
      '" width="100%" height="100%" /></figure>';
    teamMembers +=
      '<section><h5>' +
      teamArray[0].list[t].mem_name +
      '</h5><h6><b>' +
      teamArray[0].list[t].mem_CLP_role +
      '</b><br />' +
      teamArray[0].list[t].mem_country +
      '</h6><div><a href="' +
      teamArray[0].list[t].mem_linkedIn +
      '" ><img src="./assets/images/icons/linkedin-circle-bk.png" alt="linkedIn icon" width="25px" height="25px" class="team_icon" /></a><a href="' +
      teamArray[0].list[t].mem_web_page +
      '" style="display: none"><img src="./assets/images/icons/social-bk.png" alt="website icon" width="25px" height="25px" class="team_icon" /></a></div>';
    teamMembers += '<div>' + teamArray[0].list[t].mem_pro_title + '</div>';
    teamMembers += '<div><p>' + teamArray[0].list[t].mem_bio + '</p></div>';
    teamMembers += '</section></article></li>';
  }
  teamMembers += '</ul>';
  document.getElementById('team_gallery').innerHTML = teamMembers;
}

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
    '" class="nav-link"><h6><em>' +
    navigationArray[h].link_name +
    '</em></h6></a>';
  menu += '</li>';
}
menu += '<li class="dropdown">';
menu +=
  '<img src="./assets/images/icons/categorize-white.png" alt="white menu icon" width="30px" height="30px" class="nav-icon" onclick="displayContent();"/>';
menu +=
  '<h6 class="dropbtn nav-link" onclick="displayActivities();"><em>Actividades</em></h6>';
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
    '" class="nav-link"><h6><em>' +
    navigationArray[h].link_name +
    '</em></h6></a>';
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
    '" class="nav-link"><h6><em>' +
    navigationArray[h].link_name +
    '</em></h6></a>';
  menu += '</li>';
}
menu += '</ul>';

document.getElementById('navList').innerHTML = menu;

//NAV Scrolling
const navMenu = document.querySelector('.scroll-in-place');
//console.log(window.scrollY);
(window.onscroll = function () {
  if (window.scrollY > 100) {
    navMenu.classList.add('nav-scroll');
  } else {
    navMenu.classList.remove('nav-scroll');
  }
})();

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

//FOOTER LOCATION
var locate = '<figure id="logo">';
locate +=
  '<img src="' +
  company[0].logo_info[0].img_src[0] +
  '" alt="logo" width="40px" height="40px" /></figure>';
locate += '<div><p><em><b>' + company[0].company_name + '</b></em></p>';
locate += '<address>' + company[0].company_add + '</address>';
locate +=
  '<div><a href="' +
  socialArray[1].media_link +
  '"><p><em><b>' +
  company[0].company_phone +
  '</b></em></p></a></div></div>';

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
