const express = require("express");
const srv = express();

srv.listen(3000, () => {
 console.log("Server is working on port 3000");
});

