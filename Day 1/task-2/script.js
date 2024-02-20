// normal function

function combine(a,b,c) {
    return a*b/c ;
}

const res = combine(10,50,5);
console.log(res);


// arrow function

const sum = (a,b,c) => {
    return a+b+c ;
}

const sumOfNumbers = sum(10,20,30);
console.log(sumOfNumbers);

// class and objects

class User {
    constructor(name,age) {
        this.name = name ;
        this.age = age ;
    }

    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("Shafi",21);
console.log(user1);
user1.greet();



// Arrays 

const arr1 = ['apple','orange','banana'];

console.log(arr1[0]); // apple

// array methods

// 1. push 
arr1.push("strawberry");
console.log(arr1);

// 2. findIndex
const index = arr1.findIndex((item) => {
    return item === 'orange';
})

console.log(index); // 1

// 3. map
const edited = arr1.map((item) => {
    console.log(item+'!');
})


// task:

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects

    return (
        numberArray.map((item) => ({val: item}))
    )
}

const finalRes = transformToObjects([1,2,3]);
console.log(finalRes);


