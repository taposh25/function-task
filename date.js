const today = new Date();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[today.getDay()] + ".");

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? " PM " : " AM ";
hour = hour % 12 || 12;

if (hour === 12 && minute === 0 && second === 0) {
  prepand = today.getHours() === 0 ? " Midnight" : " Noon";
}

console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);

