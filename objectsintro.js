var person = {
  firstName: "Isaac",
  preferredName: "Isaac",
  lastName: "McGaha Miller"
}

person.age = 29;
person.birthday = "10/14/1986";
person.address = {
  line1: "123 Memory Lane",
  line2: "apt 4",
  city: "Denver",
  state: "CO",
  zip: "80206"
}

person.hobbies = [
  {name: "video games", levelOfInterest: 10},
  {name: "playing music", levelOfInterest: 9},
  {name: "watching YouTube", levelOfInterest: 7}];

person.isAwesome = true;


delete person.hobbies;
delete person.isAwesome;
delete person.address;

console.log(person);

for (var key in person ) {
  console.log("key", key);
  console.log("value", person[key]);
}
