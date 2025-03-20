const person ={
    name:"Akash",
    age :24
    
};

// const {name, age, city} = person;
// const {name:fullName,age:age} =person;
const {name:fullName,city = "Delhi"} =person

console.log(fullName)
console.log(city)
// console.log(city)



