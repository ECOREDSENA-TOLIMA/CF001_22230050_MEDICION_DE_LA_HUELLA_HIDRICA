<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estudios relacionados con la huella hídrica

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        p.mt-5 A nivel mundial se han adelantado diversos estudios para la cuantificación del uso y contaminación del agua, ya sea mediante la metodología de la ISO 14046:2014 o la Water Footprint Network (WFT), pero es importante resaltar que  independientemente de la metodología empleada el sector agropecuario es uno de los más analizados, lo que tiene gran lógica, ya que según la UNESCO (citada por Martínez, 2016)  aproximadamente el 67% del agua que se extrae en el mundo es empleada para este importante sector de la economía, es decir para la producción agrícola y la tendencia es al aumento. 
        p.mt-5 Algunos de estos estudios están referenciados en el recurso a continuación:

    .row.justify-content-center(data-aos="fade-right" alt= "“Estudios HH a nivel mundial”. En esta slider, se presentan algunos países y la manera como usan la metodología WFT o la metodología ISO 14046. Los países de las tarjetas son: ⦁ Argentina ⦁ Bolivia ⦁ Brasil ⦁ Chile ⦁ Perú  ⦁ Ecuador ⦁ México ⦁ Costa Rica ⦁ Uruguay. Donde se puede evidenciar que:  Argentina, Brasil, Chile, Perú, México, Costa Rica aplican ambas metodologías. Mientras que Bolivia, Ecuador y Uruguay solo aplican la WFT.")
      .col-lg-10
      .tarjeta.color-secundario
        .p-4.p-lg-5
          SlyderA(tipo="b")
            .row.align-items-center.m-1
              .col-lg-5.mb-1.mb-lg-0
                h4 BOLIVIA 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                h4 Sistemas de producción: 
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Agua potable. 
                    li 
                      |●  Bebidas gaseosas. 
                    li 
                      |●  Isotónicas. 
                    li 
                      |●  Energizantes. 
                p.mb-0 #[b Geográfico:]   
                  span ciudades La Paz, Quito, Lima, Santa Cruz de la Sierra, Guayaquil, Fortaleza, Loja, Santa Cruz de Galápagos, Recife, Cali y Tarija. Ciudades La Paz, Quito, Lima, Santa Cruz de la Sierra, Guayaquil, Fortaleza, Loja, Santa Cruz de Galápagos, Recife, Cali y Tarija. <br><br>
                p Para la evaluación se consideraron los sectores residencial, comercial, industrial, público, servicios municipales y actividades de gobierno (administrativas, de servicio y operativas).
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/1.svg', style="width:650px").m-auto

            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 ARGENTINA 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                p.mb-0 #[b Productos:]  
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Soya 
                    li 
                      |●  Leche a través de diversos sistemas de producción:
                      .col-sm-12.col-lg-9
                        ul(style="color:black").lista-ul--color.pt-0                
                          li
                            |-  Sistema Pastoril (SP) 
                          li 
                            |-  Sistema Base Pastoril (SBP) 
                          li 
                            |-  Sistema Base Pastoril Intensivo (SBPI)  Maní.  
                    li 
                      |●  Uva para vino.
                p.mb-0 #[b Sectores:] 
                  span agrícola y pecuario de la provincia de San Luis.                          
                 
                p Agrícola y pecuario de la provincia de San Luis. 
                p Para la evaluación se consideraron los sectores residencial, comercial, industrial, público, servicios municipales y actividades de gobierno (administrativas, de servicio y operativas).
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 ISO 14046
                p.mb-0 #[b Productos:]   
                  span leche y Uva para vino. 
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/2.svg', style="width:650px").m-auto
                  
            .row.align-items-center.m-1
              .col-lg-5.mb-1.mb-lg-0
                h4 BRASIL 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:                 
                p.mb-0 #[b Geográfico:]   
                  span siete cuencas hidrográficas tomando en cuenta los sectores: pecuario, agrícola, reforestamiento, abastecimiento y saneamiento. <br><br>
                p.mb-0 #[b Productos:]   
                  span cosméticos incluyendo shampú, jabón y humectantes, soya, fertilizante, leche, arroz, ganado bovino, biocombustibles, fertilizante nitrogenado, bovinos, caña de azúcar. <br><br> 
                p.mb-0 #[b Servicio:]   
                  span  electricidad de hidroeléctrica, exportación de té, consumo de alimentos por una persona. <br><br>
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 ISO 14046
                p.mb-0 #[b Producto:]   
                  span etanol hidratado.   
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/3.svg', style="width:650px").m-auto
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 CHILE 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                p.mb-0 #[b Geográfico:] <br><br>
                p Cuenca del Río Rapel, considerando los sectores:  
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Agropecuario, minería, doméstico y energía.                    
                p.mb-2 #[b Producto:] 
                  span   mineral de óxido de cobre y mineral de sulfuro de cobre.                          
                 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 ISO 14046
                p.mb-0 #[b Plantas o complejos productivos:]   
                  span planta de emulsiones, planta multipropósito de productos químicos, planta de preparaciones pigmentarias y planta de fabricación de Masterbatch.
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/4.svg', style="width:650px").m-auto

            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 PERÚ 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                p.mb-0 #[b Productos: ]
                  span banana. 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 ISO 14046
                p.mb-0 #[b Productos:]   
                  span tubería de PVC, espárrago, helado, electricidad de termoeléctrica y cemento. 
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/5.svg', style="width:650px").m-auto
                  
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 ECUADOR 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                p.mb-0 #[b Productos: ]
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Banana 
                    li 
                      |●  Rosas. 
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/6.svg', style="width:650px").m-auto
            .row.align-items-center.m-1
              .col-lg-5.mb-1.mb-lg-0
                h4 MÉXICO 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:                 
                p.mb-0 #[b Geográfico:]   
                  span país. <br><br>
                p.mb-0 #[b Sector:]   
                span Trigo, maíz, agua de uso público urbano, servicio de asesoría para el tratamiento de agua. <br><br>
                p.mb-0 #[b Servicio:]   
                span  Avícola, cervecero, cemento. <br><br>
                p.mb-0 #[b Geográfico:]   
                span 13 regiones hidrológico administrativas.   
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/7.svg', style="width:650px").m-auto

            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 COSTA RICA 
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT:
                p.mb-0 #[b Producto: ]
                  span arroz.
                
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 ISO 14046
                p.mb-0 #[b Productos:]   
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Bebidas 
                    li 
                      |●  Café.
                p.mb-0 #[b Complejo productivo: ]   
                  span planta empacadora de banano.               
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/8.svg', style="width:650px").m-auto
                  
            .row.align-items-center.m-1
              .col-lg-5.mb-4.mb-lg-0
                h4 URUGUAY
                .row(data-aos="fade-right")
                  .col-lg-4
                    h4 WFT: 
                p.mb-0 #[b Productos:]   
                .col-sm-12.col-lg-9
                  ul(style="color:black").lista-ul--color.pt-0                
                    li
                      |●  Bebidas 
                    li 
                      |●  Café.
                p.mb-0 #[b Complejo productivo: ]   
                  span planta empacadora de banano.               
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/4/9.svg', style="width:650px").m-auto    

    .row.align-items-center.my-5.col-lg-12.m-auto        
      .col-auto
        figure
          img(src='@/assets/curso/temas/4/10.svg').m-auto(data-aos="fade-right")
      .col
        p(data-aos="fade-up" style="overflow-x: hidden !important") Para el caso específico de Colombia, también se han llevado a cabo algunos estudios para calcular la huella de agua y huella hídrica de forma general en el país y sus principales sectores económicos, como también a empresas, productos y procesos productivos, como por ejemplo la investigación realizada para ampliación del capítulo sobre huella hídrica incluido en el Estudio Nacional del Agua 2014 (ENA 2014), en coordinación con el Instituto de Hidrología Meteorología y Estudios Ambientales  (IDEAM), la Embajada Suiza, Agencia Suiza para la Cooperación y el Desarrollo (COSUDE), Good Stuff International Latinoamérica y El Caribe (GSI-LAC) y Corporación Centro de Ciencia y Tecnología de Antioquia (CTA); en el cual se realiza la evaluación multisectorial de la huella hídrica en Colombia.
        p Resultados por subzonas hidrográficas en el marco del Estudio Nacional del Agua 2014, donde se realiza la cuantificación para los sectores agropecuario, doméstico, industrial, energético y petrolero. Otros estudios adelantados en Colombia se pueden analizar en la figura 6.
                              
    .row.justify-content-center.my-4(data-aos="fade-right")
      .col-lg-12
        .row.mx-5(data-aos="fade-right")
          .col-sm-12.col-lg-12
            .row(data-aos="fade-right")
              .col-sm-12.col-lg-12
                .titulo-sexto.mb-0.color-secundario.mb-1
                  p.mb-0 #[b Figura 6] 
                    i  Estudios realizados en Colombia sobre huella hídrica

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-10
        figure
          .row.justify-content-center(data-aos="fade-right")
            img(src="@/assets/curso/temas/4/11.svg" data-aos="zoom-in-up" alt= "“Estudios realizados en Colombia sobre huella hídrica”. En esta imagen se muestra como se aplica la metodología WTF Y ISO 14046 en nuestro país. Teniendo dentro de la primera el aspecto geográfico y productos como piedra caliza, cacao, maíz y papa. Mientras que, en la segunda, productos como: Cemento, concreto, papel, productos de higiene, metales preciosos, cajas de cartón y snacks.")
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2              
          .row.mt-3.justify-content-center.my-3.mx-5  
            .col-2(style="background-color:#144677; overflow-x: hidden !important")
              .tarjeta.clr--gris.p-4(titulo="Tipos de recursos audiovisuales")
                p.m-4(style="color: white") WTF
            .col(style="background-color:#FFF59D; overflow-x: hidden !important")
              p.m-3 #[b Geográfico:]   
                    span país, considerado los sectores: agropecuario, domestico, industrial, electrico y petroleo.
              p.m-3(data-aos="fade-up") Cuenca del rio Porce, considerando los sectores: agropecuario, industrial, doméstico, eléctrico y minero.
                br                                  
      
        .bloque-texto-g.color-secundario.p-2              
          .row.mt-3.justify-content-center.my-3.mx-5  
            .col-2(style="background-color:#144677; overflow-x: hidden !important")
              .tarjeta.clr--gris.p-4(titulo="Tipos de recursos audiovisuales")
                p.m-4(style="color: white; text-align: center !important") ISO 14046
            .col(style="background-color:#FFF59D; overflow-x: hidden !important")
              p.m-3 #[b Productos:]   
                    span cemento, concreto, papel tisú (higiénico, servilletas, toallas de cocina, pañuelos faciales y productos húmedos), productos para calefacción y refrigeración, metales preciosos (oro), cajas de cartón y snacks de banano.
              p.m-3(data-aos="fade-up") Plantas o complejos productivos: fincas de cultivo y beneficio de banano, operación de una planta de productos químicos, operación de una planta de productos lácteos y operación de una planta de producción agroquímicos.
                br   



</template>

<script>
export default {
  name: 'Tema4',
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
