const express = require("express");
const cors = require("cors");

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

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${port}`)
);
