/*Cambiar los bloques de contenido*/
let temario = document.querySelector('.temario');
let num1 = document.querySelector('.num1');
let bonus = document.querySelector('.bonus');
/*1*/
num1.addEventListener('click', function () {
    temario.innerHTML =
        `
        <h3 class="temario-titulo"><span>¿Qué incluye la capacitación?</span> </h3>
        <ul class="temario-lista">
            <li>8 clases en vivo dónde aprenderás todo lo necesario para invertir y las distintas oportunidades del mercado + entrevistas con invitados del ecosistema cripto</li>
            <li>Acceso a nuestra plataforma dónde encontrarán</li>
            <li>Biblioteca #Quierobit</li>
            <li>Herramientas útiles </li>
            <li>Contenido educativo</li>
            <li>Actualizaciones semanales del mercado</li>
            <li>Noticias semanales</li>
        </ul>
      `
})

/*BONUS*/
bonus.addEventListener('click', function () {
    temario.innerHTML =
        `
    <h3 class="temario-titulo"><span>BENEFICIOS</span></h3>
    <ul class="temario-lista">
        <li>Ebook dónde se explica estrategia de trading “la estrategia de las 5 puntas” escrito por Juan Cintioli, trader profesional del equipo de Quierobit <span class="tachado"> 20 USD </span>
        </li>
        <li>1 mes gratis de suscripción en nuestro grupo privado de alertas de trading, para que operes con nosotros o comiences a dar tus primeros pasos <span class="tachado"> 10 USD </span></li>
        <li>Tendrán acceso a los encuentros grabados con los invitados de las ediciones anteriores (y la de posteriores ediciones)
        </li>
    </ul>
      `
})