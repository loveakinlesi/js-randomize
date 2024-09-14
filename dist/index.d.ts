declare class Randomize {
    private randomFn;
    /**
     * Creates an instance of Randomize.
     * @param customRandomFn Optional custom random function. Defaults to Math.random.
     */
    constructor(customRandomFn?: () => number);
    /**
     * Generates a random integer between min and max (inclusive).
     * @param min Minimum value (default is 0).
     * @param max Maximum value (default is 100).
     * @returns A random integer between min and max.
     */
    integer(min?: number, max?: number): number;
    /**
     * Generates a random float between min and max with specified precision.
     * @param min Minimum value (default is 0).
     * @param max Maximum value (default is 100).
     * @param precision Number of decimal places (default is 2).
     * @returns A random float between min and max with specified precision.
     */
    float(min?: number, max?: number, precision?: number): number;
    /**
     * Generates an array of random integers.
     * @param length Length of the array.
     * @param min Minimum value for each integer (default is 0).
     * @param max Maximum value for each integer (default is 100).
     * @returns An array of random integers.
     */
    intArray(length: number, min?: number, max?: number): number[];
    /**
     * Generates an array of random floats with specified precision.
     * @param length Length of the array.
     * @param min Minimum value for each float (default is 0).
     * @param max Maximum value for each float (default is 100).
     * @param precision Number of decimal places (default is 2).
     * @returns An array of random floats.
     */
    floatArray(length: number, min?: number, max?: number, precision?: number): number[];
    /**
     * Generates a random boolean value.
     * @returns A random boolean value.
     */
    boolean(): boolean;
    /**
     * Selects a random element from the given array.
     * @param {T[]} arr - The array to pick from.
     * @returns {T} - A random element from the array.
     */
    pick<T>(arr: T[]): T | null;
    /**
     * Selects a specified number of random, non-repeating elements from the given array.
     * @param {T[]} arr - The array to pick from.
     * @param {number} count - The number of elements to select.
     * @returns {T[]} - An array of randomly selected elements.
     */
    sample<T>(arr: T[], count: number): T[];
    /**
     * Shuffles an array randomly.
     * @param arr Array to shuffle.
     * @returns A shuffled array.
     */
    shuffle<T>(arr: T[]): T[];
    /**
     * Generates a random string of specified length.
     * @param length Length of the string.
     * @param charSet Characters to use in the string (default is alphanumeric).
     * @returns A random string of specified length.
     */
    string(length: number, charSet?: string): string;
}

export { Randomize };
