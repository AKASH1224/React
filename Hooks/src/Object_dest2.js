// You can collect the remaining properties using the rest ... operator:
const person={
name:"jack",
age :25,
city:"Delhi"
}
const {name ,...rest } =person
console.log(name);
console.log(rest);

