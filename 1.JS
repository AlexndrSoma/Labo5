

function palindromo(palabra){
    
    var cadena;
    cadena = palabra.split('').reverse().join('');

    

    if(cadena == palabra){
        console.log('La palabra es palindroma');
    }else{
        console.log('La palabra NO es palindroma');

    }

    
}

palindromo('ana');