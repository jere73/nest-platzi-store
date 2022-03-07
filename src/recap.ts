const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => a + b;

suma(12, 50);

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My names is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
