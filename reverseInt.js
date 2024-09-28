/**
 * You are given an implementation of a function solution,
 * that given a positive integer N, prints to standard output another integer,
 * which was formed by reversing a decimal representation of N.
 * The leading zeros of the resulting integer should not be printed by the function.
 * Examples, Given N = 54321, the function should print 12345. N = 10011,
 * the function should print 11001. N= 1, the function should print 1.
 * This code is still incorrect for some inputs.
 * The goal is to find and fix the bugs in this implementation,
 * modify at most three lines in the code:
 *
 * function solution(N) {
 *    var enable_print = N % 10;
 *    while (N > 0) {
 *       if (enable_print == 0 && N % 10 != 0) {
 *          enable_print = 1;
 *       }
 *       else if (enable_print ==1 ) {
 *          process.stdout.write((N % 10).toString());
 *       }
 *       N = Math.floor(N / 10);
 *    }
 * }
 *
 * Assume that N is an integer within the range [1...1000000000]
 */

function reverseInt(num) {
    let enable_print = false;
    while (num > 0) {
        if(enable_print && num % 10 !== 0) {
            enable_print = true;
        }
        else if (enable_print) {
            process.stdout.write((num % 10).toString());
        }
        num = Math.floor(num / 10);
    }
}

reverseInt(11007000);