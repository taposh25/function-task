// function leap_year(year){
//     return (year % 100 == 0)? (year % 400 == 0): (year % 4 == 0);
// }
// console.log(leap_year(2023));
// console.log(leap_year(2024));
// console.log(leap_year(2020));
// console.log(leap_year(2022));
// console.log(leap_year(2016));


function leapYear(year){
    if(year % 100 !==0  && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(leapYear(2100));
console.log(leapYear(2400));
console.log(leapYear(1900));
console.log(leapYear(2052));