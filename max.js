var business = 573;
var minister = 563;
var shchib = 543;
 
if(business > minister){
    if(business > shchib){
        console.log("business is begger");   
    }
    else{
        console.log("shochib is beiiger");
    }
}
else{
    if(minister>shchib){
        console.log("minister is bigger");
    }
    else{
        console.log("shochib is bigger");
    }
}
//methode 2..
var business = 573;
var minister = 563;
var shchib = 543;
var result = Math.max ( business, minister, shchib);
console.log( result );

//methode 3
var business = 573;
var minister = 563;
var shchib = 543;
var result = Math.min ( business, minister, shchib);
console.log( result );