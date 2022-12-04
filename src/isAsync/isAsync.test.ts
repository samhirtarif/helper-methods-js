import { describe, it, expect } from "vitest";
import { isAsyncFunction } from "./isAsync";

describe("isAsync", () => {
  it("should return true if function is async", () => {
    const testFn = async () => {};
    expect(isAsyncFunction(testFn)).toBeTruthy();
  })

  it("should return true if function is not async", () => {
    const testFn = () => {};
    expect(isAsyncFunction(testFn)).toBeFalsy();
  })
})