function orden(arreglo){
    for(let i=1;i<arreglo.length;i++){
        key = arreglo[i];
        j=i-1;
        while(j>-1 && key<arreglo[j]){
            arreglo[j+1]=arreglo[j];
            j=j-1;
        }
        arreglo[j+1]=key;
}

console.log(arreglo);
}

orden([10,5,2,3,1]);