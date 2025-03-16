
let numberList = document.getElementById('numberList')
let frutas = ['Maçã', 'Banana', 'Uva'];

for (i = 0; i <= 2; i++) {
    let listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(frutas[i]));
    //listItem.textContent = 'item ' + i
    numberList.appendChild(listItem);
}