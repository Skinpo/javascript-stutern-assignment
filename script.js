//Question 1:
// Create a function with a function name printSum( ) and print the sum of an array.

function printSum(numbers) {
    //Initialize sum
    let sum = 0;

    for(i=0; i < numbers.length; i++) {
        //Loop through array of numbers
        sum += numbers[i];
    }
    //Return total sum
    return sum;
}

const printSumResult = printSum([1, 2, 4])
console.log(printSumResult)


//Question 3:
/*
Given an array of integers, calculate the ratio of its elements that are positive, 
negative and zero. Print the decimal value of each fraction on a new line with places 
after the decimal.
*/ 

function calculateRatio(values){
    let positiveValues = 0;
    let negativeValues = 0;
    let zeroValues = 0;
    
    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRatio = 0;

    for(i = 0; i < values.length; i++) {
        if(values[i] < 0) {
            negativeValues += 1;
            negativeRatio = negativeValues / values.length;
            document.write('\n');

        }else if(values[i] > 0){
            positiveValues += 1;
            positiveRatio = positiveValues / values.length;

        } else if(values[i] == 0) {
            zeroValues += 1;
            zeroRatio = zeroValues / values.length;
        }
        
    }
    let returnValue = "PositiveValues:" + positiveValues + "= " + positiveRatio + "\n" 
    + "NegativeValues: " + negativeValues + "= " + negativeRatio + " " +"\n" 
    + "ZeroValues: " + zeroValues + "= " + zeroRatio
    return returnValue;
 
}

const calculateRatioResult = calculateRatio([-1, -2, -3, 0, 0, 5, 12, 0, -10]);
console.log(calculateRatioResult);

//Question 4:
// Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

function firstFunction(a, b) {
    return a + b;
}

const firstFunctionResult = firstFunction(10, 2);
console.log(firstFunctionResult)