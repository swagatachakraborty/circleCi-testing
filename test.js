const assert = require("assert");
const { subtruct, add } = require("./math");

describe("add", () => {
  it("should add two numbers", () => {
    let expectedOutput = 3;
    let actual = add(1, 2);
    assert.equal(actual, expectedOutput);
  });
});

describe("subtruct", () => {
  it("should subtruct two numbers", () => {
    let expectedOutput = 1;
    let actual = subtruct(1, 2);
    assert.equal(actual, expectedOutput);
  });
});
