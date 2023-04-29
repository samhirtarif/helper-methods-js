import { describe, it, expect } from "vitest";
import { trimDelimeters } from "./trimDelimeters";

describe("trimDelimeters", () => {
  it("should trim both ends", () => {
    const trimmed = trimDelimeters("&&*ABC*(&", ["&", "*"])

    expect(trimmed).toEqual("ABC*(")
  })

  it("should not trim anything if chars do not match", () => {
    const trimmed = trimDelimeters("&&*ABC*(&", ["/", "("])

    expect(trimmed).toEqual("&&*ABC*(&")
  })

  it("should only trim from the start if only trimStart is set to true", () => {
    const trimmed = trimDelimeters("&&*ABC*(&", ["&", "*"], { trimStart: true })

    expect(trimmed).toEqual("ABC*(&")
  })

  it("should only trim from the end if only trimEnd is set to true", () => {
    const trimmed = trimDelimeters("&&*ABC*(&", ["&", "*", "("], { trimEnd: true })

    expect(trimmed).toEqual("&&*ABC")
  })

  it("should trim from both start and end if trimStart and trimEnd are explicitly set to true", () => {
    const trimmed = trimDelimeters("&&*ABC*(&", ["&", "*", "("], { trimStart: true, trimEnd: true })

    expect(trimmed).toEqual("ABC")
  })
  
})