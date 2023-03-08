const tillAddition = require('../05-till-addition/05-till-addition');

describe('tillAddition', () => {
    it('should return the string "£0.00" when passed an empty object', () => {
        expect(tillAddition({})).toBe("£0.00");
    });

    it('should return the value of the object\'s only property as a string, in pounds, when passed an object that only contains one denomination in pence', () => {
        const cash = { "1p": 1 };
        const cash2 = { "50p": 4 };
        expect(tillAddition(cash)).toBe("£0.01");
        expect(tillAddition(cash2)).toBe("£2.00");
    });

    it('should return the sum of the object\'s properties as a string, in pounds, when passed an object with more than one denomination in pence', () => {
        const cash = { "1p": 1, "50p": 4 };

        expect(tillAddition(cash)).toBe("£2.01");
    });

    it('should return the value of the object\'s only property as a string, in pounds, when passed an object that only contains one denomination in pounds', () => {
        const cash = { "£1": 1 };
        const cash2 = { "£5": 4 };
        expect(tillAddition(cash)).toBe("£1.00");
        expect(tillAddition(cash2)).toBe("£20.00");
    });

    it('should return the sum of the object\'s properties as a string, in pounds, when passed an object with more than one denomination in pounds', () => {
        const cash = { "£1": 1, "£5": 4 };

        expect(tillAddition(cash)).toBe("£21.00");
    });

    it('should return the sum of all of the object\'s properties as a string, in pounds, when passed an object with any amount and combination of denominations', () => {
        const cash = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 };
        const cash2 = { "5p": 25, "10p": 10, "20p": 10, "£50": 10, "£20": 15 }
        expect(tillAddition(cash)).toBe("£1.85");
        expect(tillAddition(cash2)).toBe("£804.25");
    });
});