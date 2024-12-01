<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      p.p-relative(data-aos="fade-up") La energía eléctrica es fundamental en la vida moderna, ya que impulsa diversas actividades en la industria, el hogar y la sociedad en general. Esta introducción a la generación y transformación de energía eléctrica ofrece un recorrido desde las fuentes naturales hasta su conversión en electricidad utilizable para el ser humano.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 A lo largo del texto, se exploran las diferentes fuentes de energía, clasificadas en renovables y no renovables, destacando su origen y disponibilidad. Fuentes como el sol, el viento, el agua y el calor geotérmico ofrecen alternativas sostenibles que cobran relevancia ante el agotamiento de los combustibles fósiles, los cuales siguen siendo una base significativa de la producción energética.
      
      .row.mt-5.p-relative(data-aos="fade-up")
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col-md(style="place-self:center;")
          p.mb-0 Además, se explican los principios de electricidad, desde el átomo hasta el movimiento de electrones en los circuitos, y la estructura y función de las centrales eléctricas, donde la energía primaria se transforma en energía eléctrica. Este proceso permite que la electricidad llegue a comunidades y contribuye al desarrollo social y económico del país.
    
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
