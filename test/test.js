var expect = require('chai').expect;
const randomZ = require("../dist/index");
const _ = require('lodash');

describe('Random Integer - int()', function () {
    it('should return random integer', function () {

        // 1. ARRANGE
        const ranges = [
            [-1, 5],
            [2, 30],
            [100, 150],
            []
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            range.length > 1 ? y = randomZ.int(range[0], range[1]) : y = randomZ.int()
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            if (ranges[i].length > 1) {
                expect(result[i]).to.be.greaterThanOrEqual(ranges[i][0]).and.lessThanOrEqual(ranges[i][1]);
            } else {
                expect(result[i]).to.be.greaterThanOrEqual(0).and.lessThanOrEqual(100);
            }
        }

    });
});

describe('Random Float - float()', function () {
    it('should return random float', function () {

        // 1. ARRANGE
        const ranges = [
            [-1, 5],
            [2, 30],
            [100, 150],
            []
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            range.length > 1 ? y = randomZ.float(range[0], range[1]) : y = randomZ.float()
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            if (ranges[i].length > 1) {
                expect(result[i]).to.be.greaterThanOrEqual(ranges[i][0]).and.lessThanOrEqual(ranges[i][1]);
            } else {
                expect(result[i]).to.be.greaterThanOrEqual(0).and.lessThanOrEqual(100);
            }
        }

    });
});

describe('Random Float specified dp - float()', function () {
    it('should return random float with specified dp', function () {

        // 1. ARRANGE
        const ranges = [
            [1, 5, 4],
            [-5, 10, 3],
            [0, 1, 2]
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            y = randomZ.float(range[0], range[1], range[2])
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            expect(result[i]).to.be.greaterThanOrEqual(ranges[i][0]).and.lessThanOrEqual(ranges[i][1]);
            expect(result[i].toString().split('.')[1]?.length || 0).to.be.lessThanOrEqual(ranges[i][2])

        }

    });
});

describe('Array of Random Integers - intArray()', function () {
    it('should return an array of random integers', function () {

        // 1. ARRANGE
        const ranges = [
            [5],
            [5, 1, 5],
            [10, -50, 100]
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            y = randomZ.intArray(range[0], range[1], range[2])
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            expect(Array.isArray(result[i])).to.be.equal(true);
            expect(result[i].length).to.be.equal(ranges[i][0]);
            for (const element of result[i]) {
                if (ranges[i].length > 1) {
                    expect(element).to.be.greaterThanOrEqual(ranges[i][1]).and.lessThanOrEqual(ranges[i][2]);
                } else {
                    expect(element).to.be.greaterThanOrEqual(0).and.lessThanOrEqual(100);
                }
            }
        }

    });
});

describe('Array of Random Floats - floatArray()', function () {
    it('should return an array of random floats', function () {

        // 1. ARRANGE
        const ranges = [
            [5],
            [5, 1, 5],
            [10, -50, 100]
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            y = randomZ.floatArray(range[0], range[1], range[2])
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            expect(Array.isArray(result[i])).to.be.equal(true);
            expect(result[i].length).to.be.equal(ranges[i][0]);
            for (const element of result[i]) {
                if (ranges[i].length > 1) {
                    expect(element).to.be.greaterThanOrEqual(ranges[i][1]).and.lessThanOrEqual(ranges[i][2]);
                } else {
                    expect(element).to.be.greaterThanOrEqual(0).and.lessThanOrEqual(100);
                }
            }
        }

    });
});


describe('Array of Random Floats specified dp - floatArray()', function () {
    it('should return an array of random floats with specified dp', function () {

        // 1. ARRANGE
        const ranges = [
            [10, 1, 5, 4],
            [10, -5, 10, 3],
            [5, 0, 1, 2]
        ]

        // 2. ACT
        let result = []
        for (const range of ranges) {
            y = randomZ.floatArray(range[0], range[1], range[2], range[3])
            result.push(y)
        }

        // 3. ASSERT
        for (const i in ranges) {
            expect(Array.isArray(result[i])).to.be.equal(true);
            expect(result[i].length).to.be.equal(ranges[i][0]);
            for (const element of result[i]) {
                expect(element).to.be.greaterThanOrEqual(ranges[i][1]).and.lessThanOrEqual(ranges[i][2]);
                expect(element.toString().split('.')[1]?.length || 0).to.be.lessThanOrEqual(ranges[i][3])
            }
        }

    });
});

describe('Random Boolean - boolean()', function () {
    it('should return random boolean', function () {

        // 1. ARRANGE
        const runs = 20

        // 2. ACT
        let result = []
        for (let i = 0; i < runs; i++ ) {
            y = randomZ.boolean()
            result.push(y)
        }

        // 3. ASSERT
        for (const i in result) {
            expect(typeof result[i]).to.be.equal('boolean');
        }

    });
});


describe('Random Array - array()', function () {
    it('should return an array of random element of an array', function () {

        // 1. ARRANGE
        const tests = [[[ 31, 71, 34, 3, 25 ]], [[ 31, 71, 34, 3, 25 ], 2], [[ 31, 71, 34, 3, 25 ], 8], [['Married', 'Single', 'Divorced', 'Widowed']],  [['Self Employed', 'Employed', 'Unemployed', 'Retired', 'Student'], 2]]

        // 2. ACT
        let result = []
        for (const test of tests) {
         y = randomZ.array(test[0], test[1])
            result.push(y)
        }

        // 3. ASSERT
        for (const i in tests) {
            expect(Array.isArray(result[i])).to.be.equal(true);
            if (tests[i].length == 1) {
                expect(result[i].length).to.be.equal(1);  
            } else{
                expect(result[i].length).to.be.equal(tests[i][1]);  
            }
            if(result[i].length != 0){
                for(const element of result[i]){
                    expect(tests[i][0].includes(element)).to.be.equal(true)
                }
            }

           
        }

    });
});

describe('Suffle Array - shuffle()', function () {
    it('should return a shuffled array', function () {

        // 1. ARRANGE
        const tests = [[ 31, 71, 34, 3, 25 ], ['Married', 'Single', 'Divorced', 'Widowed'],  ['Self Employed', 'Employed', 'Unemployed', 'Retired', 'Student'], ['0809', '0805', '0803', '0806', '0807', '0802', '0808', '0709', '0705', '0703', '7806', '0707', '0702', '0708', '0909', '0905', '0903', '0906', '0907', '0902', '0908']]

        // 2. ACT
        let result = []
        for (const test of tests) {
         y = randomZ.shuffle(test)
            result.push(y)
        }

        // 3. ASSERT
        for (const i in tests) {
            expect(Array.isArray(result[i])).to.be.equal(true);
            expect(result[i].length).to.be.equal(tests[i].length);  
            let index = []
            for(const element of result[i]){
                index.push(tests[i].indexOf(element))
            }
            expect( _.range(0, 10).join(',') !== index.join(',')).to.be.equal(true);
        }

    });
});