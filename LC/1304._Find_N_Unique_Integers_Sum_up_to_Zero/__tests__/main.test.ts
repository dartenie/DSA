import { describe, expect, test } from "@jest/globals";
import fn from "../src/index";

describe("LC/1304._Find_N_Unique_Integers_Sum_up_to_Zero", () => {
  test("T1", () => {
    const n = 5;
    const sol = fn(n);
    const sum = sol.reduce((a, b) => a + b, 0);
    expect(sum).toEqual(0);
  });
  test("T2", () => {
    const n = 3;
    const sol = fn(n);
    const sum = sol.reduce((a, b) => a + b, 0);
    expect(sum).toEqual(0);
  });
  test("T3", () => {
    const n = 1;
    const sol = fn(n);
    const sum = sol.reduce((a, b) => a + b, 0);
    expect(sum).toEqual(0);
  });
});
