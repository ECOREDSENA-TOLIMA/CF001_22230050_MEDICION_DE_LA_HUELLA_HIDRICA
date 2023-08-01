<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo La huella hídrica, en donde el agua es catalogada como fuente de vida y un recurso fundamental para el desarrollo de la humanidad, pero la misma humanidad se ha encargado de malgastarla y contaminarla. Por tanto, en la búsqueda de mejorar la gestión, aprovechamiento y uso racional que permita alcanzar el desarrollo sostenible de éste recurso natural, surgen métodos como la huella hídrica que permite determinar el verdadero volumen de agua empleado para la producción de bienes y prestación de servicios, pero con factor especial que no sólo cuantifica la cantidad de agua consumida y contaminada, sino que también realiza la evaluación de impactos y prioriza medidas y acciones para minimizarlos. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" alt="Texto alternativo Alt: “Síntesis” en esta imagen se muestra la temática tratada en el componente formativo donde se hace referencia a la huella hídrica y una profundización en cuanto al concepto de agua y las metodologías usadas.")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
