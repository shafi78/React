// Array destructuring

const [firstName,lastName] = ['Shafi','Attar'];

console.log(firstName);

const {name,age} = {
    name: "Sameer",
    age: 25,
}

console.log(name,age);


// spread operator

// with arrays

const hobbies = ['sports','learning'];
const newHobbies = ['prayer'];

const mergedArray = [...hobbies,...newHobbies];
console.log(mergedArray);

// with objects

const user = {
    name: "yusuf",
    age: 20
}


const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser);



// interview task

const arr = [[10,20],[40,100],50,60,70];
console.log(arr.flat());


// Conditional statements

const password = prompt("Enter your password: ");

if (password === "Hello") {
    console.log("Hello works!");
}

else if (password === "hello") {
    console.log("hello works!");
}

else {
    console.log("Access not granted!");
}


// for of

const games = ['cricket','football'];

for (const game of games) {
    console.log(game);
}


// setTimeout function (display content after 3s)

setTimeout(() => {
    console.log("Hello");
},3000)


// 5s

function handleTimeout() {
    console.log("Timed out!") ;
}

setTimeout(handleTimeout,5000);

// setInterval function

const id = setInterval(() => {
    console.log("setted Interval!");
},2000);

setTimeout(() => {
   clearInterval(id) ;
}, 10000);

// output : It will print settted interval 5 times i.e 10s


// callback function

function greet(arg) {
    arg();
}

function good() {
    console.log("Good morning!");
}

console.log(greet(good));


// closures

function outer() {
    const a = 10 ;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();