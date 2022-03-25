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
        <li>Introducción y breve historia del dinero</li>
        <li>Recomendaciones antes de comenzar</li>
        <li>Criptomonedas ¿Cualquiera puede aprender?</li>
        <li>¿Qué son las criptomonedas y cómo surgen? </li>
        <li>Bienvenidos a la disrupción:<br> Bitcoin, una transformación fundamental del dinero</li>
        <li>Conceptos clave: Blockchain, P2P, mecanismos de consenso y criptografía. </li>
        <li>Intentos anteriores de dinero digital</li>
        <li>BITCOIN: El activo digital más importante del siglo XXI </li>
        <li>¿Por qué deberíamos prestarle  especial atención?</li>
        <li>Emisión monetaria de Bitcoin </li>
        <li>Criptomillonarios y early adopters.</li>
        <li>¿Es tarde para comenzar? Proyección a futuro.</li>
        <li>Principales mitos </li>
        <li>Estafas ¿cómo prevenirlas? </li>
        <li>Bitcoin como reserva de valor</li>
        <li>Tecnologías fundacionales de Bitcoin</li>
    </ul>
      `
})
/*2*/
num2.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 2:</span> Conceptos claves y acción </h3>
    <ul class="temario-lista">
        <li>Internet de la información vs internet del valor</li>
        <li>Descentralización y Mecanismos de consenso.</li>
        <li>Tipos de criptomonedas, su clasificación y usos.</li>
        <li>Fenomeno ".com"</li>
        <li>Ethereum: Innovaciones tecnológicas de esta criptomoneda de 2da generación</li>
        <li>Consejos al momento de operar con criptomonedas</li>
        <li>Aspectos importantes a tener en cuenta al momento de invertir</li>
        <li>Pasamos a la acción:paso a paso cómo comprar nuestras primeras criptomonedas de forma simple</li>
        <li>Transacciones con criptomonedas</li>
        <li>Herramientas y plataformas útiles.</li>
        <li>Transacciones con criptomonedas</li>
        <li>Errores comunes.</li>
        <li>Casos reales</li>
        <li>Proyectos interesantes</li>
    </ul>
      `
})

/*3*/
num3.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 3:</span> Seguridad, almacenamiento y formas de ganar dinero.
    </h3>
    <ul class="temario-lista">
        <li>Dónde guardar nuestras criptos de forma fácil y segura</li>
        <li>Wallets</li>
        <li>Criptografía de clave asimétrica.</li>
        <li>Como ganar dinero con criptomonedas</li>
        <li>Análisis técnico vs Análisis fundamental</li>
        <li>Trading, distintas modalidades.</li>
        <li>Psicología del trading</li>
        <li>Emociones y ciclos de mercado </li>
        <li>Stacking, yield farming y finanzas descentralizadas (DEFI)</li>
        <li>NFT´s (Non fungible Tokens)</li>
        <li>Plataformas y proyectos NFT´s</li>
        <li>P2E -Play to earn (juega para ganar)-</li>
        <li>Recomendaciones y consejos</li>
        <li>¿Por qué invertir en criptomonedas?</li>
        <li>Seguridad y criptomonedas</li>
        <li>Marcas y Metaversos</li>
        <li>Tendencias cripto en latinoamérica  </li>
        <li>Networking ¿Cómo hacer contactos?</li>
        <li>Aspecto importante: tomar acción.</li>
        <li>Práctica e interacción</li>
    </ul>
      `
})

/*4*/
num4.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>Bloque 4:</span> Encuentros con invitados</h3>
    <div class="texto-centrado parrafo">
    <p>Contaremos con la presencia de invitados: traders, emprendedores, comerciantes, artistas digitales, programadores, educadores, entusiastas, que compartirán su conocimiento y experiencias con nosotros.</p>
    <br>
    <p>Haremos encuentros con personas que tienen proyectos relacionados a las criptomonedas que nos contarán su cómo comenzaron, su, perspectiva y de sus distintos puntos de vista acerca del futuro del ecosistema cripto.</p>
    <br>
    <p>Haremos preguntas, despejaremos dudas y hablaremos sobre distintos proyectos, oportunidades y perspectivas a futuro</p>
    </div>
      `
})

/*5*/
num5.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>BENEFICIOS</span></h3>
    <ul class="temario-lista">
        <li>Acceso a nuestra plataforma dónde encontrarán mucho contenido:
            <ul class="temario-sublista">
                <li>Biblioteca #Quierobit (Libros de criptomonedas,trading, finanzas, inversiones y más)
                <li>Tutoriales (Órdenes de compra, manejo de plataforma, wallets)
                <li>Videos explicativos, entrevistas, documentales, películas recomendadas
                <li>Acceso a las charlas con los invitados especiales de las ediciones anteriores
                <li>Herramientas útiles, wallets y contenido relevante
            </ul>
        </li>
        <li>Acceso a una comunidad privada de whatsapp dónde compartimos información y brindamos apoyo, estableciendo así una red de contactos saludable que los ayude a crecer y dónde puedas despejar tus dudas y consultas!</li>
        <li>Estarás suscripto a nuestro Newsletter mensual para que estés al tanto de información, oportunidades y contenido relevante en el mercado de las criptomonedas!</li>

        <li>Beneficio exclusivo
            <ul class="temario-sublista">
                <li>1 mes gratis en el grupo de Alertas de trading #QuieroVip!</li>
                <li>Libro la “estrategia de las 5 puntas” utilizada por #Quierobit</li>
            </ul>
        </li>
    </ul>
      `
})