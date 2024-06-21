const Article = require("../Models/Users");

class Create {
  async createArticle(data) {
    const article = new Article(data);
    try {
      await article.save();
      console.log("Article saved");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Create;
