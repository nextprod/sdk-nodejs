"use strict";
const uint8 = [123, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 34, 58, 123, 34, 100, 101, 99, 114, 121, 112, 116, 34, 58, 91, 34, 84, 79, 75, 69, 78, 34, 93, 125, 125];
const v = Buffer.from(uint8).toString('utf8');
console.log(v);
console.log(JSON.parse(v));
