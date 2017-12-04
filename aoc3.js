// 65  64  63  62  61  60  59  58  57
// 66  37  36  35  34  33  32  31  56
// 67  38  17  16  15  14  13  30  55
// 68  39  18   5   4   3  12  29  54
// 69  40  19   6   1   2  11  28  53
// 70  41  20   7   8   9  10  27  52
// 71  42  21  22  23  24  25  26  51
// 72  43  44  45  46  47  48  49  50
// 73  74  75  76  77  78  79  80  81

const test1 = 14;
const test2 = 38;
const test3 = 78;

const input = 1;

// How many numbers are there in the "row" of the target?
const res = Math.ceil(Math.sqrt(input));
const res1 = res % 2 === 0 ? res + 1 : res;

// What is the number at the bottom right corner of the "layer" of the target?
const res2 = res1 * res1;

// How far to next corner? (0 = at a corner)
const res3 = (res2 - input) % (res1 - 1);

// How far to the center?
const res4 = res3 > res1 / 2 ? res3 : res1 - 1 - res3;

console.log(res4);
