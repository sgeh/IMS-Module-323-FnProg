function sum(x: number, y: number): number {       // x und y zusammenzählen
    return x + y;
}

function sub(x: number, y: number): number {       // y von y abzählen
    return x - y;
}

function power(n: number, base: number): number {  // base^n potenzieren (power)
    return base ** n;
}

function square(x: number): number {               // x quadrieren (x^2)
    return power(2, x);
}

function squareRoot(x): number {                   // Wurzel von x (x^½)
    return power(0.5, x);
} 


function calculateA(b: number, c: number): number {
    return squareRoot(sub(square(c), square(b)));
}

function calculateB(a: number, c: number): number {
    return squareRoot(sub(square(c), square(a)));
}

function calculateC(a: number, b: number): number {
    return squareRoot(sum(square(a), square(b)));
}

// Testaufrufe (assert git eine Fehler aus, falls erstes Argument false ist)
console.assert(calculateC(3, 4) === 5, "c must be 5; when a=3, b=4");



/**
 * IMPERATIVE IMPLEMENTATION OF UI
 */

interface HistoryEntry { a: number, b: number, c: number }
class HistoryItem {
    constructor(
        public a: number,
        public b: number,
        public c: number) { }
}

const calcHistory: HistoryEntry[] = [ ]; 

document.querySelector('#show-history').addEventListener('click', (e) => {
    let output = '-- History --\n\n';

    for (let history of calcHistory) {
        output += `a=${history.a}, b=${history.b}, c=${history.c}\n`;
    }
    alert(output);
});



// first formular (Calculate C)
const calcCForm: HTMLInputElement = document.querySelector('#calc-c');

calcCForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcCForm.querySelector('[name=a-input]');
    const bInput: HTMLInputElement = calcCForm.querySelector('[name=b-input]');
    const result: HTMLInputElement = calcCForm.querySelector('[name=result]');

    const c = calculateC(aInput.valueAsNumber, bInput.valueAsNumber);
    result.value = `${c}`;
    calcHistory.push(new HistoryItem(aInput.valueAsNumber, bInput.valueAsNumber, c));
});


// second formular (Calculate A)
const calcAForm: HTMLInputElement = document.querySelector('#calc-a');

calcAForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bInput: HTMLInputElement = calcAForm.querySelector('[name=b-input]');
    const cInput: HTMLInputElement = calcAForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcAForm.querySelector('[name=result]');

    const a = calculateA(bInput.valueAsNumber, cInput.valueAsNumber);
    result.value = `${a}`;
    calcHistory.push(new HistoryItem(a, bInput.valueAsNumber, cInput.valueAsNumber));
});


// third formular (Calculate B)
const calcBForm: HTMLInputElement = document.querySelector('#calc-b');

calcBForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcBForm.querySelector('[name=a-input]');
    const cInput: HTMLInputElement = calcBForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcBForm.querySelector('[name=result]');

    const b = calculateB(aInput.valueAsNumber, cInput.valueAsNumber);
    result.value = `${b}`;
    calcHistory.push(new HistoryItem(aInput.valueAsNumber, b, cInput.valueAsNumber));
});


