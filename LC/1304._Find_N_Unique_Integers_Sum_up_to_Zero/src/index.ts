export default function sumZero(n: number): number[] {
  // fairly simple
  // even arrays -> [-n/2 ... -1, 1 ... n/2]
  // odd arrays -> [-(n//2) ... 0 ... n//2]
  // all terms cancel out to 0
  const res: number[] = [];
  const half = Math.floor(n / 2);
  for (let i = 1; i <= half; i++) {
    res.push(-i);
  }
  if (n % 2 !== 0) res.push(0);
  for (let i = 1; i <= half; i++) {
    res.push(i);
  }
  return res;
}
