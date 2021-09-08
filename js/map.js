const myMap= new Map();
console.log(myMap);
const key1='myStr',
 key2={},
 key3= function(){};
myMap.set(key1,'this is a string');
myMap.set(key2,'this is a blank obj');
myMap.set(key3,'this is a function');
console.log(myMap);
let value1=myMap.get(key2);
console.log(value1);
console.log(myMap.size);
myMap.forEach((value,key) => {
    console.log('key is', key);
    console.log('value is', value)
});