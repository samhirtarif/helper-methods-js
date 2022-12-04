import { describe, it, expect } from "vitest";
import { deepcopy } from "./deepcopy";

const person = {
	name: {
  	first: "Samhir",
    last: "Tarif"
  },
  something: {
  	something1: {
    	a: 1,
      b: 2,
      something2: {
      	c: 3
      }
    }
  },
  ssn: 99999999,
  status: "valid",
  cars: [
  	{name: "audi", year: 2021},
    {name: "bmw", year: 2022}
  ],
}

describe("deepcopy", () => {
  it("should create copy of all nested objects with no max depth provided", () => {
    const personCopy = deepcopy(person)
    expect(person.name).not.toBe(personCopy.name)
    expect(person.something).not.toBe(personCopy.something)
    expect(person.something.something1).not.toBe(personCopy.something.something1)
    expect(person.something.something1.something2).not.toBe(personCopy.something.something1.something2)

    expect(person.cars).not.toBe(personCopy.cars)
    expect(person.cars[0]).not.toBe(personCopy.cars[0])
    expect(person.cars[0].name).toBe(personCopy.cars[0].name)
    
  })

  it("should create copy of all nested objects till depth provided", () => {
    const personCopy = deepcopy(person, 3)
    expect(person.name).not.toBe(personCopy.name)
    expect(person.something).not.toBe(personCopy.something)
    expect(person.something.something1).not.toBe(personCopy.something.something1)
    expect(person.something.something1.something2).toBe(personCopy.something.something1.something2)

    expect(person.cars).not.toBe(personCopy.cars)
    expect(person.cars[0]).not.toBe(personCopy.cars[0])
    expect(person.cars[0].name).toBe(personCopy.cars[0].name)
  })

  it("should return empty if empty entity (object or array) provided", () => {
    const copy1 = deepcopy({})
    expect(copy1).toEqual({})

    const copy2 = deepcopy([])
    expect(copy2).toEqual([])
  })

  it("should copy root array correctly", () => {
    const original = [
      { age: 21, nationality: "a" },
      { age: 23, nationality: "b" },
    ]

    const copy = deepcopy(original)
    expect(copy).not.toBe(original)
    expect(copy[0]).not.toBe(original[0])
    expect(copy[0].age).toBe(original[0].age)
    expect(copy[0].nationality).toBe(original[0].nationality)
    expect(copy[1]).not.toBe(original[1])
    expect(copy[1].age).toBe(original[1].age)
    expect(copy[1].nationality).toBe(original[1].nationality)
  })
})