var numbers = [20, 74, 34, 23, 56, 40, 65, 50];
var sum = 0;
for(i = 0; i < numbers.length; i++){
var tata = numbers[i];
sum = sum + tata;
}
console.log("tottal of the number:",sum);


// function decleration...
function habib(numbers){
    var sum = 0;
    for(var i = 0; i <numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [20, 74, 34, 23, 56, 40, 65, 50];
var result = habib(numbers);
console.log("tottal of the number:", result);

// direct arrre dicleration..
var result2 = habib([38, 83, 83, 83, 88, 455]);
console.log("tottal of the number:", result2);
