



function writeCards(names, evento) {
    const newNames = []
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${evento} gift!`);
        newNames.push(message);
        
  }
  console.log(newNames)
  return newNames;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const evento = ["surprise"];

writeCards(names,evento);



function countDown(numero) {
    //let counter = 0
    while (numero >= 0) {
        console.log(numero);
        numero--;

    }
}

countDown(10);