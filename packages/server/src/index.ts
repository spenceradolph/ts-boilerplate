import { CommonType, commonFunction, CONSTANT_VALUE } from '@monorepo/common';

console.log('running the server');

console.log(CONSTANT_VALUE);

const testValue: CommonType = {
    a: 5,
    b: 10
};

const returnValue = commonFunction(testValue);

console.log(returnValue);
