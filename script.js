document.addEventListener('DOMContentLoaded', () => {
  const background = document.getElementById('background');
  const totalElements = 30; // Número total de elementos (flores y corazones)

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

  // Eventos para los botones del mensaje central
  document.getElementById('yes').addEventListener('click', () => {
    alert('¡Qué alegría! Preparémonos para un San Valentín inolvidable.');
  });
  document.getElementById('no').addEventListener('click', () => {
    alert('Está bien, espero que tengas un excelente día.');
  });
});
