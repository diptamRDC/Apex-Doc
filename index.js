const express = require("express");
const routes = require("./routes/v1");
const { errors } = require("celebrate");

const app = express();

app.use(express.static("dist"));
app.use("/api/v1", routes);
app.use(errors());

app.listen(process.env.Port || 8080, () => console.log("Server is running"));
