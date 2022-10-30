const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
    describe(".announceDawn", () => {
        it("returns a rooster call", () => {
            //setup
            const expected = "moo!";
            //exercise
            const result = Rooster.announceDawn();
            //verify
            assert.strictEqual(result, expected);
        });
    });
    describe(".timeAtDawn", () => {
        it("returns its argument as a string", () => {
            //setup
            const inputNum = 22;
            const expected = "22";
            //exercise
            const result = Rooster.timeAtDawn(inputNum);
            //verify
            assert.strictEqual(result, expected);
        });
        it("throws an error if passed a number less than 0", () => {
            //setup
            const inputNum = -1;
            const expected = RangeError;
            //verify
            assert.throws(
                () => {
                    Rooster.timeAtDawn(inputNum);
                }, //exercise
                expected
            );
        });
        it("throws an error if passed a number greater than 23", () => {
            //setup
            const inputNum = 24;
            const expected = RangeError;
            //verify
            assert.throws(
                () => {
                    Rooster.timeAtDawn(inputNum);
                }, // exercise
                expected
            );
        });
    });
});
