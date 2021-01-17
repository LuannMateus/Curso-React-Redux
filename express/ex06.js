const express1 = require('express');
const express2 = require('express');
console.log(express1 === express2);

const app1 = express1();
const app2 = express1();
console.log(app1 === app2);

const router1 = express1.Router();
const router2 = express1.Router();
console.log(router1 === router2);