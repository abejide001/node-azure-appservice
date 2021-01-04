const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "this is a test",
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
