@@ -0,0 +1,36 @@
let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

/*
function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
} 
*/
const getAge=(pet) =>  {return new Date().getFullYear() - pet.bornOn}; 

/*var petsWithAge = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}*/

const petsWithAge = pets.map((pet)=>{return pet.age = getAge(pet); } );
console.log(petsWithAge);

/*var dogs = [];
for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);*/
const dogs = pets.map((dog)=>{ (pet.type === "dog")?dogs.push(pet);});
console.log(dogs);

/*var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}*/
const jasper = pets.map((jasper)=>{(pet.name === "Jasper")? jasper = pet;});
console.log(`Jasper is ${jasper.age } years old`);