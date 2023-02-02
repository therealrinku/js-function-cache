import jsFunctionCache from "./index.js";

const sum = (a, b) => a + b;

const cached = () => jsFunctionCache("testing", () => sum(2, 4));

console.log(cached(), "res");
