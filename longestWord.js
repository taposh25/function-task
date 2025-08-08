function longestWord(str) {
    var array = str.match(/\W[a-z]{0,}/gi);
    var result = array[0];

    for (let i = 0; i < array.length; i++) {
        if(result.length < array[i].length){
            result = array[i];
        }
        
    }
    return result;
    
}
console.log(longestWord("Web Development Tutorial"));