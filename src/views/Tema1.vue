<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Protocolos de pruebas y mediciones
    p.mt-5(data-aos="fade-up") El agua es la fuente y el motor indispensable de vida en el planeta, esta cubre aproximadamente el 75% de su superficie y como se observa en la figura 1 la gran mayoría de esta agua es salada y pertenece a los mares y océanos, tan solo el 2,5% es agua dulce, de la cual  proveniente el 80% de las regiones polares, el 19% de agua subterránea y tan solo el 1% de agua de superficie accesible la cual según Cirelli, A. F. (2012), se encuentra principalmente en lagos (52%), humedales (38%) y ríos y vapor atmosféricos (10%). 

    .row.mx-5(data-aos="fade-right")
            .col-sm-12.col-lg-8
              .row(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-secundario.mb-1
                    p.mb-0 #[b Figura 1.] 
                      i Distribución del agua

    figure.pb-0
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-6
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
              img(src="@/assets/curso/temas/1/1.svg" style="width:600px" data-aos="zoom-in-up"  alt="“Distribución del agua”. En la imagen se representa el porcentaje de distribución del agua a nivel mundial: con un 97.5% en los océanos y un 2.5% en agua dulce, De ese total: 2/3 se encuentran en las regiones polares. El resto forma los sistemas de agua subterránea, quedando menos del 1% en agua de ríos, lagos, pantanos y agua atmosférica.")
            
        .row.justify-content-center.pt-5(data-aos="fade-right")
          .col-md-5.offset-0.mb-4.mb-md-4
            .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #F6F6F6; overflow-x: hidden !important")
              p.px-3.pt-1.pb-1 Nota. Tomada de Mazari-Hiriart, M. (2003).  

          .row.align-items-center.my-3.col-lg-10.m-auto        
          .col-auto
            figure
              img(src='@/assets/curso/temas/1/2.png').m-auto(data-aos="fade-right")
          .col
            p(data-aos="fade-up" style="overflow-x: hidden !important") En el caso específico de Colombia, el país cuenta con un patrimonio hídrico importante entre humedales, ríos, lagunas, lagos, ciénagas, arrecifes, y estuarios, etc., siendo uno de los países con mayor oferta hídrica natural, lo que hace que sea catalogado como potencia hídrica mundial como lo indica la principal organización de conservación de la naturaleza a nivel global, WWF.
            .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#FFF59D; overflow-x: hidden !important")
              p.mb-2.py-2(style="overflow-x: hidden !important") Pero esta riqueza hídrica principalmente por la acción irresponsable y desmesurada del hombre en búsqueda del desarrollo viene siendo afectada y contaminada, presentando alteraciones físicas, químicas y biológicas que generan una modificación en su composición perdiendo sus características naturales y variaciones en el ciclo natural del agua, el cual es denominado ciclo hidrológico que permite identificar la ubicación, distribución y circulación del agua en el planeta.

        p.mt-5 Por tanto, es primordial para conservar la vida ya que los seres humanos son dependientes de este líquido vital, realizar uso sostenible una adecuación gestión del recurso hídrico, donde haya una verdadera conciencia sobre los efectos e impactos negativos que se generan sobre el agua por el estilo de vida los productos que se consumen y las formas de producción actual.
        Separador.mt-0

      .cont_1_1(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_1_1 1.1  Ciclo hidrológico, usos y calidad.

        .row.align-items-center.my-5.col-lg-10.m-auto        
          .col-auto
            figure
              img(src='@/assets/curso/temas/1/3.svg').m-auto(data-aos="fade-right")
          .col
            p(data-aos="fade-up") El agua es un recurso finito, que además de ser esencial para la vida, es fundamental para el desarrollo de las sociedades; esté líquido vital tiene gran variedad de usos tanto naturales (mantenimiento de ríos, plantas, ecosistemas, transporte de sedimentos, etc.) como antrópicos (aprovisionamiento, industria, agricultura, ganadería, recreación, domésticos, minería, energía, etc.). Usos que son necesarios identificar y conocer, para así lograr hacer un uso sustentable de este líquido vital, donde se conozca y tenga en cuenta todas y cada una de las fases del ciclo hidrológico. 
            p(data-aos="fade-up") El agua está en continuo movimiento y circulación, cambia de un estado (líquido, sólido y gaseoso) pero no disminuye ni aumenta su cantidad; de forma continua se encuentra transitando entre los diversos depósitos existentes en la atmósfera, lo que ocasiona que su funcionamiento se da a través de un ciclo denominado ciclo hidrológico, el cual es un proceso que incluye las precipitaciones, evaporación, escorrentía e infiltración. Como se puede observar a en la siguiente figura:
            
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .row.mx-5(data-aos="fade-right")
          .col-sm-12.col-lg-12
            .row(data-aos="fade-right")
              .col-sm-12.col-lg-12
                .titulo-sexto.mb-0.color-secundario.mb-1
                  p.mb-0 #[b Figura 2.] 
                    i Componentes de la huella hídrica 

    .row.align-items-center.mb-5      
      .col
      img(src="@/assets/curso/temas/1/4.svg" data-aos="zoom-in-up" alt="“Ciclo Hidrológico”. En la imagen animada se muestra el ciclo del agua en cada una de sus fases. ⦁ Precipitación ⦁ Infiltración ⦁ Escorrentía ⦁ Evaporación.")

    p.my-5 A pesar de que la cantidad de agua existente es constante, la distribución en el tiempo varía y aumenta el deterioro en la calidad  del producto, debido al crecimiento demográfico e industrial y  de las actividades que se desarrollan se hace indispensable conocer la relación directa que hay entre el uso del agua y los ecosistemas que la proporcionan, para así lograr que el agua dulce sea eficientemente distribuida y utilizada, preservando las fuentes naturales o lugares de captación y realizando los tratamientos requeridos para la eliminación de aguas contaminadas y desechos.

  
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/1/5.png',)
          
        p El agua es usada para gran cantidad de finalidades, pero en diversas partes del mundo existe un déficit hídrico debido a que el requerimiento de agua es mayor a la oferta hídrica existente, lo que hace que la cuantificación de la huella hídrica tenga gran relevancia y ayude a conservar la disponibilidad del recurso hídrico, ya que de acuerdo a Cirelli, A. F. (2012), el sector económico que mayor demanda de agua requiere es la agricultura, le sigue la creciente demanda para el turismo y finalmente el uso urbano e industrial, lo cual evidencia que la necesidad de acceso a este líquido vital aumenta cada día y a la vez es menos disponible. 
      
      .col-md.tarjeta.color-acento-contenido.p-5(style="border-top-right-radius: 20px !important; border-bottom-right-radius: 20px !important")
        .row.justify-content-center.mb-4 
          .col-6
            figure
              img(src='@/assets/curso/temas/1/6.png', )
          
        p Además de la disponibilidad, otro factor a tener en cuenta es la calidad del agua, la cual tiene efectos directos en la salud, pues es diferente el agua empleada en la agricultura (cultivos, riegos) que la del consumo humano, siendo una premisa no emplear agua de calidad superior a la requerida; por tanto, para lograr determinar la alteración del agua se hace necesario verificar la cantidad y concentración de sustancias (suspendidas o disueltas) y de microorganismos.
      Separador.mt-0

      .cont_1_2(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_1_2 1.2  Normatividad ambiental

      p.mb-5 A nivel internacional se han desarrollado políticas y objetivos de desarrollo sostenible, para lograr garantizar la disponibilidad y sostenibilidad de los recursos hídricos, mediante el uso eficiente del agua, las cuales han sido adoptadas por organizaciones como las Naciones Unidas (ONU) y la Organización para la Cooperación y el Desarrollo Económico  (OCDE).


      .titulo-sexto.color-acento-contenido.mb-0
        h5 Tabla 1.
        i Tabla de normativa ambiental  
     
    .tabla-b.color-acento-contenido
      .tabla-b__header
        h4.mb-0 NORMATIVIDAD 
      table(alt="“Tabla de normativa ambiental”. En la imagen se muestran las normativas vigentes en cuanto al manejo y uso del recurso hídrico. Se divide en dos columnas: 1. La lista de decretos  2. A qué hace referencia cada decreto.")
        caption Tomada de la normatividad del Ministerio del Medio Ambiente y Desarrollo Sostenible.
        tr
          th Decreto - ley 2811 de 1974  
          td Código nacional de recursos naturales renovables y de protección al medio ambiente.
        tr
          th Decreto 1449 de 1977 Decreto 1541 de 1978
          td Reiteran estos lineamientos del decreto 2811 de 1974.
        tr
          th Decreto 1594 de 1984 
          td Usos del agua y residuos líquidos. Establece los parámetros para los diversos tratamientos de aguas de acuerdo con su uso y disposición.
        tr
          th Ley 373 de 1997
          td Establece el programa para el uso eficiente y ahorro de agua.
        tr
          th Decreto 475 de 1998
          td Normas técnicas de calidad del agua potable.
        tr
          th Guía de ahorro y uso eficiente del agua 2002 
          td Guía de ahorro y uso eficiente del agua, la cual incluyó estrategias para el ahorro y uso eficiente del agua.
        tr
          th Decreto 3440 de 2004 
          td Tazas retributivas por vertimientos.
        tr
          th Decreto 155 de 2004
          td Sobretasas por utilización de agua.
        tr
          th Sobretasas por utilización de agua
          td Reglamenta planes de saneamiento y manejo de vertimientos.
        tr
          th Decreto 4742 de 2005 
          td Modifica el decreto 155 de 2004. Sobretasas por utilización de agua.
        tr
          th Decreto 1480 de 2007  
          td Prioriza a nivel nacional el ordenamiento e intervención de cuentas hidrográficas.
        tr
          th Decreto 1323 de 2007  
          td Creación de sistemas de información del recurso hídrico.
        tr
          th Decreto 1324 de 2007  
          td Creación del registro de Usuarios del Recurso Hídrico.
        tr
          th Decreto 3930 de 2010 
          td Disposiciones relacionadas con los usos del recurso hídrico y los vertimientos del recurso hídrico, al suelo y alcantarillados.
        tr
          th Política Nacional de Gestión Integral de Recursos Hídricos (2010) 
          td Instrumento orientador de la gestión integral del agua, que cuenta con un horizonte de 12 años que contiene la formulación de los objetivos y estrategias del país para el recurso eficiente del agua, como también el manejo de recursos por parte de todos los sectores, considerando la concertación de los aspectos sociales, económicos y ambientales. <br><br> Se implementará a través del Plan Hídrico Nacional, mediante sus líneas de acción estratégicas, con programas y proyectos específicos a implementar en el corto plazo (2014), medio plazo (2018) y largo plazo (2022).
        tr
          th Decreto 2667 de 2012 
          td Reglamenta la tasa retribuida por la utilización directa e indirecta del agua como receptor de los vertimientos puntuales y se toman otras determinaciones.
        tr
          th Resolución 0631 de 2015 
          td Por la cual se establecen los parámetros y los valores máximos permisibles en los vertimientos puntuales a cuerpo de agua superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.
        tr
          th Decreto 1076 de 2015 
          td Decreto único reglamentario del sector ambiente y desarrollo sostenible.

    .row.align-items-center.my-5.col-lg-10.m-auto        
      .col-auto
        figure
          img(src='@/assets/curso/temas/1/7.svg').m-auto(data-aos="fade-right")
      .col
        p(data-aos="fade-up") En Colombia existe gran cantidad de normatividad ambiental y políticas públicas para la gestión, uso eficiente y ahorro del agua (ver Tabla de normatividad Ambiental), siendo el Ministerio de ambiente y desarrollo sostenible la institución encargada de la gestión del medio ambiente y de los recursos naturales, este organismo rector formula las políticas y la reglamentación entorno al recurso hídrico y tiene adscrito otras entidades de apoyo técnico y científico que se encargan del ordenamiento, manejo y uso del agua, como el Instituto de Hidrología Meteorología y Estudios Ambientales (IDEAM) o corporaciones autónomas regionales; pero de manera específica en el país no existe normatividad específica de la huella hídrica, estas entidades lo que han adelantado son evaluaciones multisectoriales de la huella hídrica en Colombia.
      

    
    




     
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
