let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

console.log("Object 1:", obj1);
console.log("Object 2:", obj2);

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

let parsedObj1 = JSON.parse(str1);
let parsedObj2 = JSON.parse(str2);

function compareObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let result = compareObjects(parsedObj1, parsedObj2);

if (result) {
  console.log("Objects are the same");
} else {
  console.log("Objects are not the same");
}
