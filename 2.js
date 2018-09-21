function orden(arreglo){
    
    for(let i=0;arreglo.length;i++){
        key = arreglo[i];
        j=i-1;

        while(j > 0 && key<arreglo[j]){
            arreglo[j+1]=arreglo[j];
            j=j-1;

        }
        arreglo[j+1]=key;
    console.log(arreglo.push(arreglo[i]));
    console.log(arreglo);
}
}

orden(1,2,3);