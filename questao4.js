function questao4(num) {
    let res = [num]

    for (let i = 1; i <= num; i++) {
        if( i % 5 == 0 && i % 9 ==0){
            res[i-1]="LuidyMoura"; 
        }else if(i % 5 == 0){
            res[i-1]="Luidy";
        }else if(i % 9 == 0){
            res[i-1]="Moura";
        }else{
            res[i-1]=i;
        }
    }
    return res 
}
console.log(questao4(45)); 