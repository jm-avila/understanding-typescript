type combinable = number | string;
type conversionDescriptor = "as-number" | "as-strings";
function combineTypesAlias(
  input1: combinable,
  input2: combinable,
  resultConversion: conversionDescriptor
): combinable {
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
