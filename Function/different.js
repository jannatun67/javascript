function evenSizedString(str) {
    const size= str.length;
    console.log(str, size);
    if (str%2===0) {
        console.log("even size");
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
    
}
// evenSizedString('Dhaka')
// evenSizedString('faka')

function doubleOrTriple(number, doDouble) {
    if (doDouble===true) {
        const result= number*2;
        return result;
    }
    else{
        const result= number*3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElements(number) {
    const len= number.length;
    return len;
}
numberOfElements([12, 23,20, 30, 12, 14, 35, 30,40])



