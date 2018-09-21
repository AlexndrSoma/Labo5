function fibonacci(n){

    var a = 0,b=1;
    

    
   if(n==1){
    console.log(a);
   }    
   if(n==2){
    console.log(a);
    console.log(b);
   }  

    if(n>=3){
        console.log(a);
        console.log(b);
        for(let i=0; i<=n-3;i++){
            fi= a + b;
            console.log(fi);
            a=b;
            b=fi;
    
        }}
}

fibonacci(8);

