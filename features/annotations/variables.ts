const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let undef: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, false, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Foo that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) Declare variable and initalize later

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) numberAboveZero = numbers[i];
}
