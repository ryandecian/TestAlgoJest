import ArrayRevisited from "../src/array";

describe("Test array method", () => {
  it("should create an array", () => {
    const testArray = new ArrayRevisited();

    expect(testArray.value).toHaveLength(0);
  });
});
