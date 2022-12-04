import { describe, it, expect } from "vitest";
import { indexesOf } from "./indexesOf";

describe("indexesOf", () => {
  it("should get index of simple number", () => {
    expect(indexesOf([1,1,3,1,4,5,3,1], 1)).toEqual([0, 1, 3, 7])
  })

  it("should get index of simple number condition", () => {
    expect(indexesOf([1,1,3,1,4,5,3,1], (i: number) => i > 2)).toEqual([2, 4, 5, 6])
  })

  it("should get index of complex object condition", () => {
    const objs = [
      { age: 21, nationality: "a" },
      { age: 24, nationality: "a" },
      { age: 21, nationality: "b" },
      { age: 32, nationality: "c" },
      { age: 42, nationality: "b" },
      { age: 52, nationality: "c" },
      { age: 21, nationality: "a" },
    ]

    const indexes = indexesOf(objs, (i: any) => i.nationality === "b")

    expect(indexes).toEqual([2, 4])
  })

  it("should get return empty array if no match", () => {
    expect(indexesOf([1,1,3,1,4,5,3,1], 100)).toEqual([])
  })

  it("should get return empty array if array empty", () => {
    expect(indexesOf([], 100)).toEqual([])
  })
})