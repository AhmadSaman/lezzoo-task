const express = require("express");
const cors = require("cors");
const storeRoutes = require("./routes/stores");
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");

//app
const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());
//cors
app.use(cors());
// routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/stores", storeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${port}`)
);
