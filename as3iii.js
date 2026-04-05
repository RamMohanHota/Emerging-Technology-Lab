function factorial(num,callback){
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact*=i;
    }
    callback(fact);
}

fact(5,function(data){
    console.log(`Factorial is ${data}`)
})
