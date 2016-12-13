import { fv } from './utils';

export const paragraphText = (p, n, r) => `If you were to invest $${p} for ${n} periods at ${r}% annual interest, you would have $${fv(p, n, r)}.`;
