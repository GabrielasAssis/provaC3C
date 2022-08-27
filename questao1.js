let triangulo = (a, b, c) => {

  if (a == b && b == c) {
    console.log('Triângulo equilátero');
  }
  else if (a == b || a == c || c == b) {
    console.log('Triângulo isóceles');
  }
  else {
    console.log('Triângulo escaleno');
  }
};

triangulo(1, 1, 1);
triangulo(1, 1, 2);
triangulo(1, 2, 3);