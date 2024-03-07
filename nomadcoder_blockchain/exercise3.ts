declare module 'lodash' {
  function head<T>(array: T[]): T;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T): string | null;
  function split(
    string: string,
    separator: RegExp | string,
    limit: number
  ): string[];
  function hasPath(object: Object, path: string[] | string): boolean;
  function filter<T>(array: T[], predicate: Function): [];
  function every<T>(array: T[], predicate: Function): boolean;
  function map<T>(array: T[], iteratee: Function): [];
}
