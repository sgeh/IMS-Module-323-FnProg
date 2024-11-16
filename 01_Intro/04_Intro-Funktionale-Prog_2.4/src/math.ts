function sum(x: number, y: number): number {       // x und y zusammenzählen
    return x + y;
}

function sub(x: number, y: number): number {       // y von y abzählen
    return x - y;
}

function div(x: number, y: number): number {       // x durch y teilen
    return x / y;
}

function mul(x: number, y: number): number {       // x mit y multiplizieren
    return x * y;
}

function power(n: number, base: number): number {  // base^n potenzieren (power)
    return base ** n;
}

function square(x: number): number {               // x quadrieren (x^2)
    return power(2, x);
}

function squareRoot(x: number): number {           // Wurzel von x (x^½)
    return power(0.5, x);
} 

function pi() {
    return Math.PI;
}

function asDegree(x: number) {
    return div(mul(x, 180), pi());
}

export function calculateA(b: number, c: number): number {
    return squareRoot(sub(square(c), square(b)));
}

export function calculateB(a: number, c: number): number {
    return squareRoot(sub(square(c), square(a)));
}

export function calculateC(a: number, b: number): number {
    return squareRoot(sum(square(a), square(b)));
}

export function calculateAlpha(b: number, c: number): number {
    return asDegree(Math.acos(div(b, c)));
}

export function calculateBeta(a: number, c: number): number {
    return asDegree(Math.acos(div(a, c)));
}


// Testaufrufe (assert gibt einen Fehler aus, falls erstes Argument false ist)
console.assert(calculateC(3, 4) === 5, "c must be 5; when a=3, b=4");
console.assert(calculateA(4, 5) === 3, "a must be 3; when b=4, c=5");

function areSame(x: number, y: number): boolean {
    return Math.abs(sub(x, y)) < 0.000001;
}

console.assert(areSame(calculateAlpha(4, 5), 36.869897646), "alpha must be 36.89..; when b=4, c=5");
