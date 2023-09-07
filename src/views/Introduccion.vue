<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.px-5(data-aos="fade-up") Se da la bienvenida al componente formativo denominado “La Huella Hídrica”, el cual hace parte del programa de formación complementaria “Medición de la huella hídrica”, para lo cual se invita a observar el siguiente video:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2ePoA4MPq1o" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
