function evenOdd(number){
    if(number % 2 !== 0){
        return number * 2;
    }
    else if(number % 2 === 0){
        return (number / 3).toFixed(1);
    }
}
console.log(evenOdd(4));