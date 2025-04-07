export class ArrayService {
  getUniqueElements(arr1: string[], arr2: string[]): string[] {
    const unique1 = Array.from(new Set(arr1));
    const unique2 = Array.from(new Set(arr2));

    const set1 = new Set(unique1);
    const set2 = new Set(unique2);

    const un1 = unique1.filter((item) => !set2.has(item));
    const un2 = unique2.filter((item) => !set1.has(item));

    return [...un1, ...un2];
  }
}

export default new ArrayService();
