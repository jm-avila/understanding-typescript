// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// enums are often in all-uppercases but that's not a must-do, you can use any value name.
// Numeric Enums
// assing a name to a number
var PeanutsChildren;
(function (PeanutsChildren) {
    PeanutsChildren[PeanutsChildren["CHARLIEBROWN"] = 0] = "CHARLIEBROWN";
    PeanutsChildren[PeanutsChildren["FRANKLIN"] = 1] = "FRANKLIN";
})(PeanutsChildren || (PeanutsChildren = {}));
var PeanutsAnimals;
(function (PeanutsAnimals) {
    PeanutsAnimals[PeanutsAnimals["SNOOPY"] = 0] = "SNOOPY";
    PeanutsAnimals[PeanutsAnimals["WOODSTOCK"] = 1] = "WOODSTOCK";
})(PeanutsAnimals || (PeanutsAnimals = {}));
// String Enums
var Age;
(function (Age) {
    Age["TEN"] = "TEN";
    Age["UNKNOWN"] = "UNKNOWN";
})(Age || (Age = {}));
var PeanutsComboNoOne = {
    children: PeanutsChildren.CHARLIEBROWN,
    childrenAge: Age.TEN,
    companion: PeanutsAnimals.WOODSTOCK,
    companionAge: Age.UNKNOWN
};
var PeanutsComboNoTwo = {
    children: PeanutsChildren.FRANKLIN,
    childrenAge: Age.TEN,
    companion: PeanutsAnimals.SNOOPY,
    companionAge: Age.UNKNOWN
};
