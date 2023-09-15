// Reiterate existing design
// An existing (partially or fully constructed) design is a Prototype
// Prototype - a partially or fully initialized object that you copy (clone) and make use of
class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `Address: ${this.streetAddress}, ${this.city}, ${this.country}`;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  deepCopy() {
    return new Person(this.name, this.address.deepCopy());
  }
  toString() {
    return `${this.name} lives at ${this.address}`;
  }
}
// john is a prototype
let john = new Person("John", new Address("123 London Road", "London", "UK"));

let jane = john.deepCopy();
jane.name = 'Jane';
jane.address.streetAddress = "10 Palm street";
jane.address.city = "London";
jane.address.country = "UK";
console.log(john.toString());
console.log(jane.toString());
