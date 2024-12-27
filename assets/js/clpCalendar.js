//Brand list
// function displayReservations() {
//   var reservationCenter = document.querySelector('.reservaciones');
//   var actividadesCLP = document.getElementById('actividadesCLP');
//   var calendar = document.querySelector('.calendar');
//   var clpHeader = document.getElementById('top');
//   var expandMenu = document.querySelector('.nav-close');
//   if (reservationCenter.style.display == 'none') {
//     reservationCenter.style.display = 'flex';
//     clpHeader.style.background = 'var(--red)';
//     expandMenu.click();
//   } else if (reservationCenter.style.display == 'flex') {
//     if (mediaQueryTablet.matches) {
//       reservationCenter.classList.remove('expand');
//     }
//     actividadesCLP.style.display = 'flex';
//     calendar.style.display = 'none';
//     // reservationCenter.classList.remove('calendario');
//     reservationCenter.style.display = 'none';
//     // clpHeader.style.background = 'revert-layer';
//   }
// }

function displayReservations() {
  var reservationCenter = document.querySelector('.reservaciones');
  var actividadesCLP = document.getElementById('actividadesCLP');
  const calendar = document.querySelector('.calendar');
  var clpHeader = document.getElementById('top');
  var expandMenu = document.querySelector('.nav-close');
  if (reservationCenter.style.display == 'none') {
    reservationCenter.style.display = 'flex';
    clpHeader.style.background = 'var(--red)';
    if (mediaQueryMobile.matches) {
      expandMenu.click();
    }
    if (mediaQueryTablet.matches) {
      clpHeader.style.height = '550px';
    }
    if (mediaQuerySmlDesktop.matches) {
      clpHeader.style.height = '400px';
    }
  } else if (reservationCenter.style.display == 'flex') {
    if (mediaQueryMobile.matches || mediaQueryTablet.matches) {
      clpHeader.style.height = '60px';
    }
    actividadesCLP.style.display = 'flex';
    calendar.style.display = 'none';
    reservationCenter.style.display = 'none';
  }
}

//close reservationCenter
function closeReservations() {
  var reservationCenter = document.querySelector('.reservaciones');
  var clpHeader = document.getElementById('top');
  var calendar = document.querySelector('.calendar');
  if (reservationCenter.style.display == 'flex') {
    reservationCenter.style.display = 'none';
    if (mediaQueryMobile.matches || mediaQueryTablet.matches) {
      clpHeader.style.height = '60px';
    }
    if (mediaQueryTablet.matches) {
      reservationCenter.classList.remove('expand');
    }
    actividadesCLP.style.display = 'flex';
    calendar.style.display = 'none';
  }
}

function displayCalendar(e) {
  console.log('e: ', e);
  var calendarId = e;
  var calendar = document.querySelector('.calendar');
  var actividadesCLP = document.getElementById('actividadesCLP');
  var reservationCenter = document.querySelector('.reservaciones');
  var clpHeader = document.getElementById('top');
  console.log('calendarStyle', calendar.style.display);
  if (actividadesCLP.style.display == 'flex') {
    if (mediaQueryTablet.matches) {
      reservationCenter.classList.add('expand');
      if (reservationCenter.classList.contains('expand')) {
        clpHeader.style.height = '800px';
      }
    }
    if (mediaQueryDesktop.matches) {
      clpHeader.style.height = '878px';
    }
    actividadesCLP.style.display = 'none';
    calendar.style.display = 'block';
  }

  //Calendar
  var calendarioDeReservas = '';
  calendarioDeReservas +=
    '<header class="x"><div id="close" onclick="closeCalendar()"><img src="./assets/images/icons/close-outlined-red.png" alt="white menu icon" width="25px"></div></header>';
  if (calendarId == 'eventCalendar') {
    c = 0;
  } else if (calendarId == 'tenisCalendar') {
    c = 1;
  } else {
    c = 2;
  }
  calendarioDeReservas +=
    ' <h3>' +
    reservArray[c].calendar_name +
    '</h3><p class="light-grey">' +
    reservArray[c].calendar_paragraph +
    '</p><div id="autoHide" style="text-align: center;">Cargando...</div>';
  calendarioDeReservas +=
    '<div><iframe src="' +
    reservArray[c].calendar_iframe_src +
    '" width="100%" height="100%" frameborder="0"></iframe></div>';
  calendarioDeReservas += ' </section>';

  document.querySelector('.calendar').innerHTML = calendarioDeReservas;
}

//close calendar
function closeCalendar() {
  var calendar = document.querySelector('.calendar');
  var reservationCenter = document.querySelector('.reservaciones');
  var clpHeader = document.getElementById('top');
  if (calendar.style.display == 'block') {
    if (mediaQueryTablet.matches) {
      reservationCenter.classList.remove('expand');
    }
    calendar.style.display = 'none';
    actividadesCLP.style.display = 'flex';
    if (mediaQuerySmlDesktop.matches || mediaQueryDesktop.matches) {
      clpHeader.style.height = '400px';
    } else {
      clpHeader.style.height = '550px';
    }
  }
}
