function vowel_count(str){
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if(vowelList.indexOf(str[i]) !== -1){
            vowelCount += 1;
        }
    }
    return vowelCount;
}
console.log(vowel_count("The quick brown fox")); 
