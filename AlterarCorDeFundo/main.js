function changeBgColor() {
    let colors = ['red', 'green', 'yellow', 'orange', 'pink'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

//math.floor = arrendonda para 0, 1, 2, 3
//math.random = gera 1.23, 2.56, 1.40   numeros aleatorios porem sem arrendondar 