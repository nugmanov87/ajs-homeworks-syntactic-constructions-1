// TODO: write your code here
export default function converter(count) {
  if (!Number.isInteger(Number(count))) {
    throw new Error(`${count} не является числом`);
  }
  return Number(count);
}
