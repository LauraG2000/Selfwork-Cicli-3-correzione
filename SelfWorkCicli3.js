let scelta;

do {
  scelta = Number(prompt("Inserisci il numero della bevanda che desideri /1. Acqua/2. Coca Cola/3. Birra:/"));

  switch (scelta) {
    case "1":
      console.log("E' stata selezionata l'acqua");
      break;
    case "2":
      console.log("E' stata selezionata la coca cola");
      break;
    case "3":
      console.log("E' stata selezionata la birra");
      break;
    default:
      console.log("Scelta non valida. Riprova.");
  }

} while (scelta < 1 || scelta > 3);
