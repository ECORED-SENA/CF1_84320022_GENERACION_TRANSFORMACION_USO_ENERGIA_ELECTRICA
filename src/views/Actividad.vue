<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Generación y transformación de energía eléctrica ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos fundamentales de la energía eléctrica, sus fuentes y clasificación. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la unidad de medida de la energía? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Julio. ', esCorrecta: false },
            { id: 'b', texto: 'Joule. ', esCorrecta: true },
            { id: 'c', texto: 'Newton. ', esCorrecta: false },
            { id: 'd', texto: 'Voltio. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué material es un buen conductor de electricidad? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cobre.', esCorrecta: true },
            { id: 'b', texto: 'Vidrio.', esCorrecta: false },
            { id: 'c', texto: 'Plástico.', esCorrecta: false },
            { id: 'd', texto: 'Madera.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué fuente de energía se clasifica como no renovable? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Energía solar. ', esCorrecta: false },
            { id: 'b', texto: 'Energía hidráulica. ', esCorrecta: false },
            { id: 'c', texto: 'Carbón. ', esCorrecta: true },
            { id: 'd', texto: 'Energía eólica. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué elemento del átomo tiene carga positiva? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Neutrón. ', esCorrecta: false },
            { id: 'b', texto: 'Protón. ', esCorrecta: true },
            { id: 'c', texto: 'Electrón. ', esCorrecta: false },
            { id: 'd', texto: 'Fotón. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes fuentes de energía no contamina el medio ambiente? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Energía solar. ', esCorrecta: true },
            { id: 'b', texto: 'Gas natural. ', esCorrecta: false },
            { id: 'c', texto: 'Carbón. ', esCorrecta: false },
            { id: 'd', texto: 'Petróleo. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el componente principal en una central hidroeléctrica? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turbina. ', esCorrecta: true },
            { id: 'b', texto: 'Panel solar. ', esCorrecta: false },
            { id: 'c', texto: 'Generador de vapor. ', esCorrecta: false },
            { id: 'd', texto: 'Reactor nuclear. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes fuentes de energía es una mezcla de hidrógeno, metano y otros gases? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Carbón. ', esCorrecta: false },
            { id: 'b', texto: 'Gas natural. ', esCorrecta: true },
            { id: 'c', texto: 'Hidrato de metano. ', esCorrecta: false },
            { id: 'd', texto: 'Biomasa. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué fenómeno ocurre cuando una varilla cargada toca una bolita en un experimento de electricidad estática? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Atracción. ', esCorrecta: false },
            { id: 'b', texto: 'Ionización. ', esCorrecta: false },
            { id: 'c', texto: 'Repulsión. ', esCorrecta: true },
            { id: 'd', texto: 'Conductividad. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La energía geotérmica se obtiene del calor interno de la Tierra. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'c', texto: 'Verdadero.', esCorrecta: true },
            { id: 'd', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Las fuentes de energía renovables se agotan rápidamente. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'a', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué es la corriente eléctrica? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El movimiento de protones. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El movimiento de electrones a través de un circuito. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La diferencia de voltaje entre dos puntos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La resistencia de un material a la electricidad. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál de las siguientes opciones es una energía fósil? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Energía eólica. ', esCorrecta: false },
            { id: 'b', texto: 'Petróleo. ', esCorrecta: true },
            { id: 'c', texto: 'Energía solar. ', esCorrecta: false },
            { id: 'd', texto: 'Energía geotérmica. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de energía se produce a partir de la radiación del sol? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Energía solar. ', esCorrecta: true },
            { id: 'b', texto: 'Energía geotérmica. ', esCorrecta: false },
            { id: 'c', texto: 'Energía hidráulica. ', esCorrecta: false },
            { id: 'd', texto: 'Energía nuclear. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué fenómeno físico provoca que los cuerpos de carga similar se repelan? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conductividad. ', esCorrecta: false },
            { id: 'b', texto: 'Atracción. ', esCorrecta: false },
            { id: 'c', texto: 'Repulsión. ', esCorrecta: true },
            { id: 'd', texto: 'Ionización. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cómo se llama el proceso en el cual se libera una gran cantidad de energía al dividir el núcleo de un átomo? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fisión nuclear. ', esCorrecta: true },
            { id: 'b', texto: 'Fusión solar. ', esCorrecta: false },
            { id: 'c', texto: 'Fricción. ', esCorrecta: false },
            { id: 'd', texto: 'Energía potencial. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
