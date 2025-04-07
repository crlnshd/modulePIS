export class ArrayService {
  getUniqueElements(arr1: string[], arr2: string[]): string[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const unique1 = arr1.filter((item) => !set2.has(item));
    const unique2 = arr2.filter((item) => !set1.has(item));

    return [...unique1, ...unique2];
  }
}

export default new ArrayService();
