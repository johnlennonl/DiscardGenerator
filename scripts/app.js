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
      const cvv = generateCVV(cvvLength); // Generar el CVV
  
      // Agregar tarjeta generada al array
      cardNumbers.push(`${cardNumber} | Exp: ${expiration} | CVV: ${cvv}`);
    }
    
    return cardNumbers;
  }
  
  // Función para mostrar las tarjetas generadas
  document.getElementById("generate").addEventListener("click", function() {
    const bin = document.getElementById("bin").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const cvvLength = parseInt(document.getElementById("cvv-length").value);
  
    // Validar que el BIN tenga entre 12 y 16 caracteres
    if (bin.length < 12 || bin.length > 16) {
      alert('El BIN debe tener entre 12 y 16 caracteres.');
      return;
    }
  
    const cards = generateCreditCard(bin, quantity, month, year, cvvLength);
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
  