import { describe, expect, test } from "@jest/globals";
import fn from "../src/index";

describe("LC/241._Different_Ways_to_Add_Parentheses", () => {
  test("T1", () => {
    const input = "2-1-1";
    const output = [0, 2];
    expect(fn(input).sort((a, b) => a - b)).toStrictEqual(output.sort((a, b) => a - b));
  });
  test("T2", () => {
    const input = "2*3-4*5";
    const output = [-34, -14, -10, -10, 10];
    expect(fn(input).sort((a, b) => a - b)).toStrictEqual(output.sort((a, b) => a - b));
  });
  test("T3", () => {});
});
