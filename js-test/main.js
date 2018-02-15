// A1
alert('Script successfully loaded!');

// A2
const booleanVariable = true;
const stringVariable = 'Hello World!';
const integerVariable = 42;
const arrayVariable = [4, 8, 15, 16, 23, 42];

log(booleanVariable);
log(stringVariable);
log(integerVariable);
log(arrayVariable);

function log(value) {
    console.log(`${typeof value} has value ${value}`);
}

// A3
const numbers0 = [];
const numbers1 = [];
const numbers2 = [];

for (let i = 0; i < 10; i++) {
    numbers0.push(i);
    numbers1.push(i);
}

for (let i = 1; i < 10; i += 2) {
    numbers2.push(numbers0[i] + numbers1[i]);
}

console.log(numbers2);

// A4
range(0, 30);

function range(range_start, range_end) {
    for (let i = range_start; i < range_end; i++) {
        const printInfo = i % 3 === 0 && i % 5 !== 0;
        const printViz = i % 5 === 0 && i % 3 !== 0;
        const printInfoViz = i % 3 === 0 && i % 5 === 0;

        if (printInfo) {
            console.log('Info');
        }

        if (printViz) {
            console.log('Viz');
        }

        if (printInfoViz) {
            console.log('InfoViz');
        }

        if (!printInfo && !printViz && !printInfoViz) {
            console.log(i);
        }
    }
}

// A5
document.body.addEventListener('keyup', event => alert(event.key));