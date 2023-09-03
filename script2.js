function numeroMayor(numeros) {
    if (numeros.length === 0) {
      return "El array está vacio.";
    }
  
    let mayor = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
  
    return mayor;
  };
  
  
  const input = prompt("Por favor, ingrese numeros separados por comas:");
  const numerosArray = input.split(',').map(Number);
  
  
  if (numerosArray.some(isNaN)) {
    alert("Por favor, ingrese numeros validos.");
  } else {
    const mayor = numeroMayor(numerosArray);
    alert(`El numero mayor es: ${mayor}`);
    console.log(`El numero mayor es: ${mayor}`);
  };
  