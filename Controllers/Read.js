const Article = require("../Models/Users");

class Read {
  async findAllArticles() {
    try {
      const articles = await Article.find({});
      console.log(articles);
    } catch (err) {
      console.error(err);
    }
  }

  async findArticleById(id) {
    try {
      const article = await Article.findById(id);
      console.log(article);
    } catch (err) {
      console.error(err);
    }
  }

  async findArticlesByAuthor(author) {
    try {
      const articles = await Article.find({ author });
      console.log(articles);
    } catch (err) {
      console.error(err);
    }
  }

  async findOneArticleByAuthor(author) {
    try {
      const article = await Article.findOne({ author });
      console.log(article);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Read;
