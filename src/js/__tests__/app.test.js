import converter from "../app";

test("True integer", () => {
  expect(converter(10)).toBe(10);
});

test("Integer by string", () => {
  expect(converter("10")).toBe(10);
});

test("Not integer", () => {
  expect(() => converter("341.567")).toThrowError("341.567 не является числом");
});
