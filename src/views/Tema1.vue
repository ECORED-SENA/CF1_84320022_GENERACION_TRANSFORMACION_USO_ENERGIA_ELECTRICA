<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Energía

    .row
      .col-lg(data-aos="fade-right")
        p La energía es un concepto fundamental en la física y en la vida cotidiana, definido como la capacidad de los cuerpos para realizar trabajo o provocar cambios en su entorno. Este fenómeno es omnipresente en la naturaleza y en todas las actividades humanas, siendo esencial para los procesos físicos, químicos y biológicos. La energía no se crea ni se destruye, solo se transforma de una forma a otra, en cumplimiento del principio de conservación de la energía (Senner, 1994, p. 53).
        .p-4(style="background-color:#E3EAF7;border-radius:25px;")
          p.mb-0 Podemos considerar la energía como la fuerza que impulsa el movimiento y el cambio. También se define como la capacidad de los cuerpos o sistemas materiales para transferir calor o realizar trabajo. La palabra energía proviene del griego y significa "actividad", y su unidad de medida es el julio (J) (García, 2009, p. 172).
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/1.png")
    
    p.mt-4(data-aos="fade-right") La energía es aquello que debe suministrarse o entregarse a un sistema para permitir su transformación (Deléage y Souchon, 1996, p. 60). Podemos hallarla en el agua de los ríos, en el movimiento de las olas y en el vaivén de las mareas, que son ejemplos de manifestaciones naturales de energía (Buitrago, 2003, p. 9). Según otra definición, es la capacidad de los cuerpos o de un conjunto de ellos para realizar un trabajo específico (Roldán, 2008, p. 2).

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/2.png")
      .col-lg(data-aos="fade-left")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E3EAF7;")
          h5.p-1.ps-2.pe-2.mb-4(style="background-color:#FFB5B4;") ¿Sabía usted que…?
          p.mb-0 Jean P. Joule (1818-1889), físico inglés, realizó importantes investigaciones en los campos de la electricidad, la termodinámica y la energía. Joule descubrió la relación entre el magnetismo y el trabajo mecánico, lo que le permitió formular la teoría de la energía. En su honor, la unidad internacional de energía, trabajo y calor se denomina joule o julio (J).
    
    Separador
    
    .cont_1_1.pb-5
      .titulo-segundo.p-relative(data-aos="flip-up")
        h2#t_1_1 1.1 Fuentes de energía
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Una fuente de energía es aquella capaz de suministrar energía en alguna de sus formas, y las cantidades disponibles de cada tipo constituyen los recursos concretos de los que disponemos. El principal desafío radica en contar con energía utilizable; la facilidad o dificultad para obtenerla determina la evaluación de estos recursos disponibles.
          br
          br
          | El sol es la fuente primaria de energía en la Tierra y el origen, directo o indirecto, de muchas otras fuentes. Actúa como una gigantesca bomba de hidrógeno, donde ocurren constantemente reacciones de fusión nuclear entre átomos ligeros.

    .row
      .col-lg(data-aos="fade-right")
        p Este envía a la Tierra una potencia de #[strong 170.000 teravatios (billones de vatios)], aunque la mayor parte se refleja en las capas atmosféricas y se irradia hacia el espacio antes de ser absorbida. Solo 40.000 TW se utilizan en la evaporación de agua terrestre #[strong (vegetación, océanos, mares, lagos y ríos)], 400 TW para el movimiento del aire y las olas, y 40 TW en la fotosíntesis de las plantas. 
        .p-4.mt-4.mt-lg-5(style="background-color:#E3EAF7;border-radius:25px;")
          p.mb-0 El sol es la fuente de energía para procesos como la energía eólica, la energía almacenada en biomasa #[strong (viva, como plantas y animales, y fósil, como carbón, petróleo y gas natural)], la energía de las olas, las diferencias térmicas entre las capas oceánicas y la energía hidráulica (Martínez, 2004, pp. 59-60).
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/4.png")
    
    .cont_1_2
      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Clasificación de las fuentes de energía
      
      p.p-relative(data-aos="fade-left") Las fuentes de energía se clasifican según su disponibilidad en la Tierra, dependiendo de si se encuentran en cantidades limitadas o si se regeneran continuamente.

      .cont_1_3.mt-5(style="position:relative;z-index:1;")
        .col-xl-8.m-auto
          .row.justify-content-center
            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="700")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-center.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#FFB5B4;border-radius:5px;max-width:fit-content") Renovables
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#FFB5B4;border-radius:5px;") Renovables
                    p.mt-4 Estas fuentes se originan en procesos continuos de la Tierra, lo que las hace considerarse inagotables. Sin embargo, estudios realizados por expertos concluyen que estas fuentes no son eternas; su disponibilidad podría verse afectada por otros fenómenos físicos que eventualmente podrían limitar su duración en el tiempo.
            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="700")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-center.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#FFB5B4;border-radius:5px;max-width:fit-content") No renovables
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#FFB5B4;border-radius:5px;") No renovables
                    p.mt-4 Estas fuentes se generan mediante procesos lentos, por lo que su almacenamiento es limitado y sus reservas disminuyen a medida que se consumen, sin posibilidad de renovación en tiempos cortos. Generalmente, son las fuentes que causan mayores problemas ambientales y contaminación. Dentro de las fuentes no renovables se encuentran la madera, el carbón, el petróleo, el gas natural y el uranio.
    
    .cont_1_4.pb-5.pt-5
      .row
        .col-lg(data-aos="fade-right")
          .p-2.pe-md-4.mb-3.bg-white(style="border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/9.svg")
              .col(style="place-self:center;")
                p.mb-0 No renovable fósil. Carbón, petróleo, gas natural, hidrato de metano. 
          .p-2.pe-md-4.mb-3.bg-white(style="border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/10.svg")
              .col(style="place-self:center;")
                p.mb-0 Nuclear. Uranio, torio, deuterio, tritio.
          .p-2.pe-md-4.mb-3.bg-white(style="border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/11.svg")
              .col(style="place-self:center;")
                p.mb-0 Renovable solar. Biomasa, radiación solar luminosa, agua corriente (hidráulica), viento (eólica), olas, gradiente oceánico, radiación solar térmica, mareas, gradiente geotérmico.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/12.svg")
    
    Separador
    
    .titulo-segundo.p-relative(data-aos="flip-up")
      h2#t_1_2 1.2 Energía en Colombia
      
    .cont_1_1
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/13.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Las reservas de combustibles fósiles en Colombia y en el mundo se están agotando rápidamente. Sin embargo, debido a la abundancia de ríos, Colombia no depende exclusivamente de estas reservas, ya que cuenta con plantas hidroeléctricas. Además, el país posee recursos renovables aún sin explotar, como la energía solar, eólica y minihidráulica. Para asegurar la sostenibilidad en los sectores económicos, el SENA impulsa proyectos de investigación y desarrollo en energías renovables.

      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Fuentes de energía primaria
      
      p.p-relative(data-aos="fade-left") La energía primaria incluye las fuentes naturales sin transformar, que luego se convierten en electricidad o energía secundaria para el consumo humano.

      .row.p-relative.mt-4
        .col-lg-auto.d-none.d-xl-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/14.png")
        .col-lg(data-aos="fade-left")
          .p-2.pe-md-4.mb-3(style="background-color:#FCF7DA;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/15.svg")
              .col(style="place-self:center;")
                p.mb-0 Petróleo, gas natural, carbón, hidratos de metano
          .p-2.pe-md-4(style="background-color:#FCF7DA;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/16.svg")
              .col(style="place-self:center;")
                p.mb-0 Hidráulica, térmica, geotérmica, solar, fotovoltaica y eólica

      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Tipos de energía y su transformación
      
      p.p-relative(data-aos="fade-left") Cada tipo de energía posee características propias que la convierten en un recurso valioso. La transformación de estas fuentes en energía eléctrica contribuye al desarrollo energético y económico del país.

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Petróleo" :icono="require('@/assets/curso/tema1/17.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Petróleo
            p El petróleo es una mezcla de hidrocarburos que se originó hace millones de años a partir de materia orgánica acumulada en el fondo del mar y en zonas continentales. Este recurso, de color oscuro y densidad menor a la del agua, ha sido fundamental para la economía de Colombia.
          .col-lg-4.col-md-7.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/18.png')
      .py-4.py-md-5(titulo="Carbón" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Carbón
            p El carbón, una roca sedimentaria rica en carbono, se forma a partir de restos de plantas antiguas que se transformaron a lo largo del tiempo. Es una de las principales fuentes de energía en Colombia y un recurso importante en las exportaciones del país.
          .col-lg-4.col-md-7.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/20.png')
      .py-4.py-md-5(titulo="Gas natural" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Gas natural
            p El carbón, una roca sedimentaria rica en carbono, se forma a partir de restos de plantas antiguas que se transformaron a lo largo del tiempo. Es una de las principales fuentes de energía en Colombia y un recurso importante en las exportaciones del país.
          .col-lg-4.col-md-7.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/22.png')
      .py-4.py-md-5(titulo="Hidratos de metano" :icono="require('@/assets/curso/tema1/23.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            h5 Hidratos de metano
            p Los hidratos de metano son una mezcla de gas y metano atrapados en estructuras de hielo en el talud continental y en regiones polares. Representan un recurso energético potencial para el futuro.
          .col-lg-4.col-md-7.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/24.png')


    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Fuentes de energía renovable
    
    p(data-aos="fade-left") Colombia cuenta con un gran potencial para el desarrollo de energías renovables debido a su geografía y ubicación. Entre las fuentes principales están:

    .cont_1_5.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Solar
              p Se obtiene de la radiación solar y puede transformarse en electricidad o calor.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/26.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Eólica
              p Generada a partir del viento; zonas como La Guajira ofrecen condiciones óptimas para su uso.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/27.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Hidráulica
              p Generada en embalses y utilizada en centrales hidroeléctricas, aprovechando el flujo de agua.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/28.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Geotérmica
              p Aprovecha el calor interno de la Tierra; Colombia tiene gran potencial geotérmico.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/29.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Centrales de transformación de energía
    
    p(data-aos="fade-left") Las fuentes de energía primaria se convierten en electricidad en diferentes tipos de centrales, cada una especializada en una fuente específica.

    .cont_1_6.mt-5.pb-5
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/31.png")
        .col-lg-9(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6 col-xl-6 p-4")
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/32.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Termoeléctrica
              p.mb-0 Utiliza combustibles fósiles, generando dióxido de carbono y contribuyendo al efecto invernadero.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/33.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Termosolar
              p.mb-0 Convierte la energía solar en electricidad sin emisiones contaminantes.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/34.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Hidroeléctrica
              p.mb-0 Aprovecha el flujo de agua para generar electricidad de forma sostenible.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/35.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Eólica
              p.mb-0 Transforma la energía del viento en electricidad mediante aerogeneradores.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/36.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Nuclear
              p.mb-0 Genera electricidad a través de reacciones nucleares controladas.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/37.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Geotérmica
              p.mb-0 Usa el calor subterráneo para producir electricidad de forma continua.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema1/38.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#E3EAF7;max-width:fit-content;") Ciclo combinado
              p.mb-0 Combina vapor de agua y gas para optimizar el uso de energía primaria y reducir el impacto ambiental.

      .cont_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 La electricidad y la corriente eléctrica
    
    .cont_1_7
      p(data-aos="fade-left") La electricidad es esencial en la vida moderna, generada mediante la transformación de energías primarias en energía útil para el consumo. La corriente eléctrica se mide en términos de voltaje, cantidad de electricidad y su intensidad.

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.text-center.h-100(style="background-color:#F0F4FB;border-radius:15px;")
            figure.mb-4.text-center
              img.d-inline(src="@/assets/curso/tema1/39.svg" style="max-width:90px;")
            h5.mb-3.m-auto.ps-4.pe-4.p-1(style="background-color:#F7ECA4;max-width:fit-content;") Termosolar
            p Diferencia de potencial entre polos de un generador, medida en voltios.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.text-center.h-100(style="background-color:#F0F4FB;border-radius:15px;")
            figure.mb-4.text-center
              img.d-inline(src="@/assets/curso/tema1/40.svg" style="max-width:90px;")
            h5.mb-3.m-auto.ps-4.pe-4.p-1(style="background-color:#F7ECA4;max-width:fit-content;") Cantidad de electricidad
            p Medida en culombios, representa el volumen de electricidad en un circuito.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.text-center.h-100(style="background-color:#F0F4FB;border-radius:15px;")
            figure.mb-4.text-center
              img.d-inline(src="@/assets/curso/tema1/41.svg" style="max-width:90px;")
            h5.mb-3.m-auto.ps-4.pe-4.p-1(style="background-color:#F7ECA4;max-width:fit-content;") Intensidad de corriente
            p Cantidad de electricidad por segundo, medida en amperios (A).
      
      .row.mt-5(data-aos="fade-up")
        .col-md(style="place-self:center;")
          p.fw-bold ¿Sabía usted que Colombia está en camino de transformar su matriz energética? 
          p.mb-0 Aunque históricamente ha dependido de combustibles fósiles, el país posee un enorme potencial en energías renovables aún sin explotar. Desde la energía solar y eólica hasta la hidráulica, Colombia tiene la oportunidad de liderar en sostenibilidad y transición energética. A continuación, descubriremos el panorama de sus principales fuentes de energía y su promesa para el futuro.
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/42.svg")
      
      .row.mt-5
        .col-lg(data-aos="fade-right")
          .p-4.h-100(style="background-color:#5C6475;border-radius:10px;")
            .row
              .col-md-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema1/43.svg")
              .col-md(style="place-self:end;")
                .text-white
                  h4 ¿Sabías qué?
                  p Lo invitamos a escuchar el siguiente Pódcast:
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="¿Sabía usted que Colombia está en camino de transformar su matriz energética? "
                  :audio="require('@/assets/curso/audio/podcast1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  tiempo
                )
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/44.png")

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
