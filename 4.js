function conversor(decimal){
    
    var binario = [];

    while (decimal!= 0){
        

        binario.push(decimal % 2);

        decimal = Math.floor(decimal/2);
        

    }
    
    console.log(binario.reverse().join(''));


}

conversor(12);