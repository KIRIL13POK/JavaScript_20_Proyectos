//Fizz Buzz .- 100 numeros
//3 6 9 12.....FizZ
//5 10 15 20 .....BuzZ
//15 30 45 ......FizZBuzZ

for( let i = 1; i <= 100; i ++){
    if(i % 15 === 0){
        console.log(`${i} ----> FizZBuzZ`)
    }
     else if(i % 3 === 0){
        console.log(`${i}----> FizZ`)
    }else  (i % 5 === 0)
        console.log(`${i}----> BuzZ`)
    
};
