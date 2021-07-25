function sayLoveYou(){
    console.log('I Love You');
    console.log('Would you call me at night');
}

sayLoveYou();

var num = 45;
console.log('The day is windy');
sayLoveYou();

function doubleIt(num){
var result = num * 2;
return result;
}
var first = doubleIt(5);
var second = doubleIt(10);
var total = first + second;
console.log(total);

function add(num1, num2){
    var result = num1 + num2;
    return result; 
}
var sum = add(15, 25);
console.log(sum);