/*Agregar clase active*/
/*Cambiar los bloques de contenido*/
let temario = document.querySelector('.temario');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
/*1*/
num1.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 1:</span> Criptomonedas, una tecnología revolucionaria</h3>
    <ul class="temario-lista">
        <li>Introducción y Breve historia del dinero</li>
        <li>Recomendaciones antes de comenzar</li>
        <li>Criptomonedas ¿cualquiera puede aprender?</li>
        <li>Bienvenidos a la disrupción: Bitcoin, una transformación fundamental del dinero </li>
        <li>¿Qué son las criptomonedas y cómo surgen? </li>
        <li>Proyectos anteriores a Bitcoin </li>
        <li>Proyectos anteriores a Bitcoin</li>
        <li>Por qué es el activo digital más importante del Siglo XXI, hablaremos de sus principales características y porqué deberíamos prestarle  especial atención.</li>
        <li>Emisión monetaria de Bitcoin ¿Cómo se generan nuevos bitcoin? </li>
        <li>Criptomillonarios y primeros usuarios.</li>
        <li>¿Es tarde para comenzar? proyección.</li>
        <li>Principales mitos respecto a criptomonedas</li>
        <li>Estafas ¿cómo prevenirlas? </li>
        <li>Bitcoin como reserva de valor</li>
        <li>Tecnologías fundacionales de bitcoin</li>
        <li>BONUS: Videos explicativos, pdf's, libros, acceso a comunidad @quierobit!</li>
    </ul>
      `
})
/*2*/
num2.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 2:</span> Conceptos claves </h3>
    <ul class="temario-lista">
        <li>Internet de la información vs internet del valor</li>
        <li>Descentralización y Mecanismos de consenso.</li>
        <li>Tipos de criptomonedas, su clasificación y usos.</li>
        <li>Fenomeno.com</li>
        <li>Ethereum: las innovaciones tecnológicas de esta criptomoneda de segunda generación</li>
        <li>Cómo adquirir tus primeras criptomonedas paso a paso</li>
        <li>Consejos útiles al momento de operar con criptomonedas </li>
        <li>Aspectos importantes a tener en cuenta al momento de invertir</li>
        <li>Pasamos a la acción: Paso a paso como comprar nuestras primeras criptomonedas y movernos utilizar distintas herramientas y plataformas..</li>
        <li>Transacciones con criptomonedas</li>
        <li>Errores comunes al comenzar a operar.</li>
        <li>Casos reales</li>
        <li>BONUS:Tutoriales compra principales plataformas</li>
        <li>Manejo ordenes de mercado</li>
        <li>Glosario Cripto</li>
        <li>Test para conocer tu perfil como inversor</li>
    </ul>
      `
})

/*3*/
num3.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 3:</span> Seguridad  y almacenamiento en criptomonedas + Formas de ganar dinero.
    </h3>
    <ul class="temario-lista">
        <li>Todo lo que tenés que saber al momento de almacenar tus criptomonedas</li>
        <li>Criptografía de clave asimétrica</li>
        <li>Cómo ganar dinero operando con criptomonedas (Dentro del ecosistema cripto, las posibilidades son infinitas!)</li>
        <li>Emociones al operar y ciclos de mercado </li>
        <li>Recomendaciones y consejos útiles</li>
        <li>¿Por qué invertir en criptomonedas?</li>
        <li>Seguridad y criptomonedas</li>
        <li>Marcas y Metaversos</li>
        <li>Tendencias en latinoamérica  </li>
        <li>Cómo hacer networking</li>
        <li>Aspecto importante: tomar acción.</li>
        <li>BONUS:Libro estrategía trading</li>
        <li>wallets recomendadas</li>
        <li>glosario cripto</li>
        <li>Excel para registro de operaciones</li>
    </ul>
      `
})

/*4*/
num4.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 4:</span> Tecnología en constante evolución</h3>
    <ul class="temario-lista">
        <li>Veremos aplicaciones casos de uso, aplicaciones, iniciativas y proyectos muy interesantes que dan uso de esta tecnología.</li>
        <li>El banco más seguro del mundo (está en tu navegador).</li>
        <li>3 indicadores que te permitirán entender cuándo es el mejor momento de comprar o vender tus criptomonedas Una estrategia Simple y eficaz.</li>
        <li>Alternativas para Generar ingresos pasivos.</li>
        <li>Herramientas útiles disponibles en el mercado</li>
        <li>Proyectos rentables oportunidades</li>
        <li>BONUS: MATERIAL PARA PROFUNDIZAR</li>
        <li>ACCESO A BIBLIOTECA CRIPTO</li>
        <li>HERRAMIENTAS Y CONTENIDO RECOMENDADO</li>

    </ul>
      `
})