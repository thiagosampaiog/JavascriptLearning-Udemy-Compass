let grade = parseInt(prompt('Sua nota aqui: '));

if (isNaN(grade) || grade < 0 || grade > 100) {
    alert("Por favor, insira um número válido entre 0 e 100.");
} else if (grade >= 90 && grade <= 100) {
    alert('A');
} else if (grade >= 80 && grade <= 89) {
    alert('B');
} else if (grade >= 70 && grade <= 79) {
    alert('C');
} else if (grade >= 60 && grade <= 69) {
    alert('D');
} else {
    alert('F');
}