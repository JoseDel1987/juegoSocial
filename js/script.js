const preguntas = [
    "¿Cuál es tu lugar favorito en el mundo?",
    "¿Qué película podrías ver mil veces?",
    "¿Cuál fue tu mejor recuerdo de la infancia?",
    "¿Si pudieras cenar con alguien famoso, quién sería?",
    "¿Qué superpoder te gustaría tener?",
    "¿Qué harías si ganaras la lotería hoy?",
    "¿Qué canción te levanta el ánimo siempre?",
    "¿Prefieres el mar o la montaña?",
    "¿Hay algo que siempre quisiste aprender?",
    "¿Qué cosa te da más miedo?"
  ];
  
  const boton = document.getElementById('botonInicio');
  const contenedor = document.getElementById('cardContainer');
  const botonInfo = document.getElementById('botonInfo');
  const modal = document.getElementById('modal');
  const cerrarModal = document.getElementById('cerrarModal');
  
  boton.addEventListener('click', () => {
    let tiempoTotal = 5000; // 5 segundos
    let tiempoPasado = 0;
    let intervalo = 50; // empieza rápido
    let incremento = 1.05; // hace que se vaya frenando
    boton.disabled = true; // deshabilitamos el botón mientras gira
  
    const animar = () => {
      const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
      contenedor.innerHTML = `<div class="card">${pregunta}</div>`;
      
      tiempoPasado += intervalo;
      intervalo *= incremento;
  
      if (tiempoPasado < tiempoTotal) {
        setTimeout(animar, intervalo);
      } else {
        boton.disabled = false; // vuelve a habilitar el botón
      }
    };
  
    animar();
  });

  botonInfo.addEventListener('click', () => {
  modal.style.display = 'flex';
});

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// También cerrarlo si hace clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
  