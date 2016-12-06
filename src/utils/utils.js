export const sum = (x, y) => x + y;
export const tax = (p, r) => p * r / 100;
export const total = (p, r) => sum(p, tax(p, r));
