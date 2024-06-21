const Article = require("../Models/Users");

class Delete {
  async deleteArticleById(id) {
    try {
      await Article.findByIdAndDelete(id);
      console.log("Article deleted");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Delete;
