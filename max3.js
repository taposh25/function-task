const akash = 57;
const batas = 98;
const katas = 88;

if(akash > batas && akash > katas){
    console.log('Akash is the ultimate boss');
}
else if(batas > akash && batas > katas){
    console.log('Batas is the ultimate boss');
}
else{
    console.log('Katas is the reall boss')
}

// inside function

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log(maxOfThree(23, 54, 67));


// max more than 5 values

const max = Math.max(23, 45, 67, 87, 90, 27, 76)
console.log('Maximum value from this values: ', max);