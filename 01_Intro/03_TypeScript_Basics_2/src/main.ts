// first formular (Calculate C)
const calcCForm: HTMLInputElement = document.querySelector('#calc-c');

calcCForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcCForm.querySelector('[name=a-input]');
    const bInput: HTMLInputElement = calcCForm.querySelector('[name=b-input]');
    const result: HTMLInputElement = calcCForm.querySelector('[name=result]');
    
    const a = aInput.valueAsNumber;
    const b = bInput.valueAsNumber;
    const c = Math.sqrt((a * a) + (b * b));
    result.value = `${c}`;
});


// second formular (Calculate A)
const calcAForm: HTMLInputElement = document.querySelector('#calc-a');

calcAForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bInput: HTMLInputElement = calcAForm.querySelector('[name=b-input]');
    const cInput: HTMLInputElement = calcAForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcAForm.querySelector('[name=result]');
    
    const b = bInput.valueAsNumber;
    const c = cInput.valueAsNumber;
    const a = Math.sqrt((c * c) - (b * b));
    result.value = `${a}`;
});


// third formular (Calculate B)
const calcBForm: HTMLInputElement = document.querySelector('#calc-b');

calcBForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcBForm.querySelector('[name=a-input]');
    const cInput: HTMLInputElement = calcBForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcBForm.querySelector('[name=result]');
    
    const a = aInput.valueAsNumber;
    const c = cInput.valueAsNumber;
    const b = Math.sqrt((c * c) - (a * a));
    result.value = `${b}`;
});