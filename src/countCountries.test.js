const countCountries = require("./countCountries");

describe("countCountries", function () {
  it("should be zero with nothing passed in", function () {
    const res = countCountries();
    expect(res).toBe(0);
  });

  it("should be zero with empty array passed in", function () {
    const res = countCountries([]);
    expect(res).toBe(0);
  });

  it("should be one with one country passed in", function () {
    const res = countCountries([[1]]);
    expect(res).toBe(1);
  });

  it("should be two with two countries passed in", function () {
    const res = countCountries([[1, 2]]);
    expect(res).toBe(2);
  });

  it("should be 11 with 11 countries passed in", function () {
    const islands = [
      [5, 4, 4],
      [4, 3, 4],
      [3, 2, 4],
      [2, 2, 2],
      [3, 3, 4],
      [1, 4, 4],
      [4, 1, 1],
    ];
    const res = countCountries(islands);
    expect(res).toBe(11);
  });
});
