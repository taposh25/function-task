function make_avg(arr, size){
    if (arr.length !== size) {
        return "Array size does not match the given size.";
    }
    let sum = 0;
    for (let i = 0; i < size; i++) {
       sum += arr[i];
        
    }
    return sum / size;

}
console.log(make_avg([10, 20, 30, 40, 50, 60], 6));