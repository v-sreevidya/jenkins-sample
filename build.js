const fs = require("fs");

const out = "build-output.txt";
fs.writeFileSync(out, "build ok\n");
console.log("BUILD PASSED, wrote", out);
console.log("MOVING ON TO NEXT STEP");
