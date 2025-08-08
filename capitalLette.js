function capitalLetter(str){

    var str = str.split(" ");
    var newArray = [];

    for (let i = 0; i < str.length; i++) {
        newArray.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
        
    }
    
    return newArray.join(" ");  

}
console.log(capitalLetter("the quick brown fox")); 