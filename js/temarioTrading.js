let temarioTrading = document.querySelector('.temarioTrading');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let bonus = document.querySelector('.bonus');

// Modulo 1 - Introducción
num1.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 1:</span> Introducción</h3>
    <ul class="temario-lista">
        <li>¿Qué son las criptomonedas y cómo surgen? Breve historia de las mismas</li>
        <li>Recomendaciones antes de comenzar</li>
        <li>Criptomonedas¿Cualquier puede aprender?</li>
        <li>Ventajas de invertir en criptomonedas</li>
        <li>¿Cómo se puede ganar dinero con ellas? </li>
        <li>Inversiones ¿Qué son?</li>
        <li>4 conceptos claves en toda inversión..</li>
        <li>Inversión Vs Trading.</li>
        <li>Emisión monetaria de Bitcoin</li>
    </ul>
    `
})

//Módulo 2 - Introducción al Trading
num2.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 2:</span> Introducción al trading</h3>
    <ul class="temario-lista">
        <li>Tipos de trading.</li>
        <li>Herramientas útiles</li>
        <li>Análisis fundamental y Análisis técnico</li>
        <li>Psicología del trading</li>
        <li>¿Cómo ganar un sueldo en dólares? </li>
        <li>Criptomonedas. clasificación, características.</li>
        <li>Terminología del trading: Wallet, Exchange, fomo, fud, hodl, short,long, etc </li>
        <li>Staking con criptomonedas.</li>
    </ul>
    `
});

//Módulo 3 - Entendiendo al mercado.
num3.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 3:</span> Entendiendo al mercado</h3>
    <ul class="temario-lista">
        <li>Introducción a tradingview</li>
        <li>Velas japonesas</li>
        <li>Entendiendo el mercado en su estructura: Volumen, precio y tiempo.</li>
        <li>Entendiendo un gráfico de precios.</li>
        <li>Patrones y estructuras de mercado.</li>
        <li>¿Cómo predecir el próximo movimiento de un activo?</li>
        <li>¿Cómo detectar potencial a futuro de un proyecto ?</li>
        <li>Aprendiendo a detectar zonas de valor, soportes y resistencias.</li>
        <li>La dominancia de Bitcoin</li>
        <li>¿Qué es una “altseason”?</li>

    </ul>
    `
});

//Módulo 4 - Iniciando en el análisis.
num4.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 4:</span> Iniciando en el análisis</h3>
    <ul class="temario-lista">
        <li>Los errores más comunes de los principiantes</li>
        <li>Chartismo, análisis chartista</li>
        <li>Indicadores, los más utilizados</li>
        <li>Bollinger, bases y análisis</li>
        <li>MacD, bases y análisis</li>
        <li>RSI, bases y análisis</li>
        <li>Análisis y trading en vivo!</li>
        <li>Entendiendo nuevos indicadores</li>
        <li>Entendiendo el volumen</li>
        <li>Bases de la teoría de Elliot</li>
        <li>Aprendiendo a diversificar mis inversiones</li>
        <li>Entendiendo a fondo las temporalidades</li>
        <li>La dominancia de Bitcoin</li>
        <li>¿Qué es una “altseason”</li>


    </ul>
    `
});

//Módulo 5 - Psicología del trading
num5.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 5:</span> Psicología del trading</h3>
    <ul class="temario-lista">
        <li>¿Por qué muchos traders fallan en su operativa?</li>
        <li>Errores más comunes de los traders</li>
        <li>¿Se puede vivir del Trading?</li>
        <li>Análisis y gestión de Riesgo</li>
        <li>Categorizacion de inversiones.</li>
        <li>Introducción al mercado de futuros</li>
        <li>Apalancamiento financiero</li>
    </ul>
    `
});

//Módulo 6- Recomendaciones importantes + Estrategia explicada!
num6.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>Módulo 6:</span>Recomendaciones importantes + Estrategia explicada!
    </h3>
    <ul class="temario-lista">
        <li>¿Cómo operar si tengo poco tiempo de ver el mercado?</li>
        <li>¿Cuándo tomar ganancias?</li>
        <li>¿Cuándo salirse de un trade?</li>
        <li>¿Cómo asegurar lo ganado? ¿Cómo refinar entradas en el mercado?</li>
        <li>¿Qué es una estrategia y un plan de trading?</li>
        <li>Estrategia de las 5 puntas explicada - explicación con indicadores.</li>
        <li>Análisis en vivo y seguimiento profundo de inversiones.</li>
        <li>Grupo de alertas de trading ¿Cómo funciona?¿Cómo se operan las alertas?</li>
        <li>Conclusiones finales </li>
        <p>Las clases son en vivo 100% online a través de Zoom, brindamos acceso a nuestra plataforma con material adicional para que puedas complementar y poner en práctica lo aprendido.</br>
        ¡Las clases quedan grabadas en nuestra plataforma, para que tengas acceso cuando quieras!</p>

    </ul>
    `
});

//Bonus -
bonus.addEventListener('click', function () {
    temarioTrading.innerHTML =
    `
    <h3 class="temario-titulo"><span>BENEFICIOS DEL PROGRAMA
    </span></h3>
    <ul class="temario-lista">
        <li>1 mes gratis en el grupo de Alertas de trading #QuieroVip para que operes con nosotros!</li>
        <li>Acceso a nuestra plataforma dónde encontrarán:</li>
        <li>Biblioteca #Quierobit (Libros de criptomonedas,trading, finanzas, inversiones)</li>
        <li>Tutoriales (Órdenes de compra, manejo de plataformas, wallets)</li>
        <li>Videos explicativos</li>
        <li>Herramientas útiles para operar</li>
        <li>Libro de estrategia de trading utilizada por #Quierobit:  “La estrategia de las 5 puntas” </li>
        <li>Newsletter mensual para que estés al tanto de información relevante y oportunidades en el mercado de las criptomonedas!</li>
        <li>Análisis semanales de criptomonedas en vivo a través de youtube!</li>
    </ul>
    `
});