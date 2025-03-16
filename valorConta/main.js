let valorConta = parseFloat(prompt('Digite o valor da conta: '));
let gorjeta = parseFloat(prompt('Quanto de gorjeta(porcentagem)? '));

let total = valorConta + (gorjeta / 100 * valorConta);

alert('O valor total com gorjeta é de' + ' ' + '$' + total.toFixed(2) + '.');


