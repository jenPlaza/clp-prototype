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
    link_href: '',
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
    link_name: 'Eventos',
    link_href: './eventos.html',
    icon_src: './assets/images/icons/balloons-white.png',
    icon_alt: 'white balloons icon',
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
    link_name: 'Escalerillas',
    link_href: './escalerillas.html',
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
    media_link: './escalerillas.html',
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
    media_link: 'mailto:tenislospaltos@hotmail.com',
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
//Calendars
var reservArray = [
  {
    calendar_id: 'eventCalendar',
    calendar_icon_src: './assets/images/icons/balloons-white.png',
    calendar_icon_alt: 'events calendar icon',
    calendar_name: 'Eventos',
    calendar_paragraph: 'Para reservar el quincho hay un minimo de 15 personas',
    calendar_iframe_src:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NxoazHuQ0hnnB0pEC2aTKYmsjvvaupBSXuoCpd6Rwqdosp05BZ4zmhzVQf5siYOGmgMXxxF6P?gv=true',
  },
  {
    calendar_id: 'tenisCalendar',
    calendar_icon_src: './assets/images/icons/tennis.gif',
    calendar_icon_alt: 'tenis calendar icon',
    calendar_name: 'Tenis',
    calendar_paragraph: '',
    calendar_iframe_src:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NxoazHuQ0hnnB0pEC2aTKYmsjvvaupBSXuoCpd6Rwqdosp05BZ4zmhzVQf5siYOGmgMXxxF6P?gv=true',
  },
  {
    calendar_id: 'padelCalendar',
    calendar_icon_src: './assets/images/icons/paddeling-white.png',
    calendar_icon_alt: 'padel calendar icon',
    calendar_name: 'Padel',
    calendar_paragraph: 'Para jugar padel, hay que ser una reservacion.',
    calendar_iframe_src:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NxoazHuQ0hnnB0pEC2aTKYmsjvvaupBSXuoCpd6Rwqdosp05BZ4zmhzVQf5siYOGmgMXxxF6P?gv=true',
  },
];
// Galleries
var gallery = [
  {
    home: {
      h6: '<h6>El <b>Club Los Paltos</b>, un centro recreacional y deportivo, se encuentra a menos de 80 minutos del centro de Santiago y a 55 minutos del aeropuerto internacional Arturo Benitez. Este centro deportivo está reconocido regionalmente por contar con una de las mejores canchas de arcilla. Las canchas de tierra batida son ideales para jugar al tenis, ya que facilitan un bote más alto, reduciendo drásticamente la velocidad de la pelota. Estas canchas están construidas con la técnica "clay court" y tienen una superficie estander de acuerdo a la Normativa Internacional. Son de estilo tradicional, completamente parejas y con una gran cantidad de arcilla que hace aún más agradable ofreciendo a cada tenista una experiencia nueva y divertida. Ofrecemos alquileres por hora, clases para niños y adultos, e inscripción en torneos. También contamos con pistas de pádel. Si el tenis o padel no es lo tuyo, reúne a 15 de tus mejores amigos y amigas y alquilen el quincho de este centro recreativo. Podrán disfrutar de un exquisito asado a leña con acceso a la piscina. Proporcionamos estacionamiento privado.</h6><section><h3 style="width: 100%; display: flex"><button type="button" onclick="toEvents();">Exploren Los Eventos</button></h3></section>',
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
      notifications: [],
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
      h6: '<h6>No importa la ocasión, <b>Club Los Paltos</b> es el lugar perfecto para albergar una variedad de eventos. Nuestras instalaciones ofrecen un espacio maravilloso con un paisaje natural con las características necesarias para relajarse y recrearse, en contacto con la naturaleza y todo lo necesario para disfrutar de un día único, acompañado de tu familia, amigos o empresa. Tambien disfrutando de una gran piscina, hermosas áreas verdes, y un gran quincho para hacer un asado y compartir; garantizando el éxito de cualquier evento. <br /><br /><section id="seOfrece"><div><b>Club deportivo y reacreacion Los Paltos ofrece:</b><ul><li><p>+ Amplio recinto para diferentes celebraciones, con hermosas areas verdes gran Quincho para 130 personas aproximadamente.</p></li><li><p> + Picina de 16mts de largo por 9 de ancho, mas una picina paraninos.</p></li><li><p>+ Areas de juego infantiles construido en madera.</p></li><li><p>+ Comodas instalaciones de servicios higienicos.</p></li><li><p>+ Mesas de pin-pon y taca-taca.</p></li><li><p> + Arriendo de cancha de tenis <em>(optativo con costo adicional)</em>.</p></li><li><p> + Arriendo de cancha de padel <em>(optativo con costo adicional)</em>.</p></li><li><p> + Juegos inflables y cama saltarina <em>(optativo con costo adicional)</em>.</p></li><li><p>+ Caritas pintadas <em>(optativo con costo adicional)</em>.</p></li></ul></div></section><br />El valor del recinto es de $5.000 x persona. Estamos abiertos para eventos de martes a domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario <br /><br /> *Grupos de entre 15 y 130 personas. Precios especales para grupos mayor a 80 personas; minimo 15 personas. No se incluye el personal, los utensilios de cocina ni las camareras.</h6><section class="button"><h3><button id="centro" class="secondary small" type="button" onclick="toInstructor(this.id)">Conoscan Al Centro</button></h3></section>',
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
          img_alt:
            'Foto de personas practicando yoga en una zona verde junto a la piscina del Club Los Paltos.',
          img_class: '',
          event_name: 'Un dia de Yoga',
          event_info:
            'Un grupo de personas participa activamente en una sesión de yoga organizada como parte de un evento recreativo, disfrutando del ambiente tranquilo y revitalizante que ofrece una amplia zona verde ubicada junto a la piscina del prestigioso Club Los Paltos.',
        },
        {
          link_id: '1135651',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/team-Building-bk.jpeg',
          img_src_color:
            './assets/images/galleria/eventos/color/team-Building.jpg',
          img_alt: '3 individuos brincan en pelotas tolva',
          img_class: 'imgCenter',
          event_name: 'Un dia de formación de equipo',
          event_info:
            'Se llevó a cabo un animado evento corporativo en el prestigioso Club Los Paltos, donde los empleados de la organización tuvieron la oportunidad de participar en una jornada especialmente diseñada para fomentar la cooperación y el espíritu de equipo. En esta actividad, los asistentes fueron cuidadosamente organizados en diversos equipos que compitieron amistosamente en una serie de dinámicos juegos enfocados en el desarrollo de habilidades de trabajo grupal, fortaleciendo al mismo tiempo la colaboración mutua y la camaradería entre compañeros. A lo largo del día, predominó un ambiente vibrante y lleno de entusiasmo, diseñado para propiciar tanto el trabajo conjunto como la interacción social entre colegas. Este contexto permitió a los participantes disfrutar y compartir momentos significativos, repletos de risas, aprendizajes y conexiones personales que reforzaron los lazos dentro del equipo.',
        },
        {
          link_id: '6678302',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/Event3_bk.png',
          img_src_color: './assets/images/galleria/eventos/color/Event3.png',
          img_alt:
            'foto de comidas caseras en la mesa espicamente ensaldas, pastel de choclo, y pan amasad',
          img_class: '',
          event_name: 'Un asado a leña',
          event_info:
            'Un asado a leña cuidadosamente preparado para realzar cada detalle de un almuerzo corporativo, acompañado por una selección de frescas y variadas ensaladas que aportan equilibrio y color al menú. A esto se suma el irresistible aroma del pan amasado recién horneado, junto con un pastel de choclo elaborado de manera artesanal, evocando el auténtico sabor casero. Toda esta experiencia gastronómica se lleva a cabo en el acogedor quincho del Club Los Paltos, un lugar que brinda el ambiente idóneo para disfrutar de una jornada llena de tradición, camaradería y sabores inolvidables.',
        },
        {
          link_id: '2207899',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/babyShower-bk.jpg',
          img_src_color:
            './assets/images/galleria/eventos/color/babyShower.jpg',
          img_alt: 'padres besandose habriendo regalos de su baby shower',
          img_class: 'imgCenter',
          event_name: 'Iam Reeeds Baby Shower',
          event_info:
            'La celebración de un baby shower se llevó a cabo como un evento especial dentro del marco de una reunión familiar, donde unos entusiastados y cariñosos futuros padres compartieron su alegría y emoción mientras esperan con ansias la llegada de su querida hija. El emotivo evento tuvo lugar en las hermosas instalaciones del Club Los Paltos, que proporcionaron el escenario perfecto para este momento lleno de amor, ternura y grandes expectativas por el comienzo de una nueva etapa en sus vidas.',
        },
        {
          link_id: '4588551',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/jornadaDeAuto-bk.jpg',
          img_src_color:
            './assets/images/galleria/eventos/color/jornadaDeAuto.jpg',
          img_alt: 'foto de de la jornada de auto cuidado en el autobus.',
          img_class: '',
          event_name: 'La Jornada de Auto Cuidado',
          event_info:
            ' La organización de la Jornada de Autocuidado, concebida como una actividad principal dentro del marco de un evento corporativo, tiene el propósito fundamental de rendir homenaje y dar realce a la importancia de la Educación Parvularia, destacando su valor en el desarrollo integral de los más pequeños. Este encuentro busca no solo fortalecer la identidad profesional de quienes se dedican a esta trascendental labor, sino también promover espacios de reflexión, aprendizaje y bienestar personal para todos los participantes involucrados.',
        },
        {
          link_id: '3190650',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/fiesta-bk.jpg',
          img_src_color: './assets/images/galleria/eventos/color/fiesta.jpg',
          img_alt: 'foto de grupo de amigos y amigas',
          img_class: 'imgCenter',
          event_name: 'Celebracion de Fin de Año',
          event_info:
            'Un animado grupo de jóvenes se congregó para llevar a cabo una celebración cargada de entusiasmo, alegría y camaradería en ocasión de la tan esperada fiesta de fin de año. Este evento, cuidadosamente organizado como parte de una jornada recreativa, tuvo lugar en las distinguidas instalaciones del exclusivo club Los Paltos. Rodeados de un ambiente festivo y rebosante de energía, los asistentes disfrutaron de una velada verdaderamente mágica, enriquecida por una selección vibrante de música, intensas sesiones de baile y una serie de momentos memorables que, sin duda, quedarán grabados con cariño en sus corazones y recuerdos.',
        },
        {
          link_id: '2985797',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teamBuildingActivities-bk.jpeg',
          img_src_color:
            './assets/images/galleria/eventos/color/teamBuildingActivities.jpg',
          img_alt:
            'Personas logran pasar el hula hoop manteniéndose unidas de las manos.',
          img_class: 'imgCenter',
          event_name: 'Atravésando el hula-hoop',
          event_info:
            'El Club Los Paltos fue el escenario de un vibrante evento corporativo que reunió a los empleados de la organización en una experiencia pensada para fortalecer la colaboración y el trabajo en equipo. Durante la jornada, los participantes se enfrentaron a desafíos dinámicos como pasar el hula hoop sin soltarse las manos, poniendo a prueba su coordinación y cooperación. Fue una ocasión perfecta para disfrutar de momentos únicos y significativos, donde las risas, los aprendizajes y las nuevas conexiones se convirtieron en protagonistas. Sin duda, esta iniciativa contribuyó a estrechar los lazos entre colegas y a construir un equipo más unido y fuerte.',
        },
        {
          link_id: '1186776',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/18Sept-bk.jpeg',
          img_src_color: './assets/images/galleria/eventos/color/18Sept.jpg',
          img_alt:
            'foto del quinchos con mesas decorada para la celebracion del 18 de Septiembre',
          img_class: 'imgCenter',
          event_name: '18 de Septiembre',
          event_info:
            'Con motivo de la celebración del Día de la Independencia,organizado como un evento corporativo especial en las exclusivas instalaciones del Club Los Paltos. La decoración del lugar resaltaba los colores y el espíritu de la temporada, mientras los asistentes compartían risas y brindis. Cada detalle de la celebración fue cuidadosamente preparado para asegurar que todos vivieran una experiencia única, creando un cierre perfecto para un 18 de Septiembre',
        },
        {
          link_id: '2931160',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/bday-bg.png',
          img_src_color: './assets/images/galleria/eventos/color/bday.png',
          img_alt: 'un mesa decorada de cumpleaños, bajo un arbol con globos',
          img_class: '',
          event_name: 'un cumpleaños picnic',
          event_info:
            'Se celebró un cumpleaños estilo picnic en los hermosos espacios verdes del Club Los Paltos. La familia disfrutó de un día encantador rodeada de amigos y seres queridos, festejando el especial octavo cumpleaños de una niña.',
        },
        {
          link_id: '5009953',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/matrimonio-bk.jpeg',
          img_src_color:
            './assets/images/galleria/eventos/color/matrimonio.jpg',
          img_alt:
            'foto del quicho con mesas decoradas para todos los invitados',
          img_class: 'imgBottom',
          event_name: 'Se Espera Los Novios',
          event_info:
            'La celebración de un baby shower se llevó a cabo como un evento especial dentro del marco de una reunión familiar, donde unos familiares y amistades esperan con anticipacion la llegada de los novios. El emotivo evento tuvo lugar en las hermosas instalaciones del Club Los Paltos, que proporcionaron el escenario perfecto para este momento lleno de amor, y festividad por el comienzo de una nueva etapa en sus vidas.',
        },
        {
          link_id: '6982182',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/evento2b_bk.jpeg',
          img_src_color: './assets/images/galleria/eventos/color/evento2b.jpeg',
          img_alt: 'Foto del chef cocinando en el quincho del Club Los Paltos.',
          img_class: 'imgCenter',
          event_name: 'Picnic Corporativo',
          event_info:
            ' Un delicioso y completo picnic diseñado especialmente para un grupo corporativo en el exclusivo Club Los Paltos puede convertirse en una experiencia memorable. Este evento puede incluir una variada selección de alimentos frescos y saludables, desde exquisitos sándwiches gourmet y ensaladas elaboradas con ingredientes de temporada, hasta opciones dulces como pasteles artesanales o frutas frescas. Además, bebidas como jugos naturales, limonadas frescas y tal vez incluso cocteles ligeros podrían complementar la ocasión a la perfección. Un espacio al aire libre, rodeado de verde y naturaleza, con áreas acondicionadas para la comodidad de los asistentes, contribuiría a crear un ambiente relajado e ideal para fomentar la interacción entre los compañeros. Este tipo de experiencia no solo puede servir como una pausa placentera durante la jornada, sino también como una oportunidad para fortalecer vínculos y disfrutar de un momento único fuera del entorno laboral común.',
        },
        {
          link_id: '1862835',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/eventos/blackAndWhite/teamBuildingGames-bk.jpeg',
          img_src_color:
            './assets/images/galleria/eventos/color/teamBuildingGames.jpg',
          img_alt: '7 jugadores en un juego de equipo.',
          img_class: 'imgCenter',
          event_name: 'Quien Gano?',
          event_info:
            ' Un evento corporativo en el que los empleados fueron organizados en distintos equipos con el propósito de disfrutar de una jornada llena de competencias amistosas, colaboración mutua y fortalecimiento de la camaradería. Durante el día, se promovió un ambiente dinámico y ameno que favoreció tanto el trabajo en equipo como la interacción entre colegas, creando momentos de conexión y diversión compartida.',
        },
      ],
      notifications: [],
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
      h6: 'El <b>Centro de Tenis</b>  de Club Los Paltos proporciona un entorno en la comuna de Lampa donde las personas pueden disfrutar de actividades deportivas en un lugar encantador, equipado con instalaciones de primera calidad para asegurar que la experiencia sea lo más placentera y segura posible. Nuestras canchas de tenis son reconocidas a nivel regional por ser de las mejores, con superficies completamente niveladas y una abundante capa de arcilla que hace que jugar sea aún más agradable y cómodo. <br /><br /><section id="seOfreceTenis"><div><b>El Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ Alquiler de cancha de tenis construida con una gran cantidad de arcilla.</p><p>+ Cómodas instalaciones de servicios higiénicos para hombres y mujeres.</p><p>+ Classes de tenis <em>(optativo con costo adicional)</em>.</p><br /><b>Las tarifas para el alquiler de cancha son las siguientes:</b><br /><p class="header">Durante la semana, Lunes a Viernes</p><p>+ de 8 a.m. a 1 p.m., $5000 por hora; </p><p>+ de 1 p.m. a 6 p.m., $6000 por hora; </p><p>+ de 7 p.m. a 9 p.m., $9000 por hora. </p><p class="header">Los fines de semana</p><p>+ de 8 a.m. a 10 p.m., $7000 por hora. </p><p>Además, se imparten <b>clases de tenis</b> a un costo de $15,000 por hora.</p></section><br />Estamos abiertos desde Lunes a Domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario.<br /> *No se provee máquina de encordar o máquina lanza pelotas. Proporcionamos estacionamiento privado.<br /><br /><button id="tenis" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Instructor </button>',
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
            '¿Te interesa aprender o perfeccionar tu técnica en el tenis? En el Club Deportivo Los Paltos ofrecemos clases personalizadas diseñadas para que mejores tu rendimiento en la cancha. Descubre el equilibrio y la energía que el deporte puede brindarte.',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/tenis/unDiaDeTenis-bk.png',
          img_src_color: './assets/images/galleria/tenis/unDiaDeTenis.png',
          img_alt: 'foto de Eduardo, Rocio, y Diego Piña',
          img_class: 'adjustCenter',
          event_name: 'Un dia de Tenis',
          event_info:
            'Un día dedicado al tenis se convierte en mucho más que un simple deporte cuando lo compartes con tus seres queridos. Es una ocasión perfecta para disfrutar de la compañía de la familia, fortalecer lazos y crear recuerdos inolvidables, todo mientras se practica una actividad saludable y divertida.',
        },
        {
          link_id: '464724',
          source: 'image',
          img_src_bk: './assets/images/galleria/tenis/juego-bk.jpg',
          img_src_color: './assets/images/galleria/tenis/juego.jpg',
          img_alt: 'foto de Diego Piña tirando al reves',
          img_class: 'adjustTop',
          event_name: 'Tiro al reves',
          event_info: '¿Tiro al revés...? ¿Conoces esta técnica?',
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
            ' Esta es una fotografía tomada desde un dron que muestra las canchas de Los Paltos.',
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
            ' Actualmente hay canchas disponibles  para quienes deseen disfrutar de un buen juego. No importa si eres principiante o experto, esta es tu oportunidad para pasar un buen rato, ejercitarte y compartir momentos divertidos. No olvides reservar con anticipación y aprovechar al máximo el espacio. ¿Te animas a jugar?',
        },
        {
          link_id: '9953363',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos-bk.jpg',
          img_src_color:
            './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos.jpg',
          img_alt: 'foto de 4 participando posando antes de u n juego de tenis',
          img_class: 'adjustCenter',
          event_name: 'Partido entre amigos ',
          event_info:
            ' Los participantes de nuestro esperado partido de revancha.',
        },
        {
          link_id: '7188566',
          source: 'video',
          img_src_bk: './assets/images/galleria/torneo/tenis-1_bk.png',
          img_src_color:
            'https://www.instagram.com/reel/CgxtYo1AUYd/embed/?autoplay=1&loop=1',
          img_alt: 'video de un partido con Diego Piña',
          img_class: 'iframeVideoPortrait',
          event_name: 'Partido de tenis con Diego Piña',
          event_info: 'Un emocionante partido junto a Diego Piña.',
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
      notifications: [
        'Escalerillas Tenis Marzo 2025.&nbsp;&nbsp;Reservaen sus Puestos!',
        'Torneos Tenis de Verano 2024.&nbsp;&nbsp;INSCRIBANCE HOY!',
        'Llamen a + 56977660445',
        '&nbsp;&nbsp;&nbsp;',
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
      reservaciones: [
        {
          calendar_id: 'tenisCalendar',
          calendar_icon_src: './assets/images/icons/tennis.gif',
          calendar_icon_alt: 'tenis calendar icon',
          calendar_name: 'Tenis',
          calendar_paragraph: 'Para jugar tenis, hay que ser una reservacion.',
          calendar_iframe_src:
            'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NxoazHuQ0hnnB0pEC2aTKYmsjvvaupBSXuoCpd6Rwqdosp05BZ4zmhzVQf5siYOGmgMXxxF6P?gv=true',
        },
      ],
    },
  },
  {
    padel: {
      h6: 'Una sana dosis de competencia, en el <b>Centro de Padel</b>  Club Los Paltos, siempre resulta emocionante, especialmente cuando se comparte con amigos. Es en esos momentos donde la camaradería y el entusiasmo por superar límites se combinan para crear una experiencia verdaderamente enriquecedora. Competir con tus seres queridos no solo fortalece los lazos de amistad, sino que también nos impulsa a crecer, aprender y disfrutar cada paso del proceso. ¿Acaso hay una mejor forma de invertir el tiempo que inspirándonos unos a otros para convertirnos en nuestra mejor versión? La mezcla perfecta entre desafío y amistad aporta un toque especial que transforma cualquier actividad en algo mucho más significativo y divertido. Reúne a cuatro de tus mejores amigos o amigas y ven a disfrutar de las mejores canchas de pádel en Lampa. Reserva hoy!<br /><br /><section id="seOfreceTenis"><div><b>El Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ Alquiler de cancha de padel</p><p>+ Cómodas instalaciones de servicios higiénicos para hombres y mujeres.</p><br /><b>Las tarifas para el alquiler de cancha son las siguientes:</b><br /><p class="header">Lunes a Domingo</p><p>+ de 8 a.m. a 6 p.m., $15000 por 1.5hrs; </p><p>+ de 6 p.m. a 10 p.m., $20000 por 1.5hrs; </p></section><br />Estamos abiertos desde Lunes a Domingo, de 8 a.m. a 10 p.m., y cerramos el 25 de diciembre. Por favor, llamen a la oficina de alquileres al +56 9 7766 0445 o simplemente reserven en https://clublospaltos.com/calendario. <br /> *No se provee máquina de encordar o máquina lanza pelotas. Proporcionamos estacionamiento privado.<br /><br />',
      list: [
        {
          link_id: '5564122',
          source: 'video',
          img_src_bk: './assets/images/galleria/padel/padelLosPaltos-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/C6XD3igOPzj/embed/?autoplay=1&loop=1',
          img_alt: 'video mostrando las canchas Los Paltos',
          img_class: 'iframeVideoPortrait',
          event_name: 'Canchas Padel Los Paltos',
          event_info:
            'Un paseo por las canchas de pádel en Los Paltos. Explorar las canchas de pádel en Los Paltos es una experiencia que combina deporte, naturaleza y un ambiente relajante. Este espacio no solo es ideal para los aficionados al pádel, sino también para quienes disfrutan de una caminata tranquila mientras observan los partidos o simplemente respiran aire fresco.',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/padel/padel-game-bk.jpeg',
          img_src_color: './assets/images/galleria/padel/padel-game.jpeg',
          img_alt:
            'foto de una posada de amigos en las canchas de padel Los Paltos',
          img_class: '',
          event_name: 'Entre Amigos',
          event_info:
            'Compartir una partida de pádel entre compañeros  siempre es una experiencia divertida y enriquecedora. Este deporte, que ha ganado gran popularidad en los últimos años, no solo es ideal para mantenerse en forma, sino que también fomenta la camaradería y el espíritu de equipo.',
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
            'Reserven hoy estas lindas canchas de padel. Ofrecemos > Estacionamiento privado > Camarines y baños > Área de descanso > Bebestibles y snacks.',
        },
        {
          link_id: '723250',
          source: 'image',
          img_src_bk: './assets/images/galleria/padel/padle-flyer-bk.png',
          img_src_color: './assets/images/galleria/padel/padle-flyer.png',
          img_alt: 'flyer del las canchas de padel Los Paltos',
          img_class: '',
          event_name: 'Canchas de padel en Lampa',
          event_info:
            'Únete y disfruta de las mejores canchas de pádel en Lampa.',
        },
        {
          link_id: '1285519',
          source: 'image',
          img_src_bk:
            './assets/images/galleria/padel/padelNocturnoDomingo-bk.jpeg',
          img_src_color:
            './assets/images/galleria/padel/padelNocturnoDomingo.jpeg',
          img_alt: 'Padel nocturno, de día domingo.',
          img_class: 'adjustCenter',
          event_name: 'Americano nocturno en club de pádel los paltos',
          event_info:
            'Una competencia amistosa y saludable entre amigos junto a Eduardo Piña',
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
          event_info:
            'Una competencia amistosa y saludable entre amigos junto a Eduardo Piña',
        },
        {
          link_id: '7188566',
          source: 'video',
          img_src_bk: 'assets/images/galleria/padel/padelEntreAmigos-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/CyCKa_PAuLj/embed/?autoplay=1&loop=1',
          img_alt: 'foto de un partido de pádel entre amigos',
          img_class: 'iframeVideoPortrait adjust',
          event_name: 'Partidos entre amigos',
          event_info:
            '¿Quién se llevará la victoria en este partido de pádel, tú o él?',
        },
        {
          link_id: '5509214',
          source: 'video',
          img_src_bk: './assets/images/galleria/padel/padel-3-bk.png',
          img_src_color:
            'https://www.instagram.com/reel/DA4VkvZOCse/embed/?autoplay=1&loop=1',
          img_alt: 'foto de un partido de pádel entre 4 compañeros',
          img_class: 'iframeVideoPortrait',
          event_name: 'Padel Game',
          event_info:
            ' Un emocionante partido de pádel disputado entre cuatro compañeros.',
        },
      ],
      notifications: [],
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
      h6: '<h6>El comienzo de una <b>escalerilla o torneo</b> siempre trae consigo una emocionante mezcla de nervios y expectativas, especialmente cuando los deportistas se enfrentan en un marco que combina un espíritu sano con la intensidad de la adrenalina. Estos eventos no solo ponen a prueba las habilidades individuales y el talento único de cada participante, sino que también promueven un sólido sentido de camaradería y respeto mutuo entre todos los competidores.<br /><br />A medida que todos los participantes se preparan para dar lo mejor de sí mismos, el ambiente se llena de energía positiva y un firme compromiso con la superación personal. En este desafío constante, los objetivos van más allá de la simple búsqueda de la victoria; se trata también de aprender, evolucionar y extraer lecciones valiosas de cada encuentro. Este enfoque es precisamente el núcleo de las escalerillas o torneos del Club Los Paltos, que se convierten en una plataforma esencial para fomentar el desarrollo personal y deportivo de sus miembros.<br /><br /><b>Las Escalerillas</b> organizados por el Club Los Paltos se extienden por aproximadamente cuatro meses, con un partido semanal que suma cerca de 15 emocionantes encuentros. Cada grupo reúne a 16 jugadores dentro de una misma categoría, organizados en niveles que van desde el mas avanzado hasta los principiantes: Honor, A, B, C y D. La finalidad de este formato es reunir a deportistas con habilidades similares, fomentando una competición equilibrada y llena de desafíos.<br /><br /><b>Los Torneos </b> organizados por el Club Los Paltos adoptan un formato de repechaje que incluye a 32 participantes, asegurando que todos tengan una segunda oportunidad. Este sistema permite que quienes inician con tropiezos aún puedan avanzar en la competición. La primera fase se lleva a cabo en modalidad de eliminación directa con 16 duelos. Los ganadores avanzan al cuadro principal en las categorías A, B y C, mientras que los perdedores pasan al cuadro de repechaje en la categoría D. En esta etapa, los eliminados tienen la posibilidad de reingresar al torneo más adelante, añadiendo nuevas dosis de emoción y ofreciendo nuevas oportunidades en el camino hacia un premio.<br /><br />El inicio de una nueva temporada de escalerillas o torneos se percibe como un capítulo lleno de emoción tanto para los comprometidos atletas como para los apasionados aficionados. Es un espacio donde los sueños comienzan a tomar forma y donde el esfuerzo constante y la dedicación logran su reconocimiento merecido. Al final del día, una competencia sana no se define únicamente por quien obtiene el primer lugar, sino por los lazos fortalecidos y el aprendizaje compartido en este inspirador viaje.<br /><br /><section id="seOfreceTenis"><div><b>Las Escalerillas Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ Categorias Honor A, B, C, D</p><p>+ Modalidad Singles</p><p>+ El club facilita las pelotas (se cambian cada 3 partidos)</p><p>+ Copas, medallas, y premios especiales a los finalistas</p><p>+ Asado de convivencia gratuito para todos los participantes en premiacion al final de la escalerilla.</p><br /><div><b>Los Torneos Club Los Paltos ofrece las siguientes instalaciones y servicios:</b><p>+ 16 Duelos</p><p>+ El club facilita las pelotas (se cambian cada 3 partidos)</p><p>+ Copas, medallas, y premios especiales a los finalistas</p><p>+ Asado de convivencia gratuito para todos los participantes en premiacion al final de la escalerilla.</p><br /><b>Las tarifas son las siguientes:</b><br /><p class="header">+ Inscripción de Escalerillas $15.000</p><p class="header">+ Menusaulidad de Escalerillas $35.000</p><p class="header">+ Inscripción de Torneos $20.000</p></section><br /> Por favor, llamen a la oficina de registracion para participar en la proxima escalerillas al +56 9 7766 0445. </h6><section class="button" ><h3><button id="torneo" class="secondary small" type="button" onclick="toInstructor(this.id);">Conoscan Al Organizador </button></section>',
      instructor: [
        {
          link_id: '5556722',
          source: 'video',
          img_src_color:
            'https://www.instagram.com/tv/CuKpEhBAro4/embed/?autoplay=1&loop=1',
          img_alt: 'video del tenis',
          img_class: 'iframeVideoPortrait adjust',
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
          img_class: '',
          event_name: 'Claudio Irarrazaval vs Raúl Mercado',
          event_info: ' Categoría C. Claudio Irarrazaval vs Raúl Mercado',
        },
        {
          link_id: '5516395',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_C-bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_C.jpeg',
          img_alt: 'foto de inicio de competencia Sergio Pino vs Ronald Lagos',
          img_class: '',
          event_name: 'Sergio Pino vs Ronald Lagos',
          event_info: ' Categoría C. Sergio Pino vs Ronald Lagos',
        },
        {
          link_id: '464724',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_a-bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_a.jpeg',
          img_alt: 'foto de la exposición de los jugadores de la categoría A',
          img_class: '',
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
          img_class: 'catA',
          event_name: 'Exposición de los jugadores de la categoría A - Padel',
          event_info:
            ' Categoria A. Exposición de los jugadores de la categoría A',
        },
        {
          link_id: '1285519',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/categoria_b_bk.jpeg',
          img_src_color: './assets/images/galleria/torneo/categoria_b.jpeg',
          img_alt: 'foto de la exposición de los jugadores de la categoría B',
          img_class: '',
          event_name: 'Exposición de los jugadores de la categoría B',
          event_info:
            'Categoria B. Exposición de los jugadores de la categoría B',
        },
        {
          link_id: '9953363',
          source: 'video',
          img_src_bk: './assets/images/galleria/torneo/fernandoGonzalez_bk.png',
          img_src_color:
            'https://www.instagram.com/reel/Cto9X0YA4oD/embed/?autoplay=1&loop=1',
          img_alt: 'Un video de Fernando Gonzalez mandando saludos',
          img_class: 'iframeVideoPortrait adjust fernando',
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
          img_class: 'iframeVideoLandscape laRoja',
          event_name: 'Exposicion de La roja del tenis juvenil',
          event_info:
            ' Linda tarde para despedir a las estrellas que parten a Turquía a representar a nuestro país en el mundial femenino menores de 16. Qué orgullo de haber podido compartir con ustedes en nuestro Club, hermosa exhibición y está demás decir que sin duda encantadoras, son una gran promesa para nuestro tenis nacional. Aguante el poder femenino. Agradecimientos a la gestión a Carlos Pardo y a don Carlos Marchant',
        },
        {
          link_id: '5509214',
          source: 'image',
          img_src_bk: './assets/images/galleria/torneo/torneoPrimavera_bk.png',
          img_src_color: './assets/images/galleria/torneo/torneoPrimavera.jpg',
          img_alt: 'Premiacion escalerilla temporada de primavera 2021',
          img_class: '',
          event_name: 'Premiacion escalerilla temporada de primavera 2021',
          event_info:
            ' Premiacion escalerilla temporada de primavera 2021. Felicitaciones a todos nuestros deportistas. Estamos muy felices de su participación en nuestro club, de verlos mejorar, disfrutar de su proceso y de este bello deporte. Tomaremos un pequeño receso durante este verano respecto a la escalerilla y retomaremos nuestra competencia en marzo 2022. ¡LOS ESPERAMOS!',
        },
      ],
      notifications: [
        'Escalerillas Tenis Marzo 2025.&nbsp;&nbsp;Reservaen sus Puestos!',
        'Torneos Tenis de Verano 2024.&nbsp;&nbsp;INSCRIBANCE HOY!',
        'Llamen a + 56977660445',
        '&nbsp;&nbsp;&nbsp;',
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
    h6: 'Bienvenidos a <b>Club los Paltos</b>, un club que se dedica a brindar un espacio que permita a las personas de la comuna de Lampa recrearse deportivamente, en un precioso lugar con excelentes instalaciones que permitan que la experiencia sea lo más agradable y segura posible. Nuestra mision es contribuir por medio del deporte en la salud de la persona y generar una competencia deportiva saludable y entretenida.<br /><br />  <b>Quienes lideran</b> nuestro club son personas apasionadas por servir y garantizar que tengas la oportunidad de sentirte cómodo en cualquier área del club, ya sea en el tenis o pádel, o participando en una agradable reunión en el quincho. Prestan toda su atención y dedicación para mantener un alto nivel de excelencia.<br /><br /><b>Nuestros Instructores</b> que trabajan con gran pasión y profesionalismo, están capacitados para tratar y ayudar a cada persona y niño de todos los niveles a mejorar sus habilidades y alcanzar sus objetivos.<br /><br /> <b>Juntos</b> generan un ambiente que es tanto competitivo como acogedor e inclusivo.',
    list: [
      {
        team_id: 'ceo',
        mem_image_src: './assets/images/team/Eduardo_Pina.png',
        mem_image_alt: 'Foto de remate de Eduardo Piña',
        mem_name: 'Eduardo Piña',
        mem_CLP_role: 'Director Ejecutivo y Organizador del Club Los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: '',
        mem_web_page: '',
        mem_socialmedia_icon: '',
        mem_link: '/',
        mem_bio:
          'Presentamos a Eduardo Piña, quien ocupa el puesto de presidente ejecutivo del Club Los Paltos. Con una destacada trayectoria en el ámbito hotelero, su objetivo primordial en la actualidad radica en asegurar que cada visitante experimente una estancia confortable y satisfactoria en todas las áreas y servicios que ofrece el club.',
      },
      {
        team_id: 'dir',
        mem_image_src: './assets/images/team/Julio_Pina.png',
        mem_image_alt: 'Foto de remate de Julio Piña',
        mem_name: 'Julio Piña',
        mem_CLP_role:
          'Director Ejecutivo y Organizador del Club Los Paltos - Paddeling',
        mem_country: ' Santiago, Chile',
        mem_pro_title: '',
        mem_web_page: '',
        mem_socialmedia_icon: '',
        mem_link: '',
        mem_bio:
          'Conozcan a Julio Piña, quien actualmente se desempeña como el director ejecutivo del prestigioso Club Los Paltos - Paddeling. Con una trayectoria profesional que abarca más de tres décadas de experiencia en el competitivo mundo de las ventas, Julio ha decidido canalizar toda su dedicación y conocimientos hacia una nueva misión: asegurar que cada jugador de pádel que forma parte del club tenga las herramientas, el apoyo y las oportunidades necesarias para lograr sus metas deportivas y alcanzar el máximo de su potencial en esta disciplina.',
      },
      {
        team_id: 'communicaciones',
        mem_image_src: './assets/images/team/Geraldine_Pina.png',
        mem_image_alt: 'Foto de remate de Gerarldine Acevedo',
        mem_name: 'Gerarldine Piña Acevedo',
        mem_CLP_role: 'Secretaria del Club Los Paltos ',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Directora de Colegio Miraflores de Lampa',
        mem_web_page: '',
        mem_socialmedia_icon: './assets/images/icons/facebook-bk.png',
        mem_link: 'https://www.facebook.com/geraldine.acevedo/',
        mem_bio:
          'Geraldine Acevedo Piña es una profesional multifacética que ha sabido equilibrar con gran éxito sus múltiples responsabilidades actuales, dividiendo su tiempo entre su labor como secretaria del club Los Paltos y su papel como directora financiera en el Colegio Miraflores de Lampa. En su función como secretaria del club, Geraldine asume la tarea de gestionar y coordinar un amplio rango de actividades administrativas y operativas, todas esenciales para garantizar el funcionamiento eficiente y fluido de esta organización. Por otro lado, como directora financiera del Colegio Miraflores de Lampa, desempeña una labor fundamental en la planificación estratégica y la administración de los recursos económicos de la institución, tareas que requieren una visión clara y una gestión efectiva. <br /><br />Conexión con este colegio tiene raíces profundas y emocionantes, ya que su trayectoria profesional dentro de esta comunidad comenzó casi inmediatamente después de obtener su título como profesora de educacion basica. Su crecimiento personal y profesional ha sido muy notable desde entonces, progresando a pasos agigantados debido a su dedicación y compromiso. Ha cultivado una relación muy cercana con los estudiantes a lo largo de los años, demostrando un interés genuino por su bienestar y desarrollo. Actualmente, pone un especial empeño en supervisar el progreso y los esfuerzos de cada uno de sus alumnos, asegurándose de que puedan alcanzar su máximo potencial.<br /><br /> El aporte de Geraldine no solo es significativo, sino también clave para mantener un entorno organizado, eficiente y orientado al éxito tanto en el club como en el colegio. Su trabajo crea las condiciones necesarias para fomentar una participación activa, un aprendizaje significativo y un disfrute integral en ambos contextos, convirtiéndola en una pieza esencial dentro de estas comunidades que confían plenamente en su capacidad y visión.',
      },
      {
        team_id: 'tenis',
        mem_image_src: './assets/images/team/Diego_Pina.png',
        mem_image_alt: 'Foto de remate de Diego Piña',
        mem_name: 'Diego Thoomas Piña Acevedo',
        mem_CLP_role: 'Instructor y Organizador de Torneos del Club Los Paltos',
        mem_country: ' Santiago, Chile',
        mem_pro_title: 'Psicologo Clinica en Practica Privado',
        mem_web_page: 'https://chilepsicologos.cl/psicologo/diego-pina',
        mem_socialmedia_icon: './assets/images/icons/instagram-bk.png',
        mem_link: 'https://www.instagram.com/diegothoomas/',
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
        mem_socialmedia_icon: './assets/images/icons/linkedin-circle-bk.png',
        mem_link: 'https://www.linkedin.com/in/jenn-plaza-339613321/',
        mem_bio:
          'Obtuve mi licenciatura en Diseño y Desarrollo Web de Full Sail University el 24 de noviembre de 2020. Soy oriunda de Miami, Florida, pero me mudé a Orlando, Florida, en 2006. Soy la hermana menor de dos. Disfruto de la jardinería, pintura, y recientemente he comenzado a cultivar mis propios alimentos orgánicos. Desde 2006 trabajé para el American Hotel and Lodging Educational Institute (AHLEI) hasta su fusión con la National Restaurant Association (NRA), en el 2017. Durante ese tiempo descubrí mi pasión por los sitios web y decidí regresar a la escuela. Me gradué en 2020 y desde entonces he participado en varios proyectos de voluntariado, adquirido experiencia laboral y refinado mis habilidades mientras implemento mejores prácticas. En junio de 2024 me uní a AYPAD como voluntaria y en Noviembre con Club los Paltos, lo que me ha permitido participar en una variacion de proyectos; ha sido una experiencia enriquecedora y estoy buscando nuevos desafíos.',
      },
    ],
  },
];
