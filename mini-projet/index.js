let nombreMystere = 42;
let tentative;


while (tentative !== nombreMystere) {
  tentative = parseInt(window.prompt("Devinez le nombre entre 0 et 100"));

  if (tentative < nombreMystere) {
    window.alert("C'est plus");
  } else if (tentative > nombreMystere) {
    window.alert("C'est moins");
  } else {
    window.alert("C'est gagné");
  }
}
