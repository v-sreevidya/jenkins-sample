const { hello } = require("./index");

const result = hello();
if (result !== "hello from jenkins sample") {
  console.error("TEST FAILED:", result);
  process.exit(1);
}

console.log("TEST PASSED");
process.exit(0);
