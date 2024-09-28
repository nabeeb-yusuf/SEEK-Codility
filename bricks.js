/**
 * There are N boxes (numbered from 0 to N-1) arranged in a row.
 * The K-th box contains A[K] bricks. In one move you can take one brick
 * from some box and move it to a box next to it (on the left or on the right).
 * What is the minimum number of moves needed to end up with exactly 10 bricks in every box?
 * Write a function solution(A) that, given an Array of A of N integers,
 * returns the minimum number of moves needed to end up with exactly 10 bricks in every box.
 * If this is not possible, the function should return -1.
 */

function bricks(A) {
    let totalBricks = A.reduce((a, b) => a + b, 0);
    let N = A.length;
    let excess = 0;
    let moves = 0;

    if (totalBricks !== N * 10) return -1;

    for (let i = 0; i < N; i++) {
        // For each box i, we calculate balance += A[i] - 10,
        // where A[i] is the number of bricks in box i,
        // and 10 is the target number of bricks for that box.
        excess += A[i] - 10;

        // The number of moves required is the sum of the
        // absolute values of balance at each step
        // because we have to move that many bricks to or from the next box to achieve balance.
        moves += Math.abs(excess);
    }

    return moves;
}

console.log(bricks([6,7,8,5,3,8,9,1,3]));