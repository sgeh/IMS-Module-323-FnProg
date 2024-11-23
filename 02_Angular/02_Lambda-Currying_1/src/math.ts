const sum = (x: number, y: number) => x + y;           // x und y zusammenzählen
const sub = (x: number, y: number) => x - y;           // y von y abzählen
const div = (x: number, y: number) => x / y;           // x durch y teilen
const mul = (x: number, y: number) => x * y;           // x mit y multiplizieren
const power = (n: number, base: number) => base ** n;  // base^n potenzieren (power)
const square = (x: number) => power(2, x);             // x quadrieren (x^2)
const squareRoot = (x: number) => power(0.5, x);       // Wurzel von x (x^½)
const pi = () => Math.PI;

const asDegree = (x: number) =>
    div(mul(x, 180), pi());

export const calculateA = (b: number, c: number) =>
    squareRoot(
        sub(square(c), square(b)));

export const calculateB = (a: number, c: number) =>
    squareRoot(
        sub(square(c), square(a)));

export const calculateC = (a: number, b: number) =>
    squareRoot(
        sum(square(a), square(b)));

export const calculateAlpha = (b: number, c: number) =>
    asDegree(
        Math.acos(
            div(b, c)));

export const calculateBeta = (a: number, c: number): number =>
    asDegree(
        Math.acos(
            div(a, c)));


// Testaufrufe (assert git eine Fehler aus, falls erstes Argument false ist)
console.assert(calculateC(3, 4) === 5, "c must be 5; when a=3, b=4");

const triangleArea = (g: number) => {
    const area = (h: number) => { return (g * h) / 2; }
    return area;
}
const tringleWith3H = triangleArea(3);
const area = tringleWith3H(4); 