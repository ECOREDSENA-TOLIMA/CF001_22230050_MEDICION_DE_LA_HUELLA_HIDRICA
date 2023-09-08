export default {
  global: {
    componenteFormativo: 'La huella hídrica',
    descripcionCurso:
      'En este componente formativo se abordan el agua y algunas temáticas que permitirán comprender de forma general la evolución del concepto de huella hídrica y su normatividad, además de los componentes, tipos y metodologías existentes para su medición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'El agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ciclo hidrológico, usos y calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normatividad ambiental',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La huella hídrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evolución del concepto ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de huella ',
            hash: 't_2_2',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología para el cálculo de la huella hídrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Water Footprint Network (WFT)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Norma ISO 14046:2014',
            hash: 't_3_2',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estudios relacionados con la huella hídrica',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/cfa_001_22230050.zip',
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
      tema: 'El agua',
      referencia:
        'Ministerio de ambiente, vivienda y desarrollo territorial. (2010). Política Nacional para la Gestión Integral del Recurso Hídrico. Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      tipo: 'Documento',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica-nacional-Gestion-integral-de-recurso-Hidrico-web.pdf',
    },
    {
      tema: 'Evaluación multisectorial de la huella hídrica en Colombia',
      referencia:
        'Campuzano, C.; González Valencia, J.; Guzmán Cabrera, J.; Rodríguez Ortiz, C.; Arévalo Uribe, D.; Parada Puig, G.; Zárate Torres, E.; Kuiper, D. (2015) Evaluación multisectorial de la huella hídrica en Colombia. Resultados por subzonas hidrográficas en el marco del Estudio Nacional del Agua. CTA, GSILAC, COSUDE and IDEAM. ',
      tipo: 'Documento',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023272/HH_ENA2014.pdf ',
    },
    {
      tema:
        'Metodología para cálculo de la huella hídrica                                                                ',
      referencia:
        'Agualimpia, O. N. G., Andina, P. S. (2016). Manual de aplicación de evaluación de huella hídrica acorde a la norma ISO 14046.',
      tipo: 'Documento',
      link:
        'https://fch.cl/wp-content/uploads/2019/12/manual-aplicacion-iso-14-046-suizagua-1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida',
      significado:
        'etapas consecutivas e interrelacionadas de un sistema del producto, desde la adquisición de materia prima o de su generación a partir de recursos naturales hasta la disposición final.',
    },
    {
      termino: 'Ciclo hidrológico',
      significado:
        'conjunto continuo de etapas y cambios que atraviesa el agua en la naturaleza.',
    },
    {
      termino: 'Huella de agua',
      significado:
        'cuantificación de los impactos del uso del agua desde el análisis del ciclo de vida. ',
    },
    {
      termino: 'Huella hídrica',
      significado:
        'indicador del agua dulce usada, alterada y contaminada directa o indirectamente por la humanidad, que permite evaluar los riesgos asociados y desarrollar estrategias para mitigarlos.',
    },
    {
      termino: 'Huella hídrica azul',
      significado:
        'volumen de agua dulce empleada (incorporada o evaporada) en un proceso productivo proveniente de los recursos hídricos del planeta, es decir, las aguas superficiales y subterráneas. ',
    },
    {
      termino: 'Huella hídrica gris',
      significado:
        'volumen de agua contaminada en la producción de los bienes y servicios o requerida para diluir los contaminantes hasta obtener agua de calidad buena para el ambiente y los humanos.',
    },
    {
      termino: 'Huella hídrica verde',
      significado:
        'volumen de agua almacenada en el suelo como humedad proveniente de la precipitación, que no se convierte en escorrentía, y que se incorpora o se evapora en un proceso productivo. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Agualimpia, O. N. G., Andina, P. S. (2016). Manual de aplicación de evaluación de huella hídrica acorde a la norma ISO 14046. ',
      link: '',
    },
    {
      referencia:
        'Campuzano Ochoa, C. A., González Valencia, J. E., Guzmán Cabrera, A. C., Rodríguez Ortiz, C. M., Arévalo Uribe, D., Parada Puig, G. (2014). Evaluación multisectorial de la huella hídrica en Colombia. Resultados por subzonas hidrográficas en el marco del Estudio Nacional del Agua',
      link: '',
    },
    {
      referencia:
        'CTA, GSILAC, COSUDE & IDEAM. Evaluación multisectorial de la huella hídrica en Colombia. Resultados por subzonas hidrográficas en el marco del Estudio Nacional del Agua 2014, Medellín, Bogotá. [En línea]. 2015',
      link: '',
    },
    {
      referencia:
        'Cirelli, A. F. (2012). El agua: un recurso esencial. Química viva, 11(3), 147-170.',
      link: '',
    },
    {
      referencia:
        'Hoekstra, A. Y., Chapagain, A. K., Mekonnen, M. M., & Aldaya, M. M. (2011). The water footprint assessment manual: Setting the global standard. Routledge.',
      link: '',
    },
    {
      referencia: 'IDEAM. (2015). Estudio Nacional del Agua 2014. IDEAM.',
      link: '',
    },
    {
      referencia:
        'ISO 14046:2014 Environmental management -- Water footprint -- Principles, requirements and guidelines.',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:14046:ed-1:v1:es',
    },
    {
      referencia:
        'Mazari-Hiriart, M. (2003). El agua como recurso. Cómo ves, 54, 10-12.',
      link: '',
    },
    {
      referencia:
        'Martínez, A., Chargoy, J., Puerto, M., Suppen, N., Rojas, D., & Villarraga, J. (2016). Huella de Agua (ISO 14046) en América Latina, análisis y recomendaciones para una coherencia regional. Centro de Análisis de Ciclo de Vida y Diseño Sustentable CADIS, Embajada de Suiza en Colombia, Agencia Suiza para la Cooperación y el Desarrollo COSUDE, 90.',
      link: '',
    },
    {
      referencia:
        'Schneider, H., & Samaniego, J. (2009). La huella del carbono en la producción, distribución y consumo de bienes y servicios.  Comisión Económica para América Latina y el Caribe (CEPAL), 29-34.',
      link: '',
    },
    {
      referencia: 'World Wildlife Fund (WWF) (2008), Informe Planeta Vivo. ',
      link: 'http://assets.panda.org/downloads/lpr_2008_span_lo_res.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yisela Andrea Vidales Vásquez',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Caterine Bedoya Mejía ',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Corrector de estilo ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Sergio Ausguto Ardila Ortiz',
          cargo: 'Diseñador instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
