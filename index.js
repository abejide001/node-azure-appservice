const express = require("express");
const postRoute = require("./route/post");

require('./config')()

const app = express();

app.use('/api/v1/posts', postRoute)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
