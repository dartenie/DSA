export default function getNoZeroIntegers(n: number): [number, number] {
  // no need to bruteforce
  // just build it digit by digit, starting from the least significant
  // 1-9 are valid digits
  // summing them up gives you the range 2-18
  // if you need to add to 1, you will force a carry, so anything that sums to 11
  // theres a lot of freedom other than that, 4-5 8-1, etc (as well as carry versions)

  let a: number = 0;
  let b: number = 0;
  let place = 1; // 10^i

  // iterate over n's digits
  while (n > 0) {
    const digit = n % 10;

    // assume a and b are correct so far
    if (digit === 0) {
      // need to sum up to 10 exactly
      a += 5 * place;
      b += 5 * place;
      // borrow the carry
      n -= 10;
    } else if (digit === 1 && n >= 10) {
      // need to sum up to 11 exactly, we need n to allow the carry
      a += 5 * place;
      b += 6 * place;
      // borrow the carry again
      n -= 10;
    } else {
      // its 2-9, which we can build normally without issues
      a += 1 * place;
      b += (digit - 1) * place;
    }

    place = place * 10;
    n = Math.floor(n / 10);
  }

  return [a, b];
}
