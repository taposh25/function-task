/*

function inchToFeet(inch){
  const feet = inch/12;
  return feet;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

*/

function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchremaining = inch % 12;
    const result = feetNumber + " " + "feet" +" " + inchremaining +" " +"inch";
    return result;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

function mileTokilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
    
}
const mirpurToShewrapara = mileTokilometer(5);
// console.log(mirpurToShewrapara);


function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kilometerToMile(5));