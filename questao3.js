function calcularNota(nota){
    if(nota < 0 || nota > 100){
        return "Nota Invalida";
    }
    if(nota < 40){
        if(nota < 38){
            return "Aluno Reprovado";
        }else{
            let prox=proximoDivisivelPor5(nota);
            if(prox-nota<3){
                nota = prox;
            }
            return nota; 
        }
    }else{
        let prox=proximoDivisivelPor5(nota);
        if(prox-nota<3){
            nota = prox;
        }
        return nota; 

    }
}
function proximoDivisivelPor5(x) {
    return Math.ceil(x / 5) * 5;
}
console.log(calcularNota(60));