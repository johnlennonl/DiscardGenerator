// Genera un número aleatorio entre 0 y 9
function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

// Genera un CVV aleatorio basado en la longitud seleccionada (3 o 4 dígitos)
function generateCVV(length) {
  let cvv = '';
  for (let i = 0; i < length; i++) {
    cvv += getRandomDigit();
  }
  return cvv;
}

// Genera una tarjeta completando las 'x' del BIN con dígitos aleatorios y agrega el CVV
function generateCreditCard(binTemplate, quantity, month, year, cvvLength) {
  const cardNumbers = [];
  const autoCvvChecked = document.getElementById("autoCvv").checked;
  const manualCvv = document.getElementById("cvv").value.trim(); // CVV manual ingresado por el usuario

  for (let i = 0; i < quantity; i++) {
    let cardNumber = '';

    // Reemplazar las 'x' por dígitos aleatorios
    for (let char of binTemplate) {
      if (char.toLowerCase() === 'x') {
        cardNumber += getRandomDigit();
      } else {
        cardNumber += char;
      }
    }

    const expiration = `${month}/${year}`;
    let cvv;

    // Si el checkbox está marcado, genera el CVV automáticamente
    if (autoCvvChecked) {
      cvv = generateCVV(cvvLength);
    } else {
      // Si el usuario ha ingresado un CVV manual, usarlo; si no, generar uno automáticamente
      cvv = manualCvv ? manualCvv : generateCVV(cvvLength);
    }

    // Agregar tarjeta generada al array
    cardNumbers.push(`${cardNumber} | Exp: ${expiration} | CVV: ${cvv}`);
  }

  return cardNumbers;
}

document.getElementById("generate-card").addEventListener("click", function() {
  const bin = document.getElementById("bin").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const cvvInput = document.getElementById("cvv").value;
  const autoCvvChecked = document.getElementById("autoCvv").checked;

  // Validar que el BIN tenga entre 12 y 16 caracteres
  if (bin.length < 12 || bin.length > 16) {
    alert('El BIN debe tener entre 12 y 16 caracteres.');
    return;
  }

  // Función para generar las tarjetas
  const cards = generateCreditCard(bin, quantity, month, year, cvvInput ? cvvInput.length : 3);

  // Mostrar las tarjetas generadas en el output
  document.getElementById("output").textContent = cards.join('\n');
});

// Efecto Typed.js para el tipo de tarjetas en el título
const options = {
  strings: ['VISA', 'MASTERCARD', 'DISCOVER', 'AMEX', 'DINERS CLUB'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
};

const typed = new Typed('#card-types', options);
