//NAVIGATION MENU
var navigationArray = [
  {
    link_id: 'home',
    link_name: 'Home',
    link_href: './index.html',
    icon_src: './assets/images/icons/home-white.png',
    icon_alt: 'white menu icon',
  },
  {
    link_id: 'calendar',
    link_name: 'Calendario',
    link_href: '/',
    icon_src: './assets/images/icons/calendar-white.png',
    icon_alt: 'white menu icon',
  },
  {
    link_id: 'about',
    link_name: 'Nosotros',
    link_href: './nosotros.html',
    icon_src: './assets/images/icons/info-white.png',
    icon_alt: 'white info icon',
  },
  {
    link_id: 'events',
    link_name: 'Acontecimientos',
    link_href: './acontecimientos.html',
    icon_src: './assets/images/icons/balloon-white.png',
    icon_alt: 'white balloon icon',
  },
  {
    link_id: 'tenis',
    link_name: 'Tenis',
    link_href: './actividades.html?id=tenis',
    icon_src: './assets/images/icons/9023871_tennis_ball_fill_icon.png',
    icon_alt: 'white tennis ball icon',
  },
  {
    link_id: 'Padel',
    link_name: 'Padel',
    link_href: './actividades.html?id=padel',
    icon_src: './assets/images/icons/paddeling-white.png',
    icon_alt: 'white padle ball icon',
  },
  {
    link_id: 'yoga',
    link_name: 'Yoga',
    link_href: './actividades.html?id=yoga',
    icon_src: './assets/images/icons/lotus-white.png',
    icon_alt: 'white lotus icon',
  },
  {
    link_id: 'competencias',
    link_name: 'Torneos',
    link_href: './torneos.html',
    icon_src: './assets/images/icons/trophy-white.png',
    icon_alt: 'white trophy icon',
  },
  {
    link_id: 'contact',
    link_name: 'Contacto',
    link_href: './contacto.html',
    icon_src: './assets/images/icons/phone-white-2.png',
    icon_alt: 'white phone icon',
  },
];
//company information
var company = [
  {
    company_name: 'Club Los Paltos',
    company_add: 'Balmaceda 951, 9380173 Lampa, Región Metropolitana, Chile',
    company_phone: '+56 9 7766 0445',
    logo_info: [
      {
        link_href: './index.html',
        img_src: [
          './assets/images/logos/clublospaltos.png',
          './assets/images/logos/CLP_wt.png',
        ],
        img_alt: 'Club Los Paltos logo',
        img_caption: 'Club Los Paltos',
      },
    ],
  },
];
//Actividades
var activities = [
  {
    media_id: 'tenis',
    media_link: './actividades.html?id=tenis',
    media_src: './assets/images/actividades/tennis_2_bk.png',
    media_alt:
      'black and white 1of3 picture of an event celebrated in club los paltos',
    media_cap: 'TENIS',
    gallery_id: 'tenis_gallery',
    story_id: 'tenis_story',
    story_content_id: 'tenis_story_content',
  },
  {
    media_id: 'padel',
    media_link: './actividades.html?id=padel',
    media_src: './assets/images/actividades/paddeling_bk.png',
    media_alt:
      'black and white 2of3 picture of an event celebrated in club los paltos',
    media_cap: 'PADEL',
    gallery_id: 'padel_gallery',
    story_id: 'padel_story',
    story_content_id: 'padel_story_content',
  },
  {
    media_id: 'torneo',
    media_link: './torneos',
    media_src: './assets/images/actividades/tournaments_bk.png',
    media_alt:
      'black and white 3of3 picture of an event celebrated in club los paltos',
    media_cap: 'TORNEOS',
    gallery_id: 'torneo_gallery',
    story_id: 'torneo_story',
    story_content_id: 'torneo_story_content',
  },
  {
    media_id: 'yoga',
    media_link: './actividades.html?id=yoga',
    media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
    media_alt:
      'black and white 3of3 picture of an event celebrated in club los paltos',
    media_cap: 'YOGA',
    gallery_id: 'yoga_gallery',
    story_id: 'yoga_story',
    story_content_id: 'yoga_story_content',
  },
];
//Tour
var tour = [
  {
    media_id: 'pool001',
    media_src: './assets/images/tour/picina_2.jpeg',
    media_alt: 'photo image of pool',
  },
  {
    media_id: 'pool002',
    media_src: './assets/images/tour/picina.jpeg',
    media_alt: 'photo image of pool 2',
  },
  {
    media_id: 'macetero',
    media_src: './assets/images/tour/macetero.jpeg',
    media_alt: 'photo image of a clay pot',
  },
  {
    media_id: 'flores001',
    media_src: './assets/images/tour/flores.jpeg',
    media_alt: 'photo image of flowers',
  },
  {
    media_id: 'flores002',
    media_src: './assets/images/tour/flores_2.jpeg',
    media_alt: 'photo image of flowers 2',
  },
  {
    media_id: 'bano001',
    media_src: './assets/images/tour/bano.jpeg',
    media_alt: 'photo image of club bathroons',
  },
  {
    media_id: 'bano002',
    media_src: './assets/images/tour/bano_2.jpeg',
    media_alt: 'photo image of club bathroons 2',
  },
];
//Footer
var socialArray = [
  {
    media_id: 'email',
    media_link: '/',
    media_src: [
      'assets/images/icons/mail-white.png',
      'assets/images/icons/message-bk.png',
    ],
    media_alt: 'email icon',
  },
  {
    media_id: 'phone',
    media_link: 'tel:56 9 7766 0445',
    media_src: [
      'assets/images/icons/phone-white.png',
      'assets/images/icons/phone-bk.png',
    ],
    media_alt: 'phone icon',
  },
  {
    media_id: 'linkedIn',
    media_link: '/',
    media_src: [
      'assets/images/icons/linkedin-white.png',
      'assets/images/icons/linkedin-bk.png',
    ],
    media_alt: 'linkedIn icon',
  },
  {
    media_id: 'facebook',
    media_link: 'https://www.facebook.com/p/Club-Los-Paltos-100054313999159/',
    media_src: [
      'assets/images/icons/facebook-white.png',
      'assets/images/icons/facebook-bk.png',
    ],
    media_alt: 'facebook icon',
  },
  {
    media_id: 'instgram',
    media_link:
      'https://www.instagram.com/explore/locations/1013305569/club-los-paltos/?hl=en',
    media_src: [
      'assets/images/icons/instagram-white.png',
      'assets/images/icons/instagram-bk.png',
    ],
    media_alt: 'instgram icon',
  },
];

