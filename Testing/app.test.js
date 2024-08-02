const sortingDataFn = require("./app");

describe("sorting function should sort the array", () => {
  test("should sort the array in ascending order with age", () => {
    const sortedData = sortingDataFn();

    expect(sortedData[0].name).toBe("Aashay");
  });

  it("should maintain the length of the array", () => {
    const sortedData = sortingDataFn();

    expect(sortedData).toHaveLength(4);
  });

  it("should return defined value", () => {
    const sortedData = sortingDataFn();

    expect(sortedData).not.toBeUndefined();
  });
});
