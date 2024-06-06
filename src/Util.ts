export class Util {
  /**
   * Maps a value from one range to another.
   *
   * @param value - The value to be mapped.
   * @param inMin - The lower bound of the value's current range.
   * @param inMax - The upper bound of the value's current range.
   * @param outMin - The lower bound of the value's target range.
   * @param outMax - The upper bound of the value's target range.
   * @returns The mapped value in the target range.
   */
  public static map(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ): number {
    if (inMin === inMax) {
      throw new Error("inMin and inMax cannot be the same value.");
    }
    // Calculate the mapped value
    const mappedValue =
      ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    return mappedValue;
  }
}
