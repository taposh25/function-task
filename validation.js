function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 'seven');
// console.log(result);

function fullName(first, last){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof last !== 'string'){
        return "Last name should be a string";
    }
    const full = first + " " + last;
    return full;

}
const full = fullName('Swarna', 8);
console.log(full);