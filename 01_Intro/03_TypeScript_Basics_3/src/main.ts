function calculateA(b: number, c: number): number {
    return Math.sqrt((c * c) - (b * b));
}

function calculateB(a: number, c: number): number {
    return Math.sqrt((c * c) - (a * a));
}

function calculateC(a: number, b: number): number {
    return Math.sqrt((a * a) + (b * b));
}


const calcHistory: { a: number, b: number, c: number }[] = [ ]; 

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

    const historyEntry: {a: number, b: number, c: number}  = {
        a: aInput.valueAsNumber,
        b: bInput.valueAsNumber,
        c
    }
    calcHistory.push(historyEntry);
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

    const historyEntry: {a: number, b: number, c: number}  = {
        a,
        b: bInput.valueAsNumber,
        c: cInput.valueAsNumber
    }
    calcHistory.push(historyEntry);
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

    const historyEntry: {a: number, b: number, c: number} = {
        a: aInput.valueAsNumber,
        b,
        c: cInput.valueAsNumber
    }
    calcHistory.push(historyEntry);
});


