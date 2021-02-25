const express = require("express");
const app = express();

const PORT = 5000 || env.PORT;
app.listen(PORT, () => console.log(`Server is listning on port ${PORT}...`));
