const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const app = express();
const { readdirSync } = require("fs");

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1", require("./routes/transactions"));

const server = () => {
    db();

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};

server();
