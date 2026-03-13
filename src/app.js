const express = require("express");
require("dotenv").config();

const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(express.json());

app.use("/api", reportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});