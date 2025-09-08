import { describe, expect, test } from "@jest/globals";
import fn from "../src/index";

const check = (n: number, sol: [number, number]) => {
  // const str = n.toString();
  const [a, b] = sol;
  if (a + b !== n) return false;
  if (a <= 0 || b <= 0) return false;
  if (a.toString().includes("0") || b.toString().includes("0")) return false;
  return true;
};

describe("LC/1317._Convert_Integer_to_the_Sum_of_Two_No-Zero_Integers", () => {
  test("T1", () => {
    expect(check(2, fn(2))).toBe(true);
  });
  test("T2", () => {
    expect(check(11, fn(11))).toBe(true);
  });
});
