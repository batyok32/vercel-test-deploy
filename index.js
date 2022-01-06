const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
