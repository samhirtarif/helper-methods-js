import { describe, it, expect } from "vitest";
import { dedupe } from "./dedupe";

describe("dedupe", () => {
  it("should dedupe list of numbers", () => {
    const deduped = dedupe([1,1,3,1,4,5,3,1]);
    expect(deduped).toEqual([1,3,4,5])
  })

  it("should dedupe based on condition", () => {
    const cars = [
      { name: "audi", owner: "a" },
      { name: "bmw", owner: "x" },
      { name: "audi", owner: "b" },
      { name: "bmw", owner: "b" },
    ]

    const deduped = dedupe(cars, (e, i) => e.owner === i.owner);
    expect(deduped).toEqual(
      [
        {
          name: "audi",
          owner: "a"
        }, 
        {
          name: "bmw",
          owner: "x"
        },
        {
          name: "audi",
          owner: "b"
        },  
      ]
    )
  })

  it("should remove duplicates based on object references", () => {
    const person1 = { firstName: "Samhir", lastName: "Tarif" }
    const person2 = { firstName: "Jhon", lastName: "Doe" }
    const person3 = { firstName: "Jane", lastName: "Doe" }

    const deduped = dedupe([person1, person2, person1, person3]);
    expect(deduped).toEqual([person1, person2, person3])
  })
});