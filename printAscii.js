/**
 * In javascript, write a function solution(N) that
 * prints out ASCII-art in the shape of the capital letter L,
 * made up of copies of the capital letter L.
 * Parameter N is an integer (between 1 and 100)
 * and represents the expected size of the ASCII-art
 * (the output should comprise N rows, the last of which should comprise N letters L).
 * The function should not return any value.
 * @param N
 * @returns null
 */
function printAscii(N) {
    for (let i = 0; i < N - 1; i++) {
        console.log('L');
    }

    console.log('L'.repeat(N));
}
console.log(printAscii(7));