export function get<T>(object: any, path: Array<number | string>, defaultValue?: T) : T {
  const result = path.reduce((obj, key) => obj !== undefined ? obj[key] : undefined, object);

  return result !== undefined ? result : defaultValue;
}