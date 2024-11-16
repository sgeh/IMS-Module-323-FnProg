import {
    calculateA, calculateB, calculateC,
    calculateAlpha, calculateBeta
 } from './math';


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
    const angleResult: HTMLInputElement = calcAForm.querySelector('[name=angle-result]');

    const a = calculateA(bInput.valueAsNumber, cInput.valueAsNumber);
    result.value = `${a}`;
    angleResult.value = `${calculateAlpha(bInput.valueAsNumber, cInput.valueAsNumber)}`;
    calcHistory.push(new HistoryItem(a, bInput.valueAsNumber, cInput.valueAsNumber));
});


// third formular (Calculate B)
const calcBForm: HTMLInputElement = document.querySelector('#calc-b');

calcBForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aInput: HTMLInputElement = calcBForm.querySelector('[name=a-input]');
    const cInput: HTMLInputElement = calcBForm.querySelector('[name=c-input]');
    const result: HTMLInputElement = calcBForm.querySelector('[name=result]');
    const angleResult: HTMLInputElement = calcBForm.querySelector('[name=angle-result]');

    const b = calculateB(aInput.valueAsNumber, cInput.valueAsNumber);
    result.value = `${b}`;
    angleResult.value = `${calculateBeta(aInput.valueAsNumber, cInput.valueAsNumber)}`;
    calcHistory.push(new HistoryItem(aInput.valueAsNumber, b, cInput.valueAsNumber));
});


