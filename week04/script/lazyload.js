document.getElementById("last-modified").textContent = document.lastModified;

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
const namesB = names.filter(name => name.charAt(0) === "B");

const namesLength = names.map(names => names.length);

const initialValue = 0;
const i = namesLength.reduce((acumulator, currentValue) => acumulator + currentValue + initialValue);
const average = i/names.length;

console.log(namesB);
console.log(namesLength);
console.log(average);