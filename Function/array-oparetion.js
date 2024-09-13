function sumOfNumber(numbers) {
    let sum=0
    for(const number of numbers){
        console.log(number);
        sum=sum+number;
    }
    return sum
}
const numbs=[12, 23, 30, 40,50]
const sum = sumOfNumber(numbs);
console.log("sum of number is:", sum);
