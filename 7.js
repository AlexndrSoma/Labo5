function bisiesto(annio){
    
    if(annio%4 == 0 && annio/100 != 0){
        console.log('el annio es bisiesto');
    }

    else{
        console.log('el annio NO es bisiesto');
 
    }

}

bisiesto(2017);