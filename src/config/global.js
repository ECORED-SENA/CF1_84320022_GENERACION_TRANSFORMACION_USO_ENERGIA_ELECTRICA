export default {
  global: {
    componenteFormativo:
      'Generación, transformación y uso de la energía eléctrica',
    descripcionCurso:
      'Este componente formativo explora la generación y transformación de la energía eléctrica, abordando conceptos como el átomo, tipos de energía (renovables y no renovables), y las diferentes fuentes (solar, eólica, hidráulica, geotérmica). También explica el funcionamiento de centrales eléctricas y conceptos básicos de electricidad, como voltaje e intensidad, resaltando la importancia de la energía en la sociedad y la industria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fuentes de energía',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Energía en Colombia',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/84320022_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Energía ',
      referencia:
        'Lifeder Edu. (2022). La ENERGÍA explicada: fuentes, tipos, propiedades, aplicaciones. [Archivo de video] YouTube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=iO7GUgcfJL8&ab_channel=LifederEdu  ',
    },
    {
      tema: 'Fuentes de energía ',
      referencia:
        'EcologíaVerde. (2020). Las FUENTES de energía más UTILIZADAS en el mundo. [Archivo de video] YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=j4WhHGgtWaY&ab_channel=Ecolog%C3%ADaVerde  ',
    },
    {
      tema: 'Fuentes de energía ',
      referencia:
        'CuriosaMente. (2022). ¿Qué tan verdes son las energías "verdes"?. [Archivo de video] YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=nQcXm9rmdZM&ab_channel=CuriosaMente  ',
    },
    {
      tema: 'Energía en Colombia ',
      referencia:
        'Ministerio de Minas y Energía. (2020). ¿De dónde viene la energía eléctrica en Colombia?. [Archivo de video] YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=e2I_kNsqFPo&ab_channel=MinisteriodeMinasyEnerg%C3%ADa%E2%9A%A1%EF%B8%8F  ',
    },
    {
      tema: 'Energía en Colombia ',
      referencia:
        'Ministerio de Minas y Energía. (2021). ¿Sabes cuál es la energía que mueve a Colombia y que es clave para la transición energética? [Archivo de video] YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8nSWp3gHPVM&ab_channel=MinisteriodeMinasyEnerg%C3%ADa%E2%9A%A1%EF%B8%8F  ',
    },
  ],
  glosario: [
    {
      termino: 'Biomasa',
      significado:
        'energía obtenida de materia orgánica como plantas o desechos animales. ',
    },
    {
      termino: 'Central eléctrica',
      significado:
        'instalación destinada a transformar energía primaria en energía eléctrica. ',
    },
    {
      termino: 'Corriente eléctrica',
      significado:
        'movimiento de electrones a través de un conductor en un circuito cerrado. ',
    },
    {
      termino: 'Energía primaria',
      significado:
        'forma de energía disponible en la naturaleza antes de ser convertida en electricidad. ',
    },
    {
      termino: 'Energía',
      significado:
        'capacidad para realizar trabajo; no puede ser creada, solo transformada. ',
    },
    {
      termino: 'Fisión nuclear',
      significado:
        'proceso de dividir el núcleo de un átomo, liberando energía que se puede convertir en electricidad. ',
    },
    {
      termino: 'Fuentes no renovables',
      significado:
        'fuentes limitadas que no se renuevan en corto tiempo, como el petróleo, carbón y gas natural. ',
    },
    {
      termino: 'Fuentes renovables',
      significado:
        'fuentes de energía inagotables generadas por procesos continuos, como el sol, viento y agua. ',
    },
    {
      termino: 'Generador',
      significado:
        'dispositivo que convierte energía mecánica en electricidad mediante una turbina. ',
    },
    {
      termino: 'Voltaje',
      significado:
        'diferencia de potencial eléctrico entre dos puntos de un circuito, medida en voltios. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Buitrago, M.R. (2003). <em>Tecnología constructiva 3</em>. Envigado: Susaeta Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Deléage, J.P. & Souchon, C. (1996). <em>La energía como tema interdisciplinar de la educación</em>. UNESCO. ',
      link: '',
    },
    {
      referencia:
        'García, F.J. (2009). <em>Ámbito científico-tecnológico</em>. Equipo Editex. ',
      link: '',
    },
    {
      referencia:
        'Martínez, A. (1999). <em>Análisis del binomio Energía - Medio Ambiente</em>. Murcia: Universidad de Castilla de la Mancha. ',
      link: '',
    },
    {
      referencia:
        'Roldán, J. (2008). <em>Fuentes de energía</em>. Madrid: Cengage Learning Paraninfo. ',
      link: '',
    },
    {
      referencia:
        'Senner, A. (1994). <em>Principios de electrotecnia</em>. Barcelona: Reverté. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmar Martínez Urrutia ',
          cargo: 'Experto temático  ',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
