let bhaskara = (a, b, c) => {
    let resultados = [];
    let delta = (b * b) - 4 * a * c; 

    if (delta < 0) {
        return "Delta é negativo";
    }else{
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultados.push(raiz1);
        resultados.push(raiz2); 
        return resultados
    }
}
console.log(bhaskara(3, -5, 12));
console.log(bhaskara(6, 0, -9));  