// import all as an object
import * as mathFunctions from './28.js';

mathFunctions.add(1, 2);
mathFunctions.subtract(1, 2);

// named Export
import { add, subtract } from './28.js';

add(2, 3);
subtract(5, 2);

// default exports
import log from './28.js';

log('Hello, world!'); // "Hello, world!"

// Renaming exports
import { add as addition, subtract as subtraction } from './28.js';

addition(2, 3);
subtraction(5, 2);
