import arrayService from "../services/service";

describe("Service", () => {
  it("should return unique elements from 2 arrays", () => {
    const arr1: string[] = ["1", "2", "3"];
    const arr2: string[] = ["2", "3", "4"];
    const result = arrayService.getUniqueElements(arr1, arr2);
    expect(result).toEqual(["1", "4"]);
  });

  it("should return empty array if both arrays are the same", () => {
    const arr1: string[] = ["1", "2"];
    const arr2: string[] = ["1", "2"];
    const result = arrayService.getUniqueElements(arr1, arr2);
    expect(result).toEqual([]);
  });
});
