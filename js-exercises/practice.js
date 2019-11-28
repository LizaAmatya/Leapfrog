// var arr = [1, 2, 3, 4, 5]

// var res = arr.map(function(val,index){

//     return val++;
//                   });

// console.log(res);
// console.log(arr === res);

// var res = arr.filter(function(val,index){
//                      return val % 2 ===0
//                      });

//  console.log(res);


// var arr = [1,1,1];
// var sum = arr.reduce(function(acc,curr){
//   acc += curr;
//   return acc;
// },0)

// console.log('sum',sum);


// var counter = 0;
// setTimeout(function(){
//   counter++;
//   console.log(counter);
// },1000);

// var interval = setInterval(function(){
//   counter++;
//   console.log(counter);
// },1000);

// setTimeout(function(){
//   clearInterval(interval)
// },5000);

//Asynchronous:
for (var i = 0; i < 10; i++) {
    setTimeout((function(i) {
        console.log(i);
    })(i), 1000); //soln: IIFE fucntion
}