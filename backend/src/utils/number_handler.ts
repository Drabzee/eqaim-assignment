export type TSteps = {
    [key: `step${number}`]: {
        carryString: string,
        sumString: string,
    }
};

type TStepsSum = {
    num1: string,
    num2: string,
    steps: TSteps
};

const cleanNumberString = (num: string): string => {
    let cleanedNum = num.replace(/^0+/, '');

    if (cleanedNum === '') cleanedNum = '0';

    return cleanedNum;
}

const addNumbersStepByStep = (num1: string, num2: string): TSteps => {
    const len = num1.length;
    
    const numArray1 = num1.split('');
    const numArray2 = num2.split('');
    
    let carryString = '_';
    let sumString = '';
    let carry = 0;
    
    let steps: TSteps = {};
    
    for (let i=len-1, j=1 ; i >=0 ; i--, j++) {
        let digit1 = +numArray1[i];
        let digit2 = +numArray2[i];

        let sumOfDigit = digit1 + digit2 + carry;
        
        if (sumOfDigit > 9) carry = 1;
        else carry = 0;
        
        if (i > 0) {
            carryString = carry + carryString;
            sumString = sumOfDigit.toString().slice(-1) + sumString;
        } else {
            sumString = sumOfDigit + sumString;
        }

        steps[`step${j}`] = { carryString, sumString };
    }
    
    return steps;
}

export const getSumSteps = (num1: string, num2: string): TStepsSum => {
    let cleanedNum1 = cleanNumberString(num1);
    let cleanedNum2 = cleanNumberString(num2);

    if (cleanedNum1 === '0' || cleanedNum2 === '0') {
        return {
            num1: num1,
            num2: num2,
            steps: {
                step1: {
                    carryString: '_',
                    sumString: ((+cleanedNum1) + (+cleanedNum2)).toString()
                }
            }
        } as TStepsSum;
    }
    
    if (cleanedNum1.length > cleanedNum2.length) {
        cleanedNum2 = "0".repeat(cleanedNum1.length - cleanedNum2.length) + cleanedNum2
    } else {
        cleanedNum1 = "0".repeat(cleanedNum2.length - cleanedNum1.length) + cleanedNum1
    }
    
    return {
        num1: num1,
        num2: num2,
        steps: addNumbersStepByStep(cleanedNum1, cleanedNum2)
    };
}

export const isPositiveNumeric = (num: string) => {
    let isNumber = num.match(/^\d+$/);
    return isNumber && ((+num) >= 0);
}