export const intlNumberFormat = (value: number) =>
  new Intl.NumberFormat().format(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";
