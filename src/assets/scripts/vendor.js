import Person from './modules/Person';

if(module.hot){
  module.hot.accept();
}

/* Lesson example code below this line */
class Adult extends Person {
  payTaxes(){
    console.log(`${this.name} now owes zero taxes.`);
  }
}

let john = new Person("John Doe", "blue");
john.greet();

// let jane = new Person("Jane Smith", "green");
let jane = new Adult("Jane Smith", "green");
// jane.greet();
jane.payTaxes();

// console.log('.:: DEBUG ::. Vendor js file is loaded here.');