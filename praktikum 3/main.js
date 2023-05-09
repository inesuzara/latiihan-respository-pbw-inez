// /alert("Halo aku Inez! :)")

// let nama;
// nama = "Inez Zahra";
// alert(nama);

// const angka = "1";
// console.log(angka);

// let visiMisi = "inez cantikkkkkkkkkkkkkkkkk";
// alert(visiMisi);

let faculties = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Teknik",
    "Fakultas Ilmu Sosial dan Ilmu Politik",
    "Fakultas Agama Islam"
   ];
   console.log(faculties[0]);
   console.log(faculties[1]);
   console.log(faculties[2]);
   console.log(faculties[3]);
   console.log(faculties[4]);
   
faculties[1] = "Fakultas Ekonomi dan Bisnis";
console.log(faculties);
faculties[4] = 50;
console.log(faculties);
let coordinate = [
 [0,3],
 [6,2],
 [9,8]
];
console.log(coordinate[0][0]);
console.log(coordinate[0][1]);
console.log(coordinate[1][0]);
console.log(coordinate[1][1]);
console.log(coordinate[2][0]);
console.log(coordinate[2][1]);

// let results = 9+10;
// console.log(results);
// results = 15-10;
// console.log(results);
// results = 9*5;
// console.log(results);
// results = 18/2;
// console.log(results);
// results = 28 % 3; 
// console.log(results);
// results = 10 + 15 * 2 / 2;
// console.log(results);

let results = 18 < 2;
console.log(results);
results = 10 > 3;
console.log(results);
results = 5 >= 10;
console.log(results);
results = 16 <= 4;
console.log(results);
results = 19 == 10;
console.log(results);
results = 20 === 20;
console.log(results);

let bool;
bool = true && false;
console.log(bool);
bool = false || true;
console.log(bool);
bool = !false;
console.log(bool);
bool = true || true || false;
console.log(bool);
bool = true && false     

let firstName, lastName, fullName;

firstName = "Inez ";
lastName = "Zahra";
fullName = firstName +"" + lastName;

alert("Halo nama saya" + fullName)

let mahasiswa = ["inez ","zahra ","iz"]
console.log(mahasiswa[1]+"dan"+mahasiswa[0]);

let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"];
console.log(male);
let female = ["Lilis Puspitasari","Ririn Noviyanti","Putri Wijaya"];
console.log(female);
let students = [...male,...female];
console.log(students);

let gender;
gender = 'P';
if(gender === 'L'){
 console.log("I'm a man");
}else{
 console.log("I'm a woman");
}

// let username, password;
// username = "Admin";
// password = "qwerty";
// const isSuccess = true;
// const isFailed = false;
// if(username ==="Admin" && password === "qwerty"){
//  console.log(isSuccess);
// }else if(username === "Admin" && password !== "qwerty"){
//  console.log(isFailed);
// }else if(username !== "Admin" && password === "qwerty"){
//  console.log(isFailed);
// }else{
//  console.log(isSuccess);
// }

let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if(username === "Admin"){
 if(password === "qwerty"){
 console.log(isSuccess);
 }else{
 console.log(isFailed);
 }
}else if(password === "qwerty"){
 console.log(isFailed);
}else{
 console.log(isFailed);
}


let grade = 'A';
switch(grade){
 case 'A':
 console.log("Very good");
 break;
 case 'B':
 console.log("Good");
 break;
 case 'C':
 console.log("Enough");
 break;
 case 'D':
 console.log("Very Enough");
 break;
 default:
 console.log("No Grade");
 break;
}

let age = 18;
let result = (age >= 18) ? "Eligible for voting" : "Not eligible for voting";
console.log(result);

// let age = 18;
// let result = (age >= 18) ? "Eligible for voting" : "Not 
// eligible for voting";
// console.log(result);

let weeks = 3;
let days = 7;
for (let i = 1; i <= weeks; ++i) {
 console.log("Week: " + i);
 for (let j = 1; j <= days; ++j) {
 console.log(" Day: " + j);
 }
}

function greet(){
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Night");
   }
greet();

function greet(){
    return "Good Morning";
   }
   let regard = greet();
   console.log(regard);
   console.log(greet());

   function hobbies(){
    const listHobbies =
   ["Footbal","Swimming","Reading","Writing","Coding"];
    return listHobbies;
   }
   let hobby = hobbies();
   for (const iterator of hobby) {
    console.log(iterator);
   }


function sum(number1, number2){
 let results = number1 + number2;
 return results;
}
console.log(sum(5,5));

function average(...index){
    let sum = index.length;
    let result = 0;
    for(const i of index){
    result += i;
    }
    return result/sum;
   }
   let x = average(4,8,3,7);
   console.log(x);

   const greet = () =>{
    console.log('Good Morning');
   }
   greet();

   const sum = (x, z) => {
    let result = x + z;
    return result;
   }
   let result1 = sum(5,10);
   console.log(result1);
   