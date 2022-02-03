/*Agregar clase active*/
/*Cambiar los bloques de contenido*/
let temario = document.querySelector('.temario');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
/*1*/
num1.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 1:</span> Criptomonedas, una tecnología revolucionaria</h3>
    <ul class="temario-lista">
        <li>Introducción y Breve historia del dinero</li>
        <li>Recomendaciones antes de comenzar</li>
        <li>¿Cualquiera puede aprender?</li>
        <li>Bienvenidos a la disrupción: Bitcoin, una transformación fundamental del dinero </li>
        <li>¿Qué son las criptomonedas y cómo surgen? </li>
        <li>Proyectos anteriores a Bitcoin</li>
        <li>Bitcoin: El activo digital más importante del Siglo XXI</li>
        <li>¿Cómo se generan nuevos Bitcoin? </li>
        <li>Criptomillonarios y primeros usuarios.</li>
        <li>¿Es tarde para comenzar? proyección.</li>
        <li>Principales mitos respecto a criptomonedas</li>
        <li>Estafas ¿cómo prevenirlas? </li>
        <li>Bitcoin como reserva de valor</li>
        <li>Tecnologías fundacionales de Bitcoin</li>
        <li><span>BONUS:</span> Videos explicativos, pdf's, libros, acceso a comunidad <a href="https://www.instagram.com/quierobit/">QuieroBit</a></li>
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
        <li>Ethereum: Innovaciones tecnológicas de esta criptomoneda de 2da generación</li>
        <li>Cómo adquirir tus primeras criptomonedas paso a paso</li>
        <li>Aspectos importantes a tener en cuenta al momento de invertir</li>
        <li>Pasamos a la acción: Cómo comprar primeras criptomonedas y utilizar distintas herramientas y plataformas.</li>
        <li>Transacciones con criptomonedas</li>
        <li>Errores comunes al comenzar a operar.</li>
        <li>Casos reales</li>
        <li><span>BONUS:</span>
            <ul>
                <li>Manejo ordenes de mercado</li>
                <li>Glosario Cripto</li>
                <li>Test para conocer tu perfil como inversor</li>
            </ul>
        </li>
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
        <li><span>BONUS:</span>
            <ul>
                <li>Libro estrategía trading</li>
                <li>wallets recomendadas</li>
                <li>glosario cripto</li>
                <li>Excel para registro de operaciones</li>
            </ul>
        </li>
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
        <li>Wallets ¿Cúal elegir?</li>
        <li>Indicadores que te permitirán entender cuándo es el mejor momento de comprar o vender tus criptomonedas. Una estrategia Simple y eficaz.</li>
        <li>Alternativas para generar ingresos pasivos.</li>
        <li>Finanzas descentralizadas DEFI.</li>
        <li>Herramientas útiles disponibles en el mercado</li>
        <li><span>BONUS:</span>
            <ul>
                <li>Material para profundizar</li>
                <li>Acceso a bibliotecla cripto</li>
                <li>Herramientas y contenido recomendado</li>
            </ul>
        </li>
    </ul>
      `
})

/*5*/
num5.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 5:</span> Encuentros con Invitados especiales</h3>
    <ul class="temario-lista">
        <li>Contaremos con la presencia de invitados especiales: traders, emprendedores, comerciantes, artistas, programadores, educadores, entusiastas, que compartirán sus conocimientos con nosotros. Haremos encuentros con personas que tienen proyectos relacionados a las criptomonedas, aprenderemos de su experiencia, perspectiva y de sus distintos puntos de vista acerca del futuro del ecosistema cripto. Haremos preguntas, despejaremos dudas y hablaremos sobre distintos proyectos, oportunidades, y perspectivas a futuro</li>
        <li>
        <span>BONUS:</span>
            <ul>
                <li>Daremos acceso a una comunidad privada dónde compartimos información y brindamos apoyo, estableciendo así una red de contactos saludable que los ayude a crecer y dónde puedas despejar tus dudas y consultas!</li>
                <li>Biblioteca Cripto  y newsletter mensual para que estés al tanto de información relevante en el mercado de las criptomonedas!</li>
                <li>1 mes gratis en el grupo de Alertas de trading #QuieroVip!</li>
            </ul>
        </li>
    </ul>
      `
})