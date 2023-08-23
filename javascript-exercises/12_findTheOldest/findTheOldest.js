const findTheOldest = function(array) {
  let oldestAge = 0;
  let oldestPerson = undefined;

  for (const person of array) {
    if (person.yearOfDeath == undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }

    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    };
  }
  return oldestPerson;
};



// Do not edit below this line
module.exports = findTheOldest;
