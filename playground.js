import funCache from "./index.js";

const sum = (a, b) => a + b;

const cached = () => funCache("testing", () => sum(2, 4));

console.log(cached(), "res");
