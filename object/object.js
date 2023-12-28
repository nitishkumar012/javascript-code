"use strict"
//****************************Intro Of Object****************************************************** //
// obect is like a combination of key and value
// let car={
//     name:'Mechlarin',
//     model:'2020',
//     color:'Black',
//     spped:'480mh'
// }
// console.log(typeof(car));
// console.log(car);
// console.log(car['name']);
// car['name']='Gwagan'
// console.log(car)
// console.log(car['name']);
 
//*************************************if we want to delete some thing in object*************************************//

// delete car.name;
// console.log(car);
//****************************************Adding new thing in object*************************************//

// car.name='Audi Q8';
// console.log(car);
//******************************Method*******************************************************//
//Method is something like a function which is decleared inside the function.

// let car={
//    name:'Audi' ,
//    dis:10,
//    speed:function(dis,time){
//     return dis/time;
//    }
// }
// console.log(car.speed(6,2));

//*******************************************THIS KEYWORD**********************************//
//this is a keyword which represent the current object .calling the method

// let calculate={
//     dis:10,
//     time:2,
//     avg:function(){
//         return this.dis / this.time;
//     }
// }
// // calculate['dis']=2;
// console.log(calculate.avg());

//******************************FOR EACH **********************************//
//for each is like an loop
// let dis=[10,20,30,40,50];
// dis.push(60);
// dis.forEach(function(element){
//     console.log(element);
// })
// //after pop
// console.log('**********')
// dis.pop();
// dis.forEach(function(element){
//     console.log(element);
// })

//***************************object inside array***************************//

// let arr=[{name:'Nitish',age:21},{name:'Monu',age:21}]
// arr.push({name:'prince',age:22})
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name);
//     console.log(arr[i].age);
// }

//*******************************Math Built in object********************************//
console.log(typeof(Math));
let val0=Math.random();
let val=val0*10
let val1=Math.round(val);
let val2=Math.floor(val);
let val3=Math.ceil(val);
let val4=Math.trunc(val);
console.table([val,val1,val2,val3,val4]);

//*****************************************CALL AND APPLY METHOD**************************************//
let flight={
    fname:"JET EXPRESS",
    fid:"001a",
    book:function(passenger,age){
        console.log(`${passenger} whose age is ${age} booked ${this.fname} whose id is ${this.fid} `);

    }
}
flight.book('Nitish',21);    