function MediosDeTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
      return "Pie";
    } else if (distancia > 1000 && distancia <= 10000) {
      return "Bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
      return "Colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
      return "Auto";
    } else if (distancia > 100000) {
      return "Avión";
    } else {
      return "Distancia no válida";
    }
  }
  let distanciaUsuario = prompt("Por favor, ingrese la distancia en metros que desea recorrer:");
  
  let distanciaNumerica = parseFloat(distanciaUsuario);
  
  
  if (!isNaN(distanciaNumerica)) {
    let medioTransporte = MediosDeTransporte(distanciaNumerica);
    alert(`Para ${distanciaNumerica} metros, el medio de transporte apropiado es: ${medioTransporte}`);
    console.log(`Para ${distanciaNumerica} metros, el medio de transporte apropiado es: ${medioTransporte}`);
  } else {
    alert("Por favor, ingrese una distancia válida.");
    console.log("Por favor, ingrese una distancia válida.");
  }
  