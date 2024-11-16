function calculateA(b: number, c: number): number {
    return Math.sqrt((c * c) - (b * b));
}

function calculateB(a: number, c: number): number {
    return Math.sqrt((c * c) - (a * a));
}

function calculateC(a: number, b: number): number {
    return Math.sqrt((a * a) + (b * b));
}



// first formular (Calculate C)
const calcCForm: HTMLInputElement = document.querySelector('#calc-c');

calcCForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcCForm.querySelector('[name=a-input]');
    const bInput: HTMLInputElement = calcCForm.querySelector('[name=b-input]');
    const result: HTMLInputElement = calcCForm.querySelector('[name=result]');
    result.value = `${calculateC(aInput.valueAsNumber, bInput.valueAsNumber)}`;
});


// second formular (Calculate A)
const calcAForm: HTMLInputElement = document.querySelector('#calc-a');

calcAForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bInput: HTMLInputElement = calcAForm.querySelector('[name=b-input]');
    const cInput: HTMLInputElement = calcAForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcAForm.querySelector('[name=result]');
    result.value = `${calculateA(bInput.valueAsNumber, cInput.valueAsNumber)}`;
});


// third formular (Calculate B)
const calcBForm: HTMLInputElement = document.querySelector('#calc-b');

calcBForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcBForm.querySelector('[name=a-input]');
    const cInput: HTMLInputElement = calcBForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcBForm.querySelector('[name=result]');
    result.value = `${calculateB(aInput.valueAsNumber, cInput.valueAsNumber)}`;
});