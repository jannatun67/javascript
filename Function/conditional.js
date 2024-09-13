function add(price1, price2) {
    const total= price1+ price2;
    return total;
}

const bill= add(20,70);


function add2(price1 , price2) {
    return price1+ price2;

}

const bill2 = add2 (30, 80);
console.log(bill,bill2);



function  doMath(num1,num2) {
    const sum= num1+num2;
    const diff= num1- num2;
    const mult=sum* diff;
    const result=mult/2;
    return result;
}

const result = doMath(40,25);
console.log(result);




function isEven(number) {
    if (number%2===0) {
      return true;
        
    }
    else{
        return false;
    }
}

console.log(isEven(7));
console.log(isEven(120));


function isOdd(number) {
    if (number% 2===1) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(7));

console.log(isOdd(10));


