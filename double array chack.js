var num = ["habib", "talha", "abdullah","talha", "mahmudullah","habib"];
var uniqueArray = []; 

for (i = 0; i <num.length; i = i + 1){
    var element = num[i];
    var index = uniqueArray.indexOf(element);
    if (index == -1){
        uniqueArray.push(element);
    } 
}
console.log(uniqueArray);

// example....

var name = [10, 20, 10, 30, 50, 30, 60, 70];
var blanck = [];

for (var i = 0; i < name.length; i = i + 1){
    var element = name[i];
    var index = blanck.indexOf(element);
    if (index == -1){
        blanck.push(element);
    }
}
  
    console.log(blanck);