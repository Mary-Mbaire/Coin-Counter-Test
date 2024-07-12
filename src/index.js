import { coinCounterRecursive, createCoinCounter } from './coinCounter';

// Example usage
console.log(coinCounterRecursive(499)); // [19, 2, 0, 4]
const countCoins = createCoinCounter();
console.log(countCoins(499)); // [19, 2, 0, 4]