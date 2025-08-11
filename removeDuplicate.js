const biriyaniKhor = ["Milon", "Akash", "Pintu","Chintu","Montu","Milon","Akash"];

function noDuplicate(array) {
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){      //includes 
          unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);