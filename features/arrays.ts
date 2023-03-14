const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//Why so much focus on arrays?//

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Preventing wrong values
const siema = 10;
// carMakers.push(siema);

//helps with built in methods
carMakers.map((car: string): string => {
    return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-10-22'];