// Galleries
var gallery = [
  {
    home: {
      h6: 'El <b>Club Los Paltos</b> se encuentra a menos de 80 minutos del centro de Santiago y a 55 minutos del aeropuerto internacional Arturo Benitez. Está reconocido regionalmente por contar con una de las mejores canchas de arcilla. Las canchas de tierra batida son ideales para jugar al tenis, ya que facilitan un bote más alto, reduciendo drásticamente la velocidad de la pelota. Estas canchas están construidas con la técnica "clay court" y tienen una superficie de 23,77 metros cuadrados. Son de estilo tradicional, completamente parejas y con una gran cantidad de arcilla que hace aún más agradable ofreciendo a cada tenista una experiencia nueva y divertida. Ofrecemos alquileres por hora, clases para niños y adultos, e inscripción en torneos. También contamos con pistas de pádel. Si el tenis no es lo tuyo, reúne a 15 de tus mejores amigos y amigas y alquilen el quincho para disfrutar de un delicioso asado a leña con acceso a la piscina. Proporcionamos estacionamiento privado.<br /><br /><div><button type="button" onclick="toEvents();">Exploren Los Eventos</button></div>',
      list: [
        {
          link_id: 'quincho',
          link_href: '',
          img_src_bk: './assets/images/galleria/home/quicncho_1_bk.png',
          img_alt:
            'black and white 1of3 picture of an event celebrated in club los paltos',
          onclick: '',
        },
        {
          link_id: 'quicnco_2',
          link_href: '',
          img_src_bk: './assets/images/galleria/home/quicncho_2_bk.png',
          img_alt:
            'black and white 2of3 picture of an event celebrated in club los paltos',
          onclick: '',
        },
        {
          link_id: 'quincho_3',
          link_href: '',
          img_src_bk: './assets/images/galleria/home/quicncho_3_bk.png',
          img_alt:
            'black and white 3of3 picture of an event celebrated in club los paltos',
          onclick: '',
        },
      ],
      activities: [
        {
          media_id: '',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: '',
          story_id: '',
          story_content_id: '',
        },
      ],
    },
  },
  {
    eventos: {
      h6: 'No importa la ocasión, <b>Club Los Paltos</b> es el lugar perfecto para albergar una variedad de eventos. Nuestras instalaciones ofrecen un espacio maravilloso con un paisaje natural con las características necesarias para relajarse y recrearse, en contacto con la naturaleza y todo lo necesario para disfrutar de un día único, acompañado de tu familia, amigos o empresa. Tambien disfrutando de una gran piscina, hermosas áreas verdes, y un gran quincho para hacer un asado y compartir; garantizando el éxito de cualquier evento. <br /><br /><section id="seOfrece"><div><b>Club deportivo y reacreacion Los Paltos ofrece:</b><ul><li><p>+ Amplio recinto para diferentes celebraciones, con hermosas areas verdes gran Quincho para 130 personas aproximadamente.</p></li><li><p> + Picina de 16mts de largo por 9 de ancho, mas una picina paraninos.</p></li><li><p>+ Areas de juego infantiles construido en madera.</p></li><li><p>+ Comodas instalaciones de servicios higienicos.</p></li><li><p>+ Mesas de pin-pon y taca-taca.</p></li><li><p> + Arriendo de cancha de tenis <em>(optativo con costo adicional)</em>.</p></li><li><p> + Arriendo de cancha de padel <em>(optativo con costo adicional)</em>.</p></li><li><p> + Juegos inflables y cama saltarina <em>(optativo con costo adicional)</em>.</p></li><li><p>+ Caritas pintadas <em>(optativo con costo adicional)</em>.</p></li></ul></div></section><br />El valor del recinto es de $5.000 x persona. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario <br /><br /> *Grupos de entre 15 y 130 personas. Precios especales para grupos mayor a 80 personas; minimo 15 personas. No se incluye el personal, los utensilios de cocina ni las camareras. <br /><br /><button class="secondary small" type="button" onclick="toTeams();">Conoscan Al Equipo</button>',
      list: [
        {
          link_id: '8114486',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teamBuildingEvent_1__bk.png',
          img_src_color:
            './assets/images/galleria/eventos/color/teamBuildingEvent_1.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1135651',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/evento2b_bk.jpeg',
          img_src_color: './assets/images/galleria/eventos/color/evento2b.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '6678302',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/Event3_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/Event3.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '2207899',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '4588551',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '3190650',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/tugAWar_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/tugAWar.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '2985797',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1186776',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '2931160',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5009953',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '6982182',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1862835',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teambuilding2_bk.png',
          img_src_color:
            './assets/images/galleria/eventos/color/teambuilding2.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: '',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: '',
          story_id: '',
          story_content_id: '',
        },
      ],
    },
  },
  {
    tenis: {
      h6: 'El <b>Club Los Paltos</b> proporciona un entorno en la comuna de Lampa donde las personas pueden disfrutar de actividades deportivas en un lugar encantador, equipado con instalaciones de primera calidad para asegurar que la experiencia sea lo más placentera y segura posible. Nuestras canchas de tenis son reconocidas a nivel regional por ser de las mejores, con superficies completamente niveladas y una abundante capa de arcilla que hace que jugar sea aún más agradable y cómodo. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. Proporcionamos estacionamiento privado.<br /><button id="tenis" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Equipo </button>',
      list: [
        {
          link_id: '5564122',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '723250',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '7188566',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          img_src_bk:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/tenis/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Tenis 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'tenis',
          media_link: '/',
          media_src: './assets/images/actividades/tennis_2_bk.png',
          media_alt:
            'black and white 1of3 picture of an event celebrated in club los paltos',
          media_cap: 'TENIS',
          gallery_id: 'tenis_gallery',
          story_id: 'tenis_story',
          story_content_id: 'tenis_story_content',
        },
      ],
    },
  },
  {
    padel: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. Proporcionamos estacionamiento privado.<br /><br />',
      list: [
        {
          link_id: '5564122',
          img_src_bk: './assets/images/galleria/padel/padel-game-bk.jpeg',
          img_src_color: './assets/images/galleria/padel/padel-game.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '723250',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '7188566',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          img_src_bk:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/padel/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Padel 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'padel',
          media_link: '/',
          media_src: './assets/images/actividades/paddeling_bk.png',
          media_alt:
            'black and white 2of3 picture of an event celebrated in club los paltos',
          media_cap: 'PADEL',
          gallery_id: 'padel_gallery',
          story_id: 'padel_story',
          story_content_id: 'padel_story_content',
        },
      ],
    },
  },
  {
    yoga: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. Proporcionamos estacionamiento privado.<br /><button id="yoga" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Equipo</button>',
      list: [
        {
          link_id: '5564122',
          img_src_bk: './assets/images/galleria/yoga/yoga_cover-bk.jpeg',
          img_src_color: './assets/images/galleria/yoga/yoga_2.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          img_src_bk: './assets/images/galleria/yoga/yoga-bk.jpeg',
          img_src_color: './assets/images/galleria/yoga/yoga.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '723250',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '7188566',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          img_src_bk: './assets/images/galleria/yoga/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/yoga/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento yoga 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'yoga',
          media_link: '/',
          media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
          media_alt:
            'black and white 3of3 picture of an event celebrated in club los paltos',
          media_cap: 'YOGA',
          gallery_id: 'yoga_gallery',
          story_id: 'yoga_story',
          story_content_id: 'yoga_story_content',
        },
      ],
    },
  },
  {
    torneos_de_adultos: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. <br /><button id="torneo" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Instructor </button>',
      list: [
        {
          link_id: '5564122',
          img_src_bk: './assets/images/galleria/torneo/tournament_bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/tournament.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          img_src_bk: './assets/images/galleria/torneo/categoria_C-bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_C.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '723250',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '7188566',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'yoga',
          media_link: '/',
          media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
          media_alt:
            'black and white 3of3 picture of an event celebrated in club los paltos',
          media_cap: 'YOGA',
          gallery_id: 'yoga_gallery',
          story_id: 'yoga_story',
          story_content_id: 'yoga_story_content',
        },
      ],
    },
  },
  {
    torneos_de_ninos: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario.',
      list: [
        {
          link_id: '5564122',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '723250',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '7188566',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          img_src_bk:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/torneo/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo de Nino 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'yoga',
          media_link: '/',
          media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
          media_alt:
            'black and white 3of3 picture of an event celebrated in club los paltos',
          media_cap: 'YOGA',
          gallery_id: 'yoga_gallery',
          story_id: 'yoga_story',
          story_content_id: 'yoga_story_content',
        },
      ],
    },
  },
];
//Team
var teamArray = [
  {
    h6: 'Bien Venidos al <b>Club los Paltos</b>, un club que se dedirica a brindar un espacio que permita a las personas de la comuna de Lampa recrearse deportivamente, en un precioso lugar con excelentes instalaciones que permitan que la experiencia sea lo más agradable y segura posible. Nuestra mission es contribuir por medio del deporte en la salud de la persona y generar una competencia deportiva saludable y entretenida. <br /><br />  <b>Nuestros Liderazgo</b> está formado por personas apasionadas por servir y garantizar que cada huésped tenga la oportunidad de sentirse cómodo en cualquier área del club, ya sea en el tenis o pádel, disfrutando la calma del yoga o participando en una agradable reunión en el quincho. Prestan toda su atención y dedicación para mantener un alto nivel de excelencia.<br /><br />  <b>Nuestros Instructores</b> que se especializan con una gran pasión y están profesionalmente capacitados para tratar y ayudar a cada persona y niño de todos los niveles a mejorar sus habilidades y alcanzar sus objetivos.<br /><br />  <b>Juntos</b> generan un ambiente que es tanto competitivo como acogedor e inclusivo.',
    list: [
      {
        team_id: 'ceo',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Eduardo Piña',
        mem_name: 'Eduardo Piña',
        mem_CLP_role: 'Director Ejecutivo y Organizador del Club Los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: '',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Presentamos a Eduardo Piña, el director ejecutivo del Club Los Paltos. Con más de dos décadas de experiencia en la industria hotelera, actualmente se dedica a asegurar que cada visitante tenga la oportunidad de sentirse a gusto en todas las áreas del club.',
      },
      {
        team_id: 'dir',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Julio Piña',
        mem_name: 'Julio Piña',
        mem_CLP_role:
          'Director Ejecutivo y Organizador del Club Los Paltos - Paddeling',
        mem_country: ' Santiago, Chile',
        mem_pro_title: '',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Conozcan a Julio Piña, el director ejecutivo del Club Los Paltos - Paddeling. Con más de veinte años de experiencia en la industria de ventas de autos, ahora se dedica a garantizar que cada jugador de pádel tenga la oportunidad de alcanzar sus objetivos.',
      },
      {
        team_id: 'communicaciones',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Gerarldine Acevedo',
        mem_name: 'Gerarldine Acevedo Piña',
        mem_CLP_role: 'Administradora de Communicacionces del Club Los Paltos ',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Directora de collegio infantil xxx',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        team_id: 'tenis',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Diego Piña',
        mem_name: 'Diego Piña',
        mem_CLP_role: 'Instructor y Organizador de Torneos del Club Los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Psicologo Clinica en Practica Privado',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        team_id: 'yoga',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Rocio Piña',
        mem_name: 'Rocio Piña',
        mem_CLP_role: 'Instructora de Yoga del Club Los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Maestra para niños con autismo',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        team_id: 'web',
        mem_image_src: './assets/images/team/headshot_bw.jpg',
        mem_image_alt: 'Jennifer Plaza Headshot',
        mem_name: 'Jennifer Plaza',
        mem_CLP_role: 'Desarrollador front-end del Club Los Paltos',
        mem_country: 'Orlando, Florida USA',
        mem_pro_title: 'Web Design and Development',
        mem_web_page: 'https://jennplaza.wordpress.com/',
        mem_linkedIn: 'https://www.linkedin.com/in/jenn-plaza-339613321/',
        mem_bio:
          'Obtuve mi licenciatura en Diseño y Desarrollo Web de Full Sail University el 24 de noviembre de 2020. Soy oriunda de Miami, Florida, pero me mudé a Orlando, Florida, en 2006. Soy la hermana menor de dos. Disfruto de la jardinería, pintura, y recientemente he comenzado a cultivar mis propios alimentos orgánicos. Desde 2006 trabajé para el American Hotel and Lodging Educational Institute (AHLEI) hasta su fusión con la National Restaurant Association (NRA), en el 2017. Durante ese tiempo descubrí mi pasión por los sitios web y decidí regresar a la escuela. Me gradué en 2020 y desde entonces he participado en varios proyectos de voluntariado, adquirido experiencia laboral y refinado mis habilidades mientras implemento mejores prácticas. En junio de 2024 me uní a AYPAD como voluntaria y en Noviembre con Club los Paltos, lo que me ha permitido participar en una variacion de proyectos; ha sido una experiencia enriquecedora y estoy buscando nuevos desafíos.',
      },
      {
        team_id: 'graficos',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Maximileano Piña',
        mem_name: 'Maximileano Piña ',
        mem_CLP_role: 'Gestor de Graficos del Club los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title:
          'Estudiante de Diseno de Graficos en la Universidad .....',
        mem_web_page: '',
        mem_linkedIn: '/',
        mem_bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        team_id: 'nutri',
        mem_image_src: './assets/images/team/image_placeholder-min.png',
        mem_image_alt: 'Foto de remate de Pia Piña',
        mem_name: 'Pia Piña',
        mem_CLP_role: 'Consejera de Nutricion del Club los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Estudiante de Nutricion en la Universidad .....',
        mem_portfolio: '',
        mem_web_page: '',
        mem_bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
];
