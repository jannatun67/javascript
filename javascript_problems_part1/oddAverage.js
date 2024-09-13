function oddAverage(numbers) {
    const odds=[];
   for(const number of numbers){
    if (number%2===1) {
        // console.log(number);
        odds.push(number)
    }
    
   }
    // console.log(odds);
    let sum=0;
    for(const number of odds){
        sum = sum+ number;
    }
    const count= odds.length
    console.log( sum, count);
    const avg = sum/ count;
    return avg
    
}
const numbers= [20, 24, 26, 67, 57, 47, 39, 50]
const avg = oddAverage(numbers);
console.log(avg);
