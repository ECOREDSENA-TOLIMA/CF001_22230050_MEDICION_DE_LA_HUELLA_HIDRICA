<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodología para el cálculo de la huella hídrica
   
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        figure
          .row.justify-content-center(data-aos="fade-right")
            img(src="@/assets/curso/temas/3/1.svg" data-aos="zoom-in-up" alt= " La búsqueda del desarrollo y las diversas actividades del ser humano, han generado un alto nivel de contaminación, afectando significativamente el medio ambiente y la calidad del agua. A esta situación, se le ha llamado Huella Hídrica.")

    p.mt-5 Para controlar el impacto generado, se han diseñado diversos enfoques metodológicos que cuantifican la huella hídrica y la huella de agua:  estos enfoques están basados en el ciclo de vida y son herramientas que buscan conocer el consumo de agua relacionado con diferentes tipos de análisis y las consecuencias de ese consumo y  para ello se utilizan diferentes metodologías. 
    p.mt-3 Cada metodología tiene distinto campo de aplicación y esto depende del objetivo del estudio que se quiera llevar a cabo y el fin que quiera darse a los resultados obtenidos; sin embargo, cada enfoque es complementario del otro y a pesar de sus diferencias, ambos son necesarios para la toma de decisiones sobre la sustentabilidad en el uso de los recursos hídricos que favorecen las necesidades humanas. 
    p.mt-3.mb-5 Son dos enfoques metodológicos que permiten cuantificar la huella hídrica son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/3/2.svg',  style="height: 250px", alt="“Metodologías de cálculo”. En esta imagen se hace referencia a las dos formas de cuantificar la huella hídrica, la  Metodología de la Water Footprint Network (WFN) que tiene en cuenta, la cantidad de agua necesaria (empleada directa e indirectamente) para producir un producto u ofrecer un servicio y asimilar los contaminantes que se generan, para lo que incluye el agua azul, agua verde y agua gris y la Metodología ISO 14046 que está basado en métricas que cuantifican los potenciales impactos medioambientales relacionados con la contaminación del agua durante el ciclo de vida de un producto")
        h4.mb-4.text-center Metodología de la 
          i Water Footprint Network<br> (WFN) 
        p Tiene en cuenta, la cantidad de agua necesaria (empleada directa e indirectamente) para producir un producto u ofrecer un servicio y asimilar los contaminantes que se generan, para lo que incluye el agua azul, agua verde y agua gris. 
      
      .col-md.tarjeta.color-secundario.p-5(style="border-top-right-radius: 20px !important; border-bottom-right-radius: 20px !important")
        .row.justify-content-center.mb-4 
          .col-8
            figure
              img(src='@/assets/curso/temas/3/3.svg',  style="height: 250px" )
        h4.mb-5.text-center Metodología ISO 14046
        p Se enfoca en el concepto de huella de agua  y está basado en métricas que cuantifican los potenciales impactos medioambientales relacionados con la contaminación del agua durante el ciclo de vida de un producto.

      Separador.mt-0

    .cont_3_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_1 3.1 
          i Water Footprint Network 
          | (WFT)  

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-12          
          .row 
            .col-md-10.offset-md-1
              .bloque-texto-g.color-primario.p-5
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/3/4.svg')})`}"
                )
                .bloque-texto-g__texto.p-5.m-2
                  p.p-0(data-aos="fade-up") De acuerdo a la metodología planteada por la 
                    i Water Footprint Network 
                    |(WTF), la huella hídrica es un indicador multidimensional que establece el volumen de consumo por origen, por contaminación y además está vinculada a una localización geográfica y a un periodo de tiempo determinado, es decir lugar – tiempo claro.
                    br

      .row.justify-content-center.mb-0(data-aos="fade-right")
        .col-lg-12  
          .row.align-items-center.mt-5.col-lg-10.m-auto             
            .col
              .cajon.p-2.mt-0.col-lg-12.m-auto.mb-4(style="background-color:#BAEAFF; overflow-x: hidden !important")
                p.mb-2.py-2(style="overflow-x: hidden !important") Según lo propuesto por Arjen Hoekstra (2002), la huella hídrica está compuesta por tres tipos de usos de agua, denominados huella azul, gris y verde, pero se les une el Agua Virtual; la cual como ya se ha mencionado, hace relación al agua que contiene la exportación e importación de productos y según (Allan, 1998 citado por Schneider, H., & Samaniego, J. 2009), el concepto fue introducido como una forma de solucionar los problemas de escasez a través de la importación del agua que contienen los productos, ya sean éstos agrícolas o industriales.
              p(data-aos="fade-up" style="overflow-x: hidden !important") Siendo necesario para el cálculo total de la huella hídrica la identificación y caracterización de las huellas azul, verde y gris, lo que hace que sea un indicador diferente a la medida clásica de extracción de agua, ya que esta contempla estos componentes, como también no se limita al uso directo del agua sino que incluye el uso indirecto.
            .col-auto
              figure
                img(src='@/assets/curso/temas/3/5.svg').m-auto(data-aos="fade-right")
  
            .titulo-principal.color-acento-contenido

      .tabla-b.color-acento-contenido
      .tabla-b__header
      .row.justify-content-center.mb-0(data-aos="fade-right")
        .col-lg-12  
            .row.my-3.col-lg-10.m-auto        
              .col.mx-2
                p(data-aos="fade-up") En general, los componentes de la huella hídrica se muestran en la figura 4 y, de acuerdo con la metodología para la cuantificación de la huella hídrica propuesta por 
                  i Water Footprint Network 
                  | (WTF), está enfocada no solo a cuantificar el uso y contaminación directa o indirecta del agua de acuerdo al área de interés, es decir, la huella hídrica bajo esta metodología puede ser aplicada a gran variedad de casos:
              .col.mx-2
                .row.col-lg-12(style= "max-height: 75px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Sectores económicos. 
                  .titulo-principal.p-0
                .row.col-lg-12.my-0(style= "max-height: 75px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Organizaciones específicas. 
                  .titulo-principal.p-0
                .row.col-lg-12(style= "max-height: 75px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Empresa o sector empresarial.  
                  .titulo-principal.p-0
                .row.col-lg-12.my-0(style= "max-height: 75px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Procesos o grupo de procesos antrópicos.   
                  .titulo-principal.p-0
                .row.col-lg-12(style= "max-height: 95px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.mt-3 Etapa del proceso.  
                  .titulo-principal.p-0
                .row.col-lg-12.my-0(style= "max-height: 75px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Producto o servicio.  
                  .titulo-principal.p-0
                .row.col-lg-12(style= "max-height: 105px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Consumidor o grupo de consumidores. 
                  .titulo-principal.p-0
                .row.col-lg-12.my-0(style= "min-height: 85px !important;")        
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/3/6.svg',  style="height: 30px").m-auto(data-aos="fade-right")
                  .col
                    p.m-0 Nivel geográfico (municipio, provincia, nación, zona de captación o cuenca hidrográfica).

      .row.justify-content-center.mb-0(data-aos="fade-right" style="padding-top: 50px")
        .col-lg-11
          .row.mx-5(data-aos="fade-right")
            .col-sm-12.col-lg-12
              .row(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-secundario.mb-1
                    p.mb-0 #[b Figura 4] 
                      i Componentes de la huella hídrica 

            .row.align-items-center.my-5      
              .col
              img(src="@/assets/curso/temas/3/7.svg" data-aos="zoom-in-up" alt="“Componentes de la huella hídrica”. En esta imagen se muestras los diferentes componentes de la huella hídrica y su correcta distribución. Dependiendo de la fuente, las extracciones, el total de producción, el comercio y el total de consumo. En la fuente, se presentan las aguas superficiales y subterráneas y la humedad del suelo. En las extracciones, Industriales, agua doméstica, agricultura de riego y agricultura de secano. En la producción, aguas grises, aguas azules y aguas verdes. En el comercio, exportación de agua, reexportación e importación de agua En el consumo, interna (84%) y externa (16%).")

    p.mt-3 Es importante tener en cuenta que esta metodología no se queda solo con calcular un volumen de agua, sino que también analiza y establece estrategias para lograr la sostenibilidad del recurso hídrico. Para lo cual, el proceso de evaluación de la huella hídrica se desarrolla en 4 fases, como se observa en la figura 5.

    .row.justify-content-center.mb-0(data-aos="fade-right" style="padding-top: 50px")
        .col-lg-11
          .row.mx-5(data-aos="fade-right")
            .col-sm-12.col-lg-12
              .row(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-secundario.mb-1
                    p.mb-0 #[b Figura 5 ] 
                      i  Proceso de evaluación de la huella hídrica

    .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8
          .row.align-items-center.my-5
            figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
              .row.justify-content-center(data-aos="fade-right")
                img(src="@/assets/curso/temas/3/8.svg" data-aos="zoom-in-up" alt="“Etapas de WFT”. En esta infografía interactiva se muestran las cuatro fases que maneja la metodología WFT. Fase I, definición y alcance. Fase II, cuantificación. Fase III, evaluación de sostenibilidad. Fase IV, formación de respuesta.")
            figure.movil.mt-0
              .row.justify-content-center.d-lg-none.d-md-none        
                img(src="@/assets/curso/temas/3/13.svg" data-aos="zoom-in-up" alt="“Etapas de WFT”. En esta infografía interactiva se muestran las cuatro fases que maneja la metodología WFT. Fase I, definición y alcance. Fase II, cuantificación. Fase III, evaluación de sostenibilidad. Fase IV, formación de respuesta.")      

    p.mt-3 La primera fase, es primordial y clave, y consiste en definir los objetivos y el alcance del estudio de la evaluación de la huella hídrica, es decir, se debe determinar el área o sector de interés que se va a evaluar, la resolución temporal, la escala espacial y las fases que va a incluir (un estudio no obligatoriamente debe contener las 4 fases). En la segunda fase se toma en cuenta lo que se requiere recolectar  en la huella hídrica,  la información y datos necesarios para realizar la cuantificación. La tercera fase es la evaluación o análisis de la sostenibilidad desde el ámbito social, económico y ambiental y, por último en la fase cuarta se proponen respuestas, estrategias y políticas requeridas.
    Separador.mt-0

    .cont_3_2(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_2 3.2  Norma ISO 14046:2014

    p.mt-3 La Norma ISO 14046 específicamente no habla de huella hídrica sino el término empleado es “huella de agua”  y la define como la métrica o métricas con las que se cuantifican los impactos ambientales potenciales relacionados con el agua (ISO 14046:2014); ya que se busca  evaluar el impacto que se generan a este recurso vital, basado en un factor principal que es el ciclo de vida con el objetivo de cuantificar la huella y así lograr plantear medidas para mitigarla, mediante estrategias de sostenibilidad social, económica y ambiental enfocadas al recurso hídrico.  
    p.mt-3 Por tanto, el ciclo de vida fundamental  permite determinar y evaluar los impactos ocasionados por el hombre al medio ambiente, los ecosistemas y los recursos; pero, es importante resaltar que la huella hídrica total es la suma de las huellas directas e indirectas, porque cada etapa del ciclo de vida cuenta con una huella hídrica directa e indirecta, es decir, se debe considerar en cada etapa y cadena de valor los usos tanto directos como los indirectos de agua. Además, el ciclo de vida puede realizarse para las organizaciones, los procesos, los productos o los servicios, de forma global o puede ser delimitado o por fases como se muestra en la figura 6. 

    .row.justify-content-center.mt-4(data-aos="fade-right")
        .col-lg-11
          .row.mx-5(data-aos="fade-right")
            .col-sm-12.col-lg-12
              .row(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-secundario.mb-1
                    p.mb-0 #[b Figura 6] 
                      i Esquema del enfoque de análisis de ciclo de vida en el cálculo de huella hídrica

    .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8
          .row.align-items-center.my-5      
            .col
            img(src="@/assets/curso/temas/3/9.svg" data-aos="zoom-in-up" alt="“Esquema del enfoque de análisis de ciclo de vida en el cálculo de huella hidrica. En esta imagen se muestra el ciclo de vida del agua en: ACV de la cuna a la puerta Materias primas Industria Procesadora ACV de la cuna a la tumba Distribución Uso/Consumo Disposición Final")    
            figcaption.mt-3 Nota: tomado del manual de normas ISO 14046 (s.f).

    p.mt-3 De acuerdo a la norma ISO 14046:2014, la metodología planteada para evaluar la huella de agua se basa en las etapas de objetivos y alcance, análisis de inventario y evaluación de impactos. Pero también, se debe tener en cuenta para cada una de las etapas el avance e interpretación de los resultados de acuerdo a los objetivos establecidos, lo cual permite establecer si es necesario realizar algún ajuste o modificación. Según lo muestra la figura 7:

    .row.justify-content-center.mt-4(data-aos="fade-right")
        .col-lg-11
          .row.mx-5(data-aos="fade-right")
            .col-sm-12.col-lg-12
              .row(data-aos="fade-right")
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-secundario.mb-1
                    p.mb-0 #[b Figura 7] 
                      i Etapas para el cálculo de la huella de agua

    .row.justify-content-center.mb-2(data-aos="fade-right")
        .col-lg-8
          .row.align-items-center.my-5      
            .col
            img(src="@/assets/curso/temas/3/10.svg" data-aos="zoom-in-up" alt="“Etapas para el cálculo de la huella de agua”. En esta imagen ser muestra el proceso de evaluación de la huella de agua basado en la norma ISO 14046, en la cual se muestran las etapas tales como: Definición del objetivo y el alcance Análisis del inventario de la huella de agua Evaluación del impacto de la huella de agua La interpretación de resultados. Mostrando de qué manera interactúan entre ellas, La definición interactúa con el análisis y le interpretación de resultados. El Análisis interactúa con la definición, la evaluación y la interpretación de resultados. La evaluación interactúa con el análisis y la interpretación de resultados. La interpretación de resultados interactúa con todas las demás fases.")   

    p.mt-3 En conclusión, las características principales y la finalidad de la evaluación de la huella de agua, de acuerdo con la metodología descrita por la norma ISO 14046:2014, se puede observar a continuación:
    
    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/3/11.svg', style="height: 120px")

          h3.text-center Características
          .col-sm-12.col-lg-9.mx-5
            ul(style="color:black").lista-ul--color.pt-4                
                li
                  |● Se basa en el análisis del ciclo de vida.
                li 
                  |● Huellas del agua de diferentes etapas del
                  |  ciclo de vida, pueden sumarse para
                  |  representar el  resultado de la huella de agua. 
                li 
                  |● Incluye dimensiones geográficas y   temporales pertinentes. 
                li 
                  |● Identifica el o los impactos ambientales
                  |  potenciales relacionados con el agua. 
                li 
                  |● Identifica la cantidad de consumo de agua y
                  |  los cambios en la calidad.
                li 
                  |● Utiliza conocimientos de hidrología.     

      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/3/12.svg', style="height: 120px")

          h3.text-center Finalidad
          .col-sm-12.col-lg-9.mx-5
            ul(style="color:black").lista-ul--color.pt-4                
              
              li 
                |●  Evaluar la magnitud de impactos ambientales
                |   relacionados con el agua.
              li 
                |● Gestión estratégica del riesgo relacionada
                |  con el agua. 
              li 
                |● Facilitar la eficiencia del agua y la
                |  optimización de la gestión del agua.
              li 
                |● Proporcionar información coherente
                |  confiable para dar informe de los resultados
                |  de la huella de agua.  
    p.mt-5 
    | Adicionalmente a estas dos metodologías, 
    | existen diversas herramientas informáticas que ayudan al cálculo de la huella hídrica, mediante 
    b #[i Software ]  
    | como 
    b #[i Extended Calculator]
    |, 
    b #[i Zerofootprint]
    |, 
    b #[i Air.e]
    | (desarrollado por la compañía Solid Forest), 
    b #[i Siampro]
    |, 
    b #[i GaBi]
    |, 
    b #[i Open LCA]
    |, 
    b #[i TEAM]
    |, 
    b #[i UMBERTO]
    |; los cuales en algunos casos realizan los cálculos basados en aproximaciones específicas para determinados países y también son empleados para análisis que no son específicos (ya sea individual o nivel de nación, sino toman aspectos intermedios).

           

</template>

<script>
export default {
  name: 'Tema3',
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
