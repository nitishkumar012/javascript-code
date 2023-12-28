// let lang='java javaScript python cSharp';
// let res=lang.lastIndexOf('S'); 
// console.log(res);



/*  **************************************FUNCTION********************************************* */
// finding the last index fo string using normal function
// function last(val,str='Nitish'){
// console.log(str.lastIndexOf(val));
// }
// last('i');
//************************************************************************************************************ */
//function that using variable

// let val=function(str){
//     console.log(str.toUpperCase());
// }
// val('nitish kumar');

//********************************************************************************************************* */
//Arrow Function is an special type function that will use when we want fast execution 

// let val=(name)=>{
//     return (name.toLowerCase());
// }
// let res=val('NITISH KUMAR');
// console.log(res);
//********************************************************************************************* */
//split
// let str="Nitish Kumar";
// console.log(str.split(" "));
 //******************************************************************************************** */
//Slice
// function s(name){
//     console.log(name.slice(0,5));
// }
// s('Nitish kumar');
// let s=function(name){
//     return (name.trim());
// }
// let val="  Nitish Kumar   ";
// console.log(val.length);
// let val2=s(val);
// console.log(val2.length);
//************************************************************************************************ */
//higher order function mtl function as a arrgument pass karna

// let upper=(str)=>{
//     return str.toUpperCase();
// }
// let lower=(str)=>{
//     return str.toLowerCase();
// }
// let high=(str,fun)=>{
//     return fun(str);
// }
// console.log(high('nitish',upper))
// console.log(high("NITISH",lower));
//********************************************************************************************* */
// another type of higher order function is Function passing as a function arrgument meanst returning an function as arrugument

// let con=function(msg){
//     return function(name){
//     console.log(`${msg} meri ${name}`);
//     }
// }
// let com=con('I love you');
// com('Babu');
//***************************************************************************************** */
//Immediately Invoked function Expression : This is an function when we want to exection of function fast

// (function(name){
//     console.log(`I love mera Shona Babu ${name}`)
// })('Vishu');
//*********************************************************************************************** */
// Hoisting in javascript this is basically for function and var keyword
//Hoisting is defined as technique that will decleare function aur variable to the top of code
// test=10;
// console.log(test);
// var test; 
//is code me humne variable ko console ke bad pass kara hai jab bhi code execute ho raha hai because of hoisting
 // same like function means we can decleare fun and we can call function before decleration or after decleration

// test('Vishu')
//  function test(sname){
//     console.log(sname);
//  }

//hoisting mgr arrow function aur as arrgument pass funnction me nhi hoga



// ********************************setTimeout*****************************************//
//setTimeout bole to jo output ayga wo kuch delay se ayga 
//syntax:setTimeout(fun,time)
//  function greet(){
//     console.log('good morning babu');
//  }
//  setTimeout(greet,5000);


//*******************************************setInterval**********************************//
//setInterval is like isme output me delay to hoga hi asth hi sath repetation bhi hoga 
// function greet(){
//     console.log('good morning babu');
//  }
//  setInterval(greet,3000);
