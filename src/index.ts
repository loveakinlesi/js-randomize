export class Randomize {
  private randomFn: () => number;

  /**
   * Creates an instance of Randomize.
   * @param customRandomFn Optional custom random function. Defaults to Math.random.
   */
  constructor(customRandomFn?: () => number) {
    this.randomFn = customRandomFn || Math.random;
  }

  /**
   * Generates a random integer between min and max (inclusive).
   * @param min Minimum value (default is 0).
   * @param max Maximum value (default is 100).
   * @returns A random integer between min and max.
   */
  integer(min: number = 0, max: number = 100): number {
    if (min > max) {
      throw new Error("Min value cannot be greater than max value.");
    }
    return Math.floor(this.randomFn() * (max - min + 1)) + min;
  }

  /**
   * Generates a random float between min and max with specified precision.
   * @param min Minimum value (default is 0).
   * @param max Maximum value (default is 100).
   * @param precision Number of decimal places (default is 2).
   * @returns A random float between min and max with specified precision.
   */
  float(min: number = 0, max: number = 100, precision: number = 2): number {
    if (precision < 0) {
      throw new Error("Precision cannot be negative.");
    }
    const factor = Math.pow(10, precision);
    return Math.round((this.randomFn() * (max - min) + min) * factor) / factor;
  }

  /**
   * Generates an array of random integers.
   * @param length Length of the array.
   * @param min Minimum value for each integer (default is 0).
   * @param max Maximum value for each integer (default is 100).
   * @returns An array of random integers.
   */
  intArray(length: number, min: number = 0, max: number = 100): number[] {
    if (length < 0) {
      throw new Error("Length cannot be negative.");
    }
    if (min > max) {
      throw new Error("Min value cannot be greater than max value.");
    }
    return Array.from({ length }, () => this.integer(min, max));
  }

  /**
   * Generates an array of random floats with specified precision.
   * @param length Length of the array.
   * @param min Minimum value for each float (default is 0).
   * @param max Maximum value for each float (default is 100).
   * @param precision Number of decimal places (default is 2).
   * @returns An array of random floats.
   */
  floatArray(
    length: number,
    min: number = 0,
    max: number = 100,
    precision: number = 2
  ): number[] {
    if (length < 0) {
      throw new Error("Length cannot be negative.");
    }
    if (precision < 0) {
      throw new Error("Precision cannot be negative.");
    }
    if (min > max) {
      throw new Error("Min value cannot be greater than max value.");
    }
    return Array.from({ length }, () => this.float(min, max, precision));
  }

  /**
   * Generates a random boolean value.
   * @returns A random boolean value.
   */
  boolean(): boolean {
    return this.randomFn() < 0.5;
  }

  /**
   * Selects a random element from the given array.
   * @param {T[]} arr - The array to pick from.
   * @returns {T} - A random element from the array.
   */
  pick<T>(arr: T[]): T | null {
    if (arr.length === 0) return null;
    return arr[this.integer(0, arr.length - 1)];
  }

  /**
   * Selects a specified number of random, non-repeating elements from the given array.
   * @param {T[]} arr - The array to pick from.
   * @param {number} count - The number of elements to select.
   * @returns {T[]} - An array of randomly selected elements.
   */
  sample<T>(arr: T[], count: number): T[] {
    if (count > arr.length) {
      throw new Error("Count cannot be greater than array length.");
    }

    const result: T[] = [];
    const usedIndices: Set<number> = new Set();

    while (result.length < count) {
      const randomIndex = this.integer(0, arr.length - 1);
      if (!usedIndices.has(randomIndex)) {
        result.push(arr[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    return result;
  }

  /**
   * Shuffles an array randomly.
   * @param arr Array to shuffle.
   * @returns A shuffled array.
   */
  shuffle<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = this.integer(0, i);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Generates a random string of specified length.
   * @param length Length of the string.
   * @param charSet Characters to use in the string (default is alphanumeric).
   * @returns A random string of specified length.
   */
  string(
    length: number,
    charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ): string {
    if (length < 0) {
      throw new Error("Length cannot be negative.");
    }

    return Array.from(
      { length },
      () => this.sample(charSet.split(""), 1)[0]
    ).join("");
  }
}
