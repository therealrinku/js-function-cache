import jsFunctionCache from "./index.js";

const sum = (a: number, b: number) => a + b;

const cached = () => jsFunctionCache("testing", () => sum(2, 4));

console.log(cached(), "res");
