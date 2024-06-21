const mongoose = require("mongoose");
const Create = require("./Controllers/Create");
const Read = require("./Controllers/Read");
const Update = require("./Controllers/Update");
const Delete = require("./Controllers/Delete");

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const create = new Create();
const read = new Read();
const update = new Update();
const deleteOp = new Delete();

const articleData = {
  title: "Book Review",
  author: "Gustavo Costa",
  body: "This is a review of a book.",
  resume: { content: "This is a review", author: "Gustavo Costa" },
};

// Criar um artigo
create.createArticle(articleData);

// Ler artigos
read.findAllArticles();
read.findArticleById("66756973b8b1fb0324746f01");
read.findArticlesByAuthor("John Doe");
read.findOneArticleByAuthor("John");

// Atualizar um artigo
update.updateArticleById("66756973b8b1fb0324746f02", {
  title: "Vue and React",
  author: "José",
});

// Deletar um artigo
deleteOp.deleteArticleById("66756973b8b1fb0324746f01");
