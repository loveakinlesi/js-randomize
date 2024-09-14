import { Randomize } from "../src";

describe("Randomize", () => {
  let randomize: Randomize;

  beforeEach(() => {
    randomize = new Randomize();
  });

  describe("integer()", () => {
    it("should return an integer between the default range [0, 100]", () => {
      const result = randomize.integer();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
      expect(Number.isInteger(result)).toBe(true);
    });

    it("should return an integer between the specified min and max", () => {
      const result = randomize.integer(10, 20);
      expect(result).toBeGreaterThanOrEqual(10);
      expect(result).toBeLessThanOrEqual(20);
      expect(Number.isInteger(result)).toBe(true);
    });

    it("should throw an error if min is greater than max", () => {
      expect(() => randomize.integer(10, 5)).toThrow(
        "Min value cannot be greater than max value."
      );
    });
  });

  describe("float()", () => {
    it("should return a float between the default range [0, 100] with 2 decimal precision", () => {
      const result = randomize.float();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
      expect(result.toString().split(".")[1].length).toBeLessThanOrEqual(2);
    });

    it("should return a float with the specified precision", () => {
      const result = randomize.float(0, 1, 4);
      expect(result.toString().split(".")[1].length).toBeLessThanOrEqual(4);
    });

    it("should throw an error if precision is negative", () => {
      expect(() => randomize.float(0, 1, -1)).toThrow(
        "Precision cannot be negative."
      );
    });
  });

  describe("intArray()", () => {
    it("should return an array of integers with the specified length", () => {
      const result = randomize.intArray(5, 1, 10);
      expect(result).toHaveLength(5);
      result.forEach((val) => {
        expect(val).toBeGreaterThanOrEqual(1);
        expect(val).toBeLessThanOrEqual(10);
      });
    });

    it("should throw an error if length is negative", () => {
      expect(() => randomize.intArray(-1)).toThrow(
        "Length cannot be negative."
      );
    });
    it("should throw an error if min is greater than max", () => {
      expect(() => randomize.intArray(5, 10, 5)).toThrow(
        "Min value cannot be greater than max value."
      );
    });
  });

  describe("floatArray()", () => {
    it("should return an array of floats with the specified length and precision", () => {
      const result = randomize.floatArray(5, 1, 10, 3);
      expect(result).toHaveLength(5);
      result.forEach((val) => {
        expect(val).toBeGreaterThanOrEqual(1);
        expect(val).toBeLessThanOrEqual(10);
        expect(val.toString().split(".")[1].length).toBeLessThanOrEqual(3);
      });
    });

    it("should throw an error if precision is negative", () => {
      expect(() => randomize.floatArray(5, 1, 10, -1)).toThrow(
        "Precision cannot be negative."
      );
    });

    it("should throw an error if length is negative", () => {
      expect(() => randomize.floatArray(-5)).toThrow(
        "Length cannot be negative."
      );
    });

    it("should throw an error if min is greater than max", () => {
      expect(() => randomize.floatArray(5, 10, 5)).toThrow(
        "Min value cannot be greater than max value."
      );
    });
  });

  describe("boolean()", () => {
    it("should return a boolean value", () => {
      const result = randomize.boolean();
      expect(typeof result).toBe("boolean");
    });

    it("should return either true or false", () => {
      const result = randomize.boolean();
      expect([true, false]).toContain(result);
    });
  });

  describe("pick()", () => {
    it("should return a random element from the array", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomize.pick(arr);
      expect(arr).toContain(result);
    });

    it("should return null if the array is empty", () => {
      expect(randomize.pick([])).toBeNull();
    });
  });

  describe("sample()", () => {
    it("should return an array of random, non-repeating elements", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomize.sample(arr, 3);
      expect(result).toHaveLength(3);
      result.forEach((val) => expect(arr).toContain(val));
    });

    it("should throw an error if count is greater than array length", () => {
      const arr = [1, 2, 3];
      expect(() => randomize.sample(arr, 5)).toThrow(
        "Count cannot be greater than array length."
      );
    });
  });

  describe("shuffle()", () => {
    it("should return a shuffled version of the array", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomize.shuffle(arr);
      expect(result).toHaveLength(arr.length);
      result.forEach((val) => expect(arr).toContain(val));
      expect(result).not.toEqual(arr); // It's possible to get the same order, but this it checks basic shuffling.
    });
  });

  describe("string()", () => {
    it("should return a string of the specified length", () => {
      const result = randomize.string(10);
      expect(result).toHaveLength(10);
    });

    it("should return a string using the specified charSet", () => {
      const result = randomize.string(5, "abc");
      expect(
        result.split("").every((char) => ["a", "b", "c"].includes(char))
      ).toBe(true);
    });

    it("should throw an error if length is negative", () => {
      expect(() => randomize.string(-5)).toThrow("Length cannot be negative.");
    });
  });
});
