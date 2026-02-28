import { Calculator } from "./Calculator";

const calculator = new Calculator();

const sum = calculator.add(10, 5);
const difference = calculator.subtract(10, 5);

console.log("Addition:", sum);
console.log("Subtraction:", difference);
