// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// enums are often in all-uppercases but that's not a must-do, you can use any value name.

// Numeric Enums (assing a name to a number)
enum PeanutsChildren {
  CHARLIEBROWN,
  FRANKLIN
}

enum PeanutsAnimals {
  SNOOPY,
  WOODSTOCK
}

// String Enums
enum Age {
  TEN = "TEN",
  UNKNOWN = "UNKNOWN"
}

const PeanutsComboNoOne = {
  children: PeanutsChildren.CHARLIEBROWN,
  childrenAge: Age.TEN,
  companion: PeanutsAnimals.WOODSTOCK,
  companionAge: Age.UNKNOWN
};

const PeanutsComboNoTwo = {
  children: PeanutsChildren.FRANKLIN,
  childrenAge: Age.TEN,
  companion: PeanutsAnimals.SNOOPY,
  companionAge: Age.UNKNOWN
};
