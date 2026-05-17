import { describe, it, expect } from "bun:test";
import echoThis from "../src/echo";

describe("Function for processing strings", () => {
  it("should return it in a form with length less than 16", () => {
    expect(echoThis("This is a very long string. I believe.")).toEqual(
      "This is a very long string. I believe.".slice(0, 16)
    );
    expect(echoThis("This is not")).toEqual("This is not");
    expect(echoThis("")).toEqual("");
  });
});
