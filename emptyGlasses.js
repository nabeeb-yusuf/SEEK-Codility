/**
 * There are N empty glasses with a capacity of 1,2..., N liters
 * (there is exactly one glass of each unique capacity).
 * You want to pour exactly K liters of water into glasses.
 * Each glass may be either full or empty (a glass cannot be partially filled).
 * What is the minimum number of glasses that you need to contain K liters of water?
 * Write a function solution(N, K) that, given two integers N and K,
 * returns the minimum number of glasses that are needed to contain exactly K liters of water.
 * If it is not possible to pour exactly K liters of water into glasses then the function
 * should return -1.
 */

function emptyGlasses(N, K) {
    let count = 0;

    for (let i = N; i > 0; i --) {
        if (i <= K) {
            K -= i;
            count++;
        }
        if (K === 0) {
            return count;
        }
    }

    return K === 0 ? count : -1;
}

console.log(emptyGlasses(7,15));