<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La huella hídrica

    .row.align-items-center.my-3.col-lg-12.m-auto        
        .col-auto
          figure
            img(src='@/assets/curso/temas/2/1.png').m-auto(data-aos="fade-right")
        .col
          p(data-aos="fade-up" style="overflow-x: hidden !important") La crisis que existe a nivel mundial sobre el agua, generada por el incremento de la demanda, la contaminación y en general la actividad antrópica, conlleva reconocer la verdadera importancia de este líquido fundamental para la existencia de la vida y la necesidad de mejorar la gestión y alcanzar el desarrollo sostenible de este recurso natural; lo que aumenta el interés de desarrollar y aplicar metodologías o indicadores de sostenibilidad  que permitan determinar y cuantificar la cantidad de agua que se consume y  los impactos que se derivan.
          .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#FFF59D; overflow-x: hidden !important")
            p.mb-2.py-2(style="overflow-x: hidden !important") La huella hídrica tiene por objetivo dar cuenta del uso del agua y su contaminación con relación al consumo de las personas. Además, la huella hídrica se toma como indicador de consumo y contaminación con fines productivos, porque permite saber el volumen de agua directa e indirecta usada y contaminada que se emplea al interior de una organización, ya sea para producir bienes u ofrecer servicios. La huella hídrica tiene en cuenta para su cálculo el ciclo de vida y el agua utilizada de los ríos, lagos y acuíferos (aguas superficiales y subterráneas) para la agricultura, la industria y el uso doméstico, así como el agua de lluvia utilizada para los cultivos (
              i Schneider 
              | y Samaniego, 2009).  Además, según información del Fondo Mundial para la Naturaleza (WWF por sus siglas en inglés), se contempla también el consumo doméstico y la importancia del agua virtual del país (WWF citado por 
              i Schneider 
              | y Samaniego, 2009).
    .row.align-items-center.my-5.col-lg-8.m-auto  
        .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#f0f8ff;")
          p.mb-0.py-3(data-aos="fade-up") La huella hídrica es una de las herramientas que ayuda a detectar los impactos y evaluar los riesgos asociados al uso del agua y hábitos de consumo.

    .row.py-3.justify-content-center(data-aos="fade-right")
      .col-lg-10        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-1
              img.m-3(src='@/assets/curso/temas/2/2.svg', style="width:80px")
            .col-sm-12.col-lg-11
              p.m-2.py-1 Por tanto, teniendo en cuenta los riesgos, se deben desarrollar estrategias que permitan mitigarlos y quedarse solamente con la cuantificación o con determinar la cantidad de agua consumida y contaminada, sino que se debe realizar de manera permanente la evaluación de impactos y priorización de medidas y acciones para minimizarlos.
        Separador.mt-0


      .cont_2_1(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_2_1 2.1  Evolución del concepto    

        p.mb-5.py-1 El concepto de huella hídrica ha evolucionado con el pasar del tiempo, este término surgió en el año 2002 por Arjen Hoekstra quien es considerado el padre de esta denominación, pero tiene raíces desde el año 1992, a partir del nombre de huella ecológica o también como huella medioambiental acuñado por William Rees y Mathis Wackernagel. El siguiente recurso presenta los cambios nominales y las relaciones con el agua.  
      
      .row.justify-content-center(data-aos="fade-right" alt="“Evolución del concepto”. En esta slider se habla sobre la evolución que ha tenido el concepto de huella hídrica al pasar el tiempo, partiendo de huella ecológica en el año 1992 por William Rees y Mathis Wackernagel, agua vital en 1998 por John Anthony Allan, huella hídrica en el 2002 por Arjen Hoekstra y huella de agua en el 2014 por la ISO 14046.")
        .col-lg-10
        .tarjeta.color-secundario
          .p-4.p-lg-5
            SlyderA(tipo="b")
              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Denominación:  huella ecológica - William Rees y Mathis Wackernagel - Año: 1992 
                  p Es un indicador de sostenibilidad que permite medir el impacto ambiental de la sociedad sobre el entorno, mediante la estimación de los recursos naturales existentes y  los requerimientos para satisfacer las necesidades de la población y la asimilación de los residuos producidos. Se encarga de cuantificar la cantidad de superficie de terreno necesaria para de producir lo que la población consume y absorber los desechos que se generan. 
                  p Se encarga de cuantificar la cantidad de superficie de terreno necesaria para de producir lo que la población consume y absorber los desechos que se generan. 
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/2/3.svg', style="width:650px").m-auto

              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Denominación: agua virtual - John Anthony Allan - Año: 1998 
                  p Este indicador hace referencia a la cantidad de agua requerida para la elaboración de un producto o servicio, midiendo los litros de agua utilizados durante el cultivo, el crecimiento, el procesamiento, la fabricación, el transporte y la venta del producto, porque no solo cuantifica el agua directa, sino que también la  indirecta. 
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/2/4.svg', style="width:650px").m-auto
                    
              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Denominación: huella hídrica - Arjen Hoekstra.  - Año: 2002
                  p Este concepto está ligado al de agua virtual, el cual tiene una aplicación más amplia porque no solo se refiere a la cuantificación  del volumen de agua contenido en cada producto, sino que es un indicador de consumo y contaminación con fines productivos, es decir  que permite conocer la cantidad de agua que aprovecha una persona, un grupo de consumidores, una región, país o toda la humanidad en su utilización diario para producir comida, en procesos industriales, en generación de energía, etc.   
                  p La huella hídrica, se clasifica en azul, verde y gris.
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/2/5.svg', style="width:650px").m-auto

              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Denominación: huella de agua - ISO 14046 . - Año: 2014
                  p Hace referencia a la cuantificación de los impactos del uso y contaminación del agua que resultan del ciclo de vida, contando con un ámbito específico que se basa en el análisis del ciclo de vida de productos, procesos y organizaciones. 
                  p La huella de agua hace una evaluación de los posibles impactos medioambientales relacionados con dicho consumo, ya que es un enfoque de impacto ambiental. 
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/2/6.svg', style="width:650px").m-auto      

      Separador.mt-0
      .cont_2_2(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_2_2 2.2  Tipos de huella    

        p.mb-3.py-1 Con la evolución del concepto de huella hídrica a través del tiempo, también evolucionó y se amplió los campos de aplicación, llegando a ser una herramienta adicional que complementa los mecanismos tradicionales y convencionales para la gestión integral del recurso hídrico. Pero, para lograr entender todo lo referente a la huella hídrica es necesario conocer y entender conceptos básicos previos como agua azul, agua verde, agua gris y agua virtual, los cuales son fundamentales y sirven de base conceptual de los diferentes tipos de huellas hídricas existentes, además son primordiales a la hora emplear algunas metodologías para la cuantificación de la huella hídrica, debido a que la cuantificación de la huella hídrica es producto de la identificación y caracterización de procesos antrópicos que afectan el agua verde o azul. 
        p.mb-5.py-1 En el siguiente video, se ampliará el concepto de la clasificación del agua y los tipos de huella hídrica:

        figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2ePoA4MPq1o" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      


</template>

<script>
export default {
  name: 'Tema2',
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
