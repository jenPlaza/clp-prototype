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
    link_id: 'tennis',
    link_name: 'Tennis',
    link_href: './#activity.html?id=tennis',
    icon_src: './assets/images/icons/9023871_tennis_ball_fill_icon.png',
    icon_alt: 'white tennis ball icon',
  },
  {
    link_id: 'paddle',
    link_name: 'Paddeling',
    link_href: './#activity.html?id=paddeling',
    icon_src: './assets/images/icons/paddeling-white.png',
    icon_alt: 'white paddle ball icon',
  },
  {
    link_id: 'yoga',
    link_name: 'Yoga',
    link_href: './#activity.html?id=yoga',
    icon_src: './assets/images/icons/lotus-white.png',
    icon_alt: 'white lotus icon',
  },
  {
    link_id: 'competencias',
    link_name: 'Tournaments',
    link_href: './tournaments.html',
    icon_src: './assets/images/icons/trophy-white.png',
    icon_alt: 'white trophy icon',
  },
  {
    link_id: 'contact',
    link_name: 'Contacto',
    link_href: './index#contact.html',
    icon_src: './assets/images/icons/phone-white-2.png',
    icon_alt: 'white phone icon',
  },
];

var company = [
  {
    company_name: 'Club Los Paltos',
    company_add: '239 Meadow View Dr. Powell, Ohio(OH), 43065',
    company_phone: '(740) 548-2041',
    logo_info: [
      {
        link_href: '.index.html',
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
    media_id: 'tennis',
    media_link: '/',
    media_src: './assets/images/actividades/tennis_2_bk.png',
    media_alt:
      'black and white 1of3 picture of an event celebrated in club los paltos',
    media_cap: 'TENNIS',
  },
  {
    media_id: 'paddeling',
    media_link: '/',
    media_src: './assets/images/actividades/paddeling_bk.png',
    media_alt:
      'black and white 2of3 picture of an event celebrated in club los paltos',
    media_cap: 'PADDELING',
  },
  {
    media_id: 'tournament',
    media_link: '/',
    media_src: './assets/images/actividades/tournaments_bk.png',
    media_alt:
      'black and white 3of3 picture of an event celebrated in club los paltos',
    media_cap: 'TOURNAMENTS',
  },
  {
    media_id: 'yoga',
    media_link: '/',
    media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
    media_alt:
      'black and white 3of3 picture of an event celebrated in club los paltos',
    media_cap: 'YOGA',
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
    media_link: 'tel:1-232-75-769929',
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
    media_link: '/',
    media_src: [
      'assets/images/icons/facebook-white.png',
      'assets/images/icons/facebook-bk.png',
    ],
    media_alt: 'facebook icon',
  },
  {
    media_id: 'instgram',
    media_link: '/',
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
      h6: 'El <b>Club Los Paltos</b> se encuentra a menos de 30 minutos del centro de Santiago y a 20 minutos del aeropuerto. Está reconocido por contar con una de las mejores canchas de arcilla. Las canchas de tierra batida son ideales para jugar al tenis, ya que facilitan un bote más alto, reduciendo drásticamente la velocidad de la pelota. Estas canchas están construidas con la técnica "clay court" y tienen una superficie de 23,77 metros cuadrados. Son de estilo tradicional y ofrecen a cada tenista una experiencia nueva y divertida. Ofrecemos alquileres por hora, clases para niños y adultos, e inscripción en torneos. También contamos con pistas de pádel y clases para niños y adultos. Si el tenis no es lo tuyo, reúne a 15 de tus mejores amigos y amigas y alquilen el quincho para disfrutar de un delicioso asado a leña con acceso a la piscina. Proporcionamos estacionamiento privado.',
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
    },
  },
  {
    eventos: {
      h6: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum.',
      list: [
        {
          link_id: 'quincho',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teamBuildingEvent_1__bk.png',
          img_src_color:
            './assets/images/galleria/eventos/color/teamBuildingEvent_1.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'quincho_2',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/event2/evento2b_bk.jpeg',
          img_src_color: [
            'assets/images/galleria/eventos/color/event2/evento_2a.jpeg',
            'assets/images/galleria/eventos/color/event2/evento_2b.jpeg',
          ],
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'quincho_3',
          link_href: './nosotros.html',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/Event3_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/Event3.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'quincho_3',
          link_href: './nosotros.html',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/tugAWar_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/tugAWar.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'placeholder',
          link_href: '/',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
        {
          link_id: 'quincho_3',
          link_href: './nosotros.html',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teambuilding2_bk.png',
          img_src_color:
            './assets/images/galleria/eventos/color/teambuilding2.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          onclick: '',
        },
      ],
    },
  },
];
