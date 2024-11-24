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
    icon_src: './assets/images/icons/heart-circle-white.png',
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
      h6: 'El <b>Club Los Paltos</b> se encuentra a menos de 80 minutos del centro de Santiago y a 55 minutos del aeropuerto internacional Arturo Benitez. Está reconocido regionalmente por contar con una de las mejores canchas de arcilla. Las canchas de tierra batida son ideales para jugar al tenis, ya que facilitan un bote más alto, reduciendo drásticamente la velocidad de la pelota. Estas canchas están construidas con la técnica "clay court" y tienen una superficie estander de acuerdo a la Normativa Internacional. Son de estilo tradicional, completamente parejas y con una gran cantidad de arcilla que hace aún más agradable ofreciendo a cada tenista una experiencia nueva y divertida. Ofrecemos alquileres por hora, clases para niños y adultos, e inscripción en torneos. También contamos con pistas de pádel. Si el tenis no es lo tuyo, reúne a 15 de tus mejores amigos y amigas y alquilen el quincho para disfrutar de un delicioso asado a leña con acceso a la piscina. Proporcionamos estacionamiento privado.<br /><br /><div><button type="button" onclick="toEvents();">Exploren Los Eventos</button></div>',
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
      h6: 'No importa la ocasión, <b>Club Los Paltos</b> es el lugar perfecto para albergar una variedad de eventos. Nuestras instalaciones ofrecen un espacio maravilloso con un paisaje natural con las características necesarias para relajarse y recrearse, en contacto con la naturaleza y todo lo necesario para disfrutar de un día único, acompañado de tu familia, amigos o empresa. Tambien disfrutando de una gran piscina, hermosas áreas verdes, y un gran quincho para hacer un asado y compartir; garantizando el éxito de cualquier evento. <br /><br /><section id="seOfrece"><div><b>Club deportivo y reacreacion Los Paltos ofrece:</b><ul><li><p>+ Amplio recinto para diferentes celebraciones, con hermosas areas verdes gran Quincho para 130 personas aproximadamente.</p></li><li><p> + Picina de 16mts de largo por 9 de ancho, mas una picina paraninos.</p></li><li><p>+ Areas de juego infantiles construido en madera.</p></li><li><p>+ Comodas instalaciones de servicios higienicos.</p></li><li><p>+ Mesas de pin-pon y taca-taca.</p></li><li><p> + Arriendo de cancha de tenis <em>(optativo con costo adicional)</em>.</p></li><li><p> + Arriendo de cancha de padel <em>(optativo con costo adicional)</em>.</p></li><li><p> + Juegos inflables y cama saltarina <em>(optativo con costo adicional)</em>.</p></li><li><p>+ Caritas pintadas <em>(optativo con costo adicional)</em>.</p></li></ul></div></section><br />El valor del recinto es de $5.000 x persona. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario <br /><br /> *Grupos de entre 15 y 130 personas. Precios especales para grupos mayor a 80 personas; minimo 15 personas. No se incluye el personal, los utensilios de cocina ni las camareras. <br /><br /><button id="centro" class="secondary small" type="button" onclick="toInstructor(this.id)">Conoscan Al Centro</button>',
      instructor: [
        {
          link_id: '5581262',
          source: 'video',
          img_src_color:
            'https://www.instagram.com/reel/DBrEcCXu3nN/embed/?autoplay=1&loop=1',
          img_alt: 'conoscan nuestro quincho por video',
          event_name: 'Una caminata por el centro recreacional Los Paltos',
          event_info:
            ' Independientemente de la ocasión, Club Los Paltos se presenta como el lugar ideal para celebrar una amplia gama de eventos. Sus instalaciones combinan un entorno encantador con un paisaje natural, perfecto para disfrutar de momentos de relajación y recreación en contacto directo con la naturaleza. Aquí encontrarás todo lo necesario para vivir una experiencia única junto a tu familia, amigos o compañeros de trabajo. Contarás con una amplia piscina, extensas áreas verdes y un espacioso quincho para organizar asados y compartir inolvidables momentos, asegurando así el éxito de cualquier celebración.',
        },
      ],
      list: [
        {
          link_id: '8114486',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/yoga_cover-bk.jpeg',
          img_src_color: './assets/images/galleria/eventos/color/yoga_2.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1135651',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/evento2b_bk.jpeg',
          img_src_color: './assets/images/galleria/eventos/color/evento2b.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '6678302',
          source: 'image',
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
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '4588551',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '3190650',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/tugAWar_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/tugAWar.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 6',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '2985797',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 7',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1186776',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 8',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '2931160',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 9',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5009953',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 10',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '6982182',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/image_placeholder-min.png',
          img_src_color:
            './assets/images/galleria/eventos/color/image_placeholder-min.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 11',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1862835',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teambuilding2_bk.png',
          img_src_color:
            './assets/images/galleria/eventos/color/teambuilding2.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'El Evento 12',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'eventos',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: 'eventos_gallery',
          story_id: 'event_story',
          story_content_id: 'event_story_content',
        },
        {
          media_id: 'centro_recreacional',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: 'event_gallery',
          story_id: 'recreational_center',
          story_content_id: 'recreational_center_content',
        },
      ],
    },
  },
  {
    tenis: {
      h6: 'El <b>Club Los Paltos</b> proporciona un entorno en la comuna de Lampa donde las personas pueden disfrutar de actividades deportivas en un lugar encantador, equipado con instalaciones de primera calidad para asegurar que la experiencia sea lo más placentera y segura posible. Nuestras canchas de tenis son reconocidas a nivel regional por ser de las mejores, con superficies completamente niveladas y una abundante capa de arcilla que hace que jugar sea aún más agradable y cómodo. <br /><br /><section id="seOfreceTenis"><div><b>El Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ Alquiler de cancha de tenis construida con una gran cantidad de arcilla.</p><p>+ Cómodas instalaciones de servicios higiénicos para hombres y mujeres.</p><p>+ Classes de tenis <em>(optativo con costo adicional)</em>.</p><br /><b>Las tarifas para el alquiler de cancha son las siguientes:</b><br /><p class="header">Durante la semana, Lunes a Viernes</p><p>+ de 8 a.m. a 1 p.m., $5000 por hora; </p><p>+ de 1 p.m. a 6 p.m., $6000 por hora; </p><p>+ de 7 p.m. a 9 p.m., $9000 por hora. </p><p class="header">Los fines de semana</p><p>+ de 8 a.m. a 10 p.m., $7000 por hora. </p><p>Además, se imparten <b>clases de tenis</b> a un costo de $15,000 por hora.</p></section><br />Estamos abiertos para desde Lunes a Domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario.<br /> *No se provee máquina de encordar o máquina lanza pelotas. Proporcionamos estacionamiento privado.<br /><br /><button id="tenis" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Instructor </button>',
      instructor: [
        {
          link_id: '5587922',
          source: 'video',
          img_src_color:
            'https://www.instagram.com/reel/CdJVUtqgCcV/embed/?autoplay=1&loop=1',
          img_alt: 'video del tenis',
          img_class: 'iframeVideoPortrait',
          event_name: 'Diego Piña',
          event_info:
            ' He estado vinculado al deporte toda mi vida. Mi padre me introdujo al tenis desde temprana edad, llevándonos siempre a diversos clubes con diferentes entrenadores para perfeccionar la técnica. Esta experiencia me ha permitido desarrollar un enfoque metodológico que facilita tanto el aprendizaje efectivo como el respeto por el ritmo individual de cada persona, validando cada fase del proceso de aprendizaje. Me encantaría poder ayudar a otros a mejorar su juego.',
        },
      ],
      list: [
        {
          link_id: '5564122',
          source: 'video',
          img_src_bk: './assets/images/galleria/tenis/tenisLospaltos-bk.png',
          img_src_color:
            'https://www.instagram.com/p/CZaZb0RAaN9/embed/?autoplay=1&loop=1',
          img_alt: 'video de las canchas los paltos',
          img_class: 'iframeVideoLandscape',
          event_name: 'Canchas Los Paltos',
          event_info:
            ' Te gustaría aprender o mejorar tu técnica en el Tenis? En nuestro Club Deportivo los Paltos tenemos clases personalizadas para que perfecciones tu jugada. Encuentra tu equilibrio a través del deporte.',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/tenis/unDiaDeTenis-bk.png',
          img_src_color: './assets/images/galleria/tenis/unDiaDeTenis.png',
          img_alt: 'foto de Eduardo, Rocio, y Diego Piña',
          img_class: '',
          event_name: 'Un dia de Tenis',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          source: 'image',
          img_src_bk: './assets/images/galleria/tenis/juego-bk.jpg',
          img_src_color: './assets/images/galleria/tenis/juego.jpg',
          img_alt: 'foto de Diego Piña tirando al reves',
          img_class: '',
          event_name: 'Tiro al reves',
          event_info: ' Tiro al reves...conoces tu technica',
        },
        {
          link_id: '723250',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/tenis/visitasCanchasTenis-bk.jpg',
          img_src_color:
            './assets/images/galleria/tenis/visitasCanchasTenis.jpg',
          img_alt: 'foto de las canchas los paltos',
          img_class: '',
          event_name: 'Canchas Los Paltos',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          source: 'image',
          img_src_bk: './assets/images/galleria/tenis/canchita-bk.jpg',
          img_src_color: './assets/images/galleria/tenis/canchita.jpg',
          img_alt: 'foto de las canchas los paltos',
          img_class: '',
          event_name: 'Canchas Los Paltos',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos-bk.jpg',
          img_src_color:
            './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos.jpg',
          img_alt: 'foto de 4 participando posando antes de u n juego de tenis',
          img_class: '',
          event_name: 'Partido entre amigos ',
          event_info: ' Participantes de nuestro partido revancha.',
        },
        {
          link_id: '7188566',
          source: 'video',
          img_src_bk: './assets/images/galleria/torneo/tenis-1_bk.png',
          img_src_color:
            'https://www.instagram.com/reel/CgxtYo1AUYd/embed/?autoplay=1&loop=1',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: 'iframeVideoPortrait',
          event_name: 'Evento Tenis 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          source: 'video',
          img_src_bk: './assets/images/galleria/tenis/tenis-bk.png',
          img_src_color:
            'https://www.instagram.com/tv/CaFkOCBJKUg/embed/?autoplay=1&loop=1',
          img_alt: 'video de Diego Piña con alumno',
          img_class: 'iframeVideoLandscape',
          event_name: 'Pauta como comenzar un buen juego',
          event_info:
            ' Sabias que las ventajas de practicar tenis son físicas, sociales y mentales?El tenis es un deporte que favorece la movilidad y flexibilidad de tu cuerpo. Fortalece la musculatura y huesos, también beneficia tu salud cardiovascular, ya que se trata de un ejercicio aeróbico, por ende mejora tu entorno cardiaco y respiratorio. A nivel social es un deporte que se realiza con otras personas, lo que mejora la relación con ellas, evitando el egoísmo e individualismo ya que elimina el estrés. La fortaleza que hace ganar los partidos no es sólo física, también mental. El control de las emociones es clave a la hora de enfrentarse a un partido, y eso se trabaja y se logra. Y tu, ¿cuando comienzas?',
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
        {
          media_id: 'tenis_instructor',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: 'tenisInstructor_gallery',
          story_id: 'tenisInstructor_story',
          story_content_id: 'tenisInstructor_story_content',
        },
      ],
    },
  },
  {
    padel: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br /><section id="seOfreceTenis"><div><b>El Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ Alquiler de cancha de padel</p><p>+ Cómodas instalaciones de servicios higiénicos para hombres y mujeres.</p></p><br /><b>Las tarifas para el alquiler de cancha son las siguientes:</b><br /><p class="header">Lunes a Domingo</p><p>+ de 8 a.m. a 6 p.m., $15000 por 1.5hrs; </p><p>+ de 6 p.m. a 10 p.m., $20000 por 1.5hrs; </p></section><br />Estamos abiertos para desde Lunes a Domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. <br /> *No se provee máquina de encordar o máquina lanza pelotas. Proporcionamos estacionamiento privado.<br /><br />',
      list: [
        {
          link_id: '5564122',
          source: 'video',
          img_src_bk: './assets/images/galleria/padel/padelLosPaltos-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/C6XD3igOPzj/embed/?autoplay=1&loop=1',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: 'iframeVideoPortrait',
          event_name: 'Evento Padel 3',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/padel/padel-game-bk.jpeg',
          img_src_color: './assets/images/galleria/padel/padel-game.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: '',
          event_name: 'Evento Padel 1',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '464724',
          source: 'video',
          img_src_bk: './assets/images/galleria/padel/padelGame_bk.png',
          img_src_color:
            'https://www.instagram.com/reel/C6XD3igOPzj/embed/?autoplay=1&loop=1',
          img_alt: 'foto de Establecimientos de padel',
          img_class: 'iframeVideoPortrait',
          event_name: 'Establecimientos de padel',
          event_info:
            ' Reserven hoy estas lindas canchas de padel. Ofrecemos > Estacionamiento privado > Camarines y baños > Área de descanso > Bebestibles y snacks.',
        },
        {
          link_id: '723250',
          source: 'image',
          img_src_bk: './assets/images/galleria/padel/padle-flyer-bk.png',
          img_src_color: './assets/images/galleria/padel/padle-flyer.png',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: '',
          event_name: 'Evento Padel 2',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '1285519',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/padel/padelNocturnoDomingo-bk.jpeg',
          img_src_color:
            './assets/images/galleria/padel/padelNocturnoDomingo.jpeg',
          img_alt: 'Padel nocturno, de día domingo.',
          img_class: '',
          event_name: 'Americano nocturno en club de pádel los paltos',
          event_info: ' Una sana competencia entre amigos con Eduardo Piña',
        },
        {
          link_id: '9953363',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/padel/americanoNocturno-bk.jpeg',
          img_src_color:
            './assets/images/galleria/padel/americanoNocturno.jpeg',
          img_alt: 'Padel nocturno, de día domingo.',
          img_class: '',
          event_name: 'Americano nocturno en club de pádel los paltos',
          event_info: ' Una sana competencia entre amigos con Eduardo Piña',
        },
        {
          link_id: '7188566',
          source: 'video',
          img_src_bk: 'assets/images/galleria/padel/padelEntreAmigos-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/CyCKa_PAuLj/embed/?autoplay=1&loop=1',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: 'iframeVideoPortrait',
          event_name: 'Partidos entre amigos',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '5509214',
          source: 'video',
          img_src_bk: './assets/images/galleria/padel/padel-3-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/DA4VkvZOCse/embed/?autoplay=1&loop=1',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img_class: 'iframeVideoPortrait',
          event_name: 'Evento Padel 4',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
      ],
      activities: [
        {
          media_id: 'padel',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: 'padel_gallery',
          story_id: 'padel_story',
          story_content_id: 'padel_story_content',
        },
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
    torneos_de_adultos: {
      h6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. <br /><button id="torneo" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Organizador </button>',
      instructor: [
        {
          link_id: '5556722',
          source: 'video',
          img_src_color:
            'https://www.instagram.com/tv/CuKpEhBAro4/embed/?autoplay=1&loop=1',
          img_alt: 'video del tenis',
          event_name: 'Presentador Eduardo Piña',
          event_info:
            ' Siempre nos encontraremos con deportistas que juegan un poco mejor, pero la idea es que continúen superándose al mismo ritmo.',
        },
      ],
      list: [
        {
          link_id: '5564122',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/tournament_bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/tournament.jpeg',
          img_alt:
            'foto de inicio de competencia Claudio Irarrazaval vs Raúl Mercado',
          event_name: 'Claudio Irarrazaval vs Raúl Mercado',
          event_info: ' Categoría C. Claudio Irarrazaval vs Raúl Mercado',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_C-bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_C.jpeg',
          img_alt: 'foto de inicio de competencia Sergio Pino vs Ronald Lagos',
          event_name: 'Sergio Pino vs Ronald Lagos',
          event_info: ' Categoría C. Sergio Pino vs Ronald Lagos',
        },
        {
          link_id: '464724',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_a-bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_a.jpeg',
          img_alt: 'foto de la exposición de los jugadores de la categoría A',
          event_name: 'Exposición de los jugadores de la categoría A',
          event_info:
            ' Categoria A. Exposición de los jugadores de la categoría A',
        },
        {
          link_id: '723250',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/torneo/categoria_a-paddeling-bk.jpeg',
          img_src_color:
            './assets/images/galleria/torneo/categoria_a-paddeling.jpeg',
          img_alt:
            'foto de la exposición de los jugadores de la categoría A- Padel',
          event_name: 'Exposición de los jugadores de la categoría A - Padel',
          event_info:
            ' Categoria A. Exposición de los jugadores de la categoría A',
        },
        {
          link_id: '1285519',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_b_bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_b.jpeg',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Evento Torneo 5',
          event_info:
            ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum.',
        },
        {
          link_id: '9953363',
          source: 'video',
          img_src_bk: './assets/images/galleria/torneo/fernandoGonzalez_bk.png',
          img_src_color:
            'https://www.instagram.com/reel/Cto9X0YA4oD/embed/?autoplay=1&loop=1',
          img_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          event_name: 'Saludo de Fernando González - un gran medalista',
          event_info:
            ' Fernando González quién ganó 3 medallas olímpicas, logro llegar a ser número 5 del mundo y fue finalista del abierto de Australia, nos envía este gran saludo a nuestro club y nuestros participantes.Muchas gracias Fernando!',
        },
        {
          link_id: '7188566',
          source: 'video',
          img_src_bk:
            './assets/images/galleria/torneo/laRojaDeTenisJuvenil-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/CkEwh49gw6y/embed/?autoplay=1&loop=1',
          img_alt: 'Exposicion de La roja del tenis juvenil',
          event_name: 'Exposicion de La roja del tenis juvenil',
          event_info:
            ' Linda tarde para despedir a las estrellas que parten a Turquía a representar a nuestro país en el mundial femenino menores de 16. Qué orgullo de haber podido compartir con ustedes en nuestro Club, hermosa exhibición y está demás decir que sin duda encantadoras, son una gran promesa para nuestro tenis nacional. Aguante el poder femenino. Agradecimientos a la gestión a Carlos Pardo y a don Carlos Marchant',
        },
        {
          link_id: '5509214',
          source: 'video',
          img_src_bk: './assets/images/galleria/torneo/torneoPrimavera_bk.png',
          img_src_color:
            'https://www.instagram.com/p/CXZAHCrLWLy/embed/?autoplay=1&loop=1',
          img_alt: 'Premiacion escalerilla temporada de primavera 2021',
          event_name: 'Premiacion escalerilla temporada de primavera 2021',
          event_info:
            ' Premiacion escalerilla temporada de primavera 2021. Felicitaciones a todos nuestros deportistas. Estamos muy felices de su participación en nuestro club, de verlos mejorar, disfrutar de su proceso y de este bello deporte. Tomaremos un pequeño receso durante este verano respecto a la escalerilla y retomaremos nuestra competencia en marzo 2022. ¡LOS ESPERAMOS!',
        },
      ],
      activities: [
        {
          media_id: 'torneoAdultos',
          media_link: '/',
          media_src: './assets/images/actividades/outdoor_yoga-bk.jpeg',
          media_alt:
            'black and white 3of3 picture of an event celebrated in club los paltos',
          media_cap: 'YOGA',
          gallery_id: 'torneo_gallery',
          story_id: 'torneos_story',
          story_content_id: 'torneos_story_content',
        },
        {
          media_id: 'torneo_organizer',
          media_link: '',
          media_src: '',
          media_alt: '',
          media_cap: '',
          gallery_id: 'torneoOrganizer_gallery',
          story_id: 'torneoOrganizer_story',
          story_content_id: 'torneoOrganizer_story_content',
        },
      ],
    },
  },
];
//Team
var teamArray = [
  {
    h6: 'Bien Venidos al <b>Club los Paltos</b>, un club que se dedirica a brindar un espacio que permita a las personas de la comuna de Lampa recrearse deportivamente, en un precioso lugar con excelentes instalaciones que permitan que la experiencia sea lo más agradable y segura posible. Nuestra mission es contribuir por medio del deporte en la salud de la persona y generar una competencia deportiva saludable y entretenida. <br /><br />  <b>Nuestros Liderazgo</b> está formado por personas apasionadas por servir y garantizar que cada huésped tenga la oportunidad de sentirse cómodo en cualquier área del club, ya sea en el tenis o pádel, o participando en una agradable reunión en el quincho. Prestan toda su atención y dedicación para mantener un alto nivel de excelencia.<br /><br />  <b>Nuestros Instructores</b> que se especializan con una gran pasión y están profesionalmente capacitados para tratar y ayudar a cada persona y niño de todos los niveles a mejorar sus habilidades y alcanzar sus objetivos.<br /><br />  <b>Juntos</b> generan un ambiente que es tanto competitivo como acogedor e inclusivo.',
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
        mem_CLP_role: 'Secretaria del Club Los Paltos ',
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
          'Soy Diego Piña, y puedo afirmar con orgullo que he estado profundamente inmerso en el mundo del deporte a lo largo de toda mi vida. Desde que era muy joven, mi padre infundió en mi hermana y en mí una verdadera pasión por el tenis. Nos llevó a numerosos clubes donde tuvimos la oportunidad de trabajar con una variedad de entrenadores expertos, quienes nos ayudaron a perfeccionar nuestras habilidades técnicas y nos mantuvieron cercanamente vinculados a este fascinante deporte.<br /><br />A la temprana edad de 12 años, mi padre tuvo la visión y la iniciativa de fundar el "Club de Tenis Los Platos." Desde ese momento, mi compromiso con el tenis se ha intensificado significativamente, llevándome a jugar casi todos los días de la semana. A pesar de haber enfrentado ciertas lesiones a lo largo de mi etapa adulta, mi amor por el juego jamás ha disminuido. Además, he buscado enriquecer mis conocimientos a través de múltiples capacitaciones especializadas, con el objetivo de guiar a aquellos que desean aprender y disfrutar de esta extraordinaria disciplina.<br /><br />Gracias a mi extensa experiencia, he sido capaz de desarrollar una metodología pedagógica accesible y efectiva, que se centra en permitir que los participantes adquieran conocimientos de manera eficaz y al ritmo que más les convenga. Este enfoque asegura una validación minuciosa de cada fase en el proceso de aprendizaje.<br /><br />Además, como psicólogo profesional, tengo la responsabilidad y el empeño de proporcionar a mis estudiantes todas las herramientas emocionales necesarias para guiarlos con eficacia. Esto no solo apoya su desarrollo en el ámbito deportivo, sino que también promueve su crecimiento personal y emocional.',
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
    ],
  },
];
