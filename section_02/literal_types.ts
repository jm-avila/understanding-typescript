function combineLiteralTypes(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-strings"
): number | string {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combineLiteralTypes(21, 32, "as-number");
const combinedStringsAges = combineLiteralTypes("21", "32", "as-number");
const combinedStrings = combineLiteralTypes(
  "twenty one",
  "thirty two",
  "as-strings"
);
