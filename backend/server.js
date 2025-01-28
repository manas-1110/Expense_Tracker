const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const app = express();
const { readdirSync } = require("fs");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

readdirSync("./routes").map((route) =>
    app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
    db();

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};

server();
