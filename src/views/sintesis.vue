<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="600") A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5(data-aos="fade-up" data-aos-duration="700")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis clasifica las energías primarias en fósiles (petróleo, carbón, gas natural e hidratos de metano) y renovables (hidráulica, geotérmica, solar y eólica). También incluye centrales de transformación como termoeléctrica, termosolar, hidroeléctrica, eólica, nuclear, geotérmica y ciclo combinado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
