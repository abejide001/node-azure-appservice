const Post = require("./model/Post");
const postData = require("./data/post.json");

require("./config")();

const seedData = async () => {
  try {
    await Post.insertMany(postData);
    console.log("data seeded");
  } catch (err) {
    console.log(err.message);
  }
};
seedData();
