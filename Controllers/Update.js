const Article = require("../Models/Users");

class Update {
  async updateArticleById(id, data) {
    try {
      await Article.findByIdAndUpdate(id, data);
      console.log("Article updated");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Update;
