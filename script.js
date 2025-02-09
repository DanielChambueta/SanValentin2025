document.addEventListener('DOMContentLoaded', () => {
  const background = document.getElementById('background');
  const totalElements = 30; // Número total de elementos (flores y corazones)
  const messageContainer = document.getElementById('message-container');
  const messageHeader = document.querySelector('#message-container h1');
  const subText = document.getElementById('subtext'); // Elemento para el texto que cambia
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');

  // Variable para controlar la escala del botón NO
  let noButtonScale = 1; // Tamaño original

  // Variable para contar los intentos al hacer clic en el botón NO
  let noAttempts = 0;

  // Array con 27 frases (7 dadas + 20 adicionales)
  const noPhrases = [
    "Segura?",
    "Tal vez te equivocaste",
    "Insisto, dime que si",
    "No le des más al no",
    "No me amas?",
    "Esto no es divertido",
    "Oye, dale al siiiiiii",
    "Jmmm",
    "De nuevo",
    "Estás segura?",
    "😢",
    "Puedo estar aquí todo el día",
    "NONONONONONONONON",
    "Dale al sí y te llevarás una sorpresa amor",
    "💔",
    "Di que siiiiii",
    "Nop, intenta de nuevo",
    "Insisto, solo un sí",
    "No me dejes en visto",
    "Aceptaaaaa",
    "Sigo esperando",
    "😑",
    "Acepta, y ven a mí jajajajja",
    "No, en serio, di sí",
    "Confía en mí, acepta",
    "No lo pienses más",
    "Flores para que digas que sí 🌹",
    "No quieres saber que sorpresa te tengo",
    "😏 SI?"
  ];

  // Función auxiliar para obtener un número aleatorio entre min y max
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Función para crear una rosa mejorada
  function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('flower', 'rose');
    const numPetals = 8;
    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      // Posicionamos cada pétalo en el centro del contenedor
      petal.style.left = '50%';
      petal.style.top = '50%';
      const angle = i * (360 / numPetals);
      petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
      rose.appendChild(petal);
    }
    const center = document.createElement('div');
    center.classList.add('center');
    rose.appendChild(center);
    return rose;
  }

  // Función para crear una margarita (daisy) mejorada
  function createDaisy() {
    const daisy = document.createElement('div');
    daisy.classList.add('flower', 'daisy');
    const numPetals = 10;
    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.left = '50%';
      petal.style.top = '50%';
      const angle = i * (360 / numPetals);
      petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
      daisy.appendChild(petal);
    }
    const center = document.createElement('div');
    center.classList.add('center');
    daisy.appendChild(center);
    return daisy;
  }

  // Función para crear un corazón (heart)
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('flower', 'heart');
    return heart;
  }

  // Función que selecciona aleatoriamente un tipo de elemento
  function createRandomFlower() {
    const flowerTypes = ['rose', 'heart', 'daisy'];
    const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    if (type === 'rose') {
      return createRose();
    } else if (type === 'heart') {
      return createHeart();
    } else {
      return createDaisy();
    }
  }

  // Crear y animar los elementos de fondo (flores y corazones)
  for (let i = 0; i < totalElements; i++) {
    const elementWrapper = document.createElement('div');
    elementWrapper.classList.add('flower-wrapper');
    // Posición aleatoria en la pantalla
    elementWrapper.style.left = random(0, 100) + '%';
    elementWrapper.style.top = random(0, 100) + '%';
    // Duración de animación aleatoria (entre 5 y 15 segundos)
    const duration = random(5, 15);
    elementWrapper.style.animationDuration = duration + 's';
    // Escala aleatoria para dar variedad
    const scale = random(0.5, 1.5);
    elementWrapper.style.transform = `scale(${scale})`;
    // Crear el elemento aleatorio y agregarlo al wrapper
    const element = createRandomFlower();
    elementWrapper.appendChild(element);
    background.appendChild(elementWrapper);
  }

  // Función para crear fuegos artificiales
  function createFireworks() {
    // Crear contenedor para fuegos artificiales
    const fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks';
    document.body.appendChild(fireworksContainer);

    // Definir el número de partículas y el punto de origen (centro de la pantalla)
    const numParticles = 50;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('firework-particle');

      // Posicionar la partícula en el centro
      particle.style.left = centerX + 'px';
      particle.style.top = centerY + 'px';

      // Calcular un ángulo y distancia aleatoria para la explosión
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 200 + 50; // distancia aleatoria entre 50 y 250 px
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      particle.style.setProperty('--tx', tx + 'px');
      particle.style.setProperty('--ty', ty + 'px');

      // Asignar un color aleatorio
      const r = Math.floor(random(128, 255));
      const g = Math.floor(random(0, 128));
      const b = Math.floor(random(128, 255));
      particle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      fireworksContainer.appendChild(particle);
    }

    // Remover el contenedor de fuegos artificiales después de la animación (1.5s + un poco de margen)
    setTimeout(() => {
      fireworksContainer.remove();
    }, 2000);
  }

  // Evento para el botón YES: muestra la animación de fuegos artificiales y cambia el mensaje
  yesButton.addEventListener('click', () => {
    // Cambiar el mensaje principal a "TE AMO 💘"
    messageHeader.textContent = "TE AMO 💘";
    // Opcional: limpiar el subtexto si hubiera contenido
    subText.textContent = "";
    // Lanzar la animación de fuegos artificiales
    createFireworks();
  });

  // Evento para el botón NO:
  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Incrementar contador de intentos
    noAttempts++;

    // Si los intentos son menores a 20, se comporta de forma normal:
    if (noAttempts < 20) {
      // Seleccionar una frase aleatoria y actualizar el subtexto (sin cambiar el h1)
      const randomPhrase = noPhrases[Math.floor(Math.random() * noPhrases.length)];
      subText.textContent = randomPhrase;
    
      // Obtener las dimensiones y posición del contenedor del mensaje
      const containerRect = messageContainer.getBoundingClientRect();
      const btnWidth = noButton.offsetWidth;
      const btnHeight = noButton.offsetHeight;
    
      // Definir los límites para que el botón NO se mueva dentro del mensaje
      const minX = 10; // Margen izquierdo mínimo
      const maxX = containerRect.width - btnWidth - 10; // Evitar que el botón salga del lado derecho
      const minY = 50; // Margen superior dentro del contenedor
      const maxY = containerRect.height - btnHeight - 20; // Evitar que el botón salga por abajo
    
      // Generar nueva posición dentro de los límites calculados
      const newX = Math.random() * (maxX - minX) + minX;
      const newY = Math.random() * (maxY - minY) + minY;
    
      // Mover el botón dentro del mensaje
      noButton.style.position = "absolute"; // Se mantiene dentro del contenedor
      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
      
      // Reducir el tamaño del botón en un 10% cada vez, hasta un mínimo de escala 0.5
      noButtonScale = Math.max(0.5, noButtonScale * 0.9);
      noButton.style.transform = `scale(${noButtonScale})`;
    } else {
      // Si se han alcanzado 20 intentos:
      // 1. Se remueve el botón NO
      noButton.remove();
      
      // 2. Se clona el botón SI y se agrega al contenedor de botones.
      //    (Se añade el mismo evento de clic para que funcione igual.)
      const buttonsContainer = document.querySelector('#message-container .buttons');
      const yesClone = yesButton.cloneNode(true);
      yesClone.addEventListener('click', () => {
        alert('¡Qué alegría! Preparémonos para un San Valentín inolvidable.');
      });
      buttonsContainer.appendChild(yesClone);
    }
  });
});
