// var people = "name";
// var age = 26;
// var lt = "abc"
// alert(people);
// alert(age);

// console.log(lt);
// console.warn(age);
// console.error(people);

// setTimeout (function(){
//     confirm("xac nhan ban do!")
// } ,5000)
// setInterval (function(){
//     console.log("xac nhan ban do!" + Math.random())
// } ,1000)

// var a = 1; var b = 2;
// if(a < b) {
//     alert("dot toan vch");
// }

// var myObject = {
//     name : "H",
//     age : 26,
//     locationn : "hn"
// }
// //ctrl +D
// console.log("myObject", myObject);
// var myInfo = {
//     name: 'HHHH',
//     age: 26,
//     location: 'hn',
//     getAge: function(){
//         return this.location;
//     }
// }

// console.log(myInfo.getAge())

// function abc(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getName= function() {
//         return `${firstName} ${lastName}`;
//     }
// }

// abc.prototype.className = 'lop 8';
// abc.prototype.getClassName = function() {
//     return this.className;
// }
// var author = new abc('vu', 'duc', 23);
// var gust = new abc('le', 'dai', 27);

// console.log(author.className);
// console.log(gust.getClassName());

// var date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());

// var date = 3;

// switch(date) {
//     case 2:
//         console.log('Today is Monday');
//         break;
//     case 3:
//         console.log('Today is t3');
//         // break;
//     case 4:
//         console.log('Today is t4');
//         break;
// }

// var course = {
//     name: 'cyber security',
//     price: 50
// }

// // if (course.price > 0) {
// //     console.log(`price: ${course.price}`);
// // } else {
// //     console.log('Free')
// // }

// var result = course.price > 0 ? `price: ${course.price}` : "free";
// console.log(result)

// var a = 1;
// var b = 2;
// var c = a>b ? a:b;
// console.log(c)

// var languages = [
//     'js',
//     'python',
//     'php'
// ]
//  var myInfo = {
//     name : 'H',
//     age: 25,
//     Location: 'HN'
//  }

// var a = Object.keys(myInfo);

// for (var value of a) {
//     console.log(myInfo[value])
// }

// var courses = [
//     {
//         id : 1,
//         name: 'HTML',
//         price: 200
//     },
//     {
//         id : 2,
//         name: 'JS',
//         price: 100
//     },
//     {
//         id : 3,
//         name: 'PHP',
//         price: 50
//     },
//     {
//         id : 4,
//         name: 'SQL',
//         price: 300
//     },
//     {
//         id : 5,
//         name: 'C++',
//         price: 220
//     }
// ]

// var total = courses.reduce(function(a,b){
//     return a+b.price
// }, 0);
// console.log(total);

// var title = 'Responsive web design';
// console.log(title.includes('Responsive',2));

// var course = [
//     'PHP',
//     'HTML',
//     'Javascript',
//     'PHP',
//     'HTML',
//     'Javascript',
//     'PHP',
//     'HTML',
//     'Javascript',
//     'PHP',
//     'HTML',
//     'Javascript'
// ]

// Array.prototype.forEach2 = function(callback){
//     for (var i =0; i < course.length ; i++ ){
//         var result = callback(this[i]);
//         console.log(result)
//     }
// }
// course.forEach2(function(item){
//     return `<h1>${item}</h1>`
// })

// var a = course.filter(function(item,index){
//     // console.log(item,index)
//     return item === 'PHP';
// })
// console.log(a)

// document.write("HELLO everybody!");
// var headingNote = document.getElementById("heading");
// console.log([headingNote]);
// var headingNotes = document.getElementsByClassName("heading");
// console.log(headingNotes);
// var headingNotes = document.getElementsByTagName("h1");
// console.log(headingNotes);

// var headingNotes = document.querySelectorAll(".moreDeep .heading-2");
// console.log(headingNotes[2]);

var boxNotes = document.querySelector(".box-1");
console.log(boxNotes);

console.log(boxNotes.querySelectorAll("li"));
console.log(boxNotes.querySelector("p"));
