let age = prompt('Sua idade: ');
let title = prompt('Possui titulo? (Sim/Não): ')
let idadeMinima = 18;

if (age >= idadeMinima && title == 'Sim') {
    console.log('Você pode votar :)')
} else if (age >= idadeMinima && title == 'Nao'){
    console.log('Você precisa de um titulo :(')
} else if (age < idadeMinima && title == 'Sim' || title == 'Não'){
    console.log('Você não pode votar');
}