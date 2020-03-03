function add(n1, n2, showResult, phrase) {
    var additionResult = n1 + n2;
    if (showResult)
        console.log(phrase + additionResult);
    return additionResult;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "The value is ";
add(number1, number2, printResult, resultPhrase);
