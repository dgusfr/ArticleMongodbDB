// Importa o módulo mongoose, uma biblioteca ODM para MongoDB e Node.js
const mongoose = require("mongoose");

// Importa o esquema do modelo de artigo definido no arquivo Users.js
const articleModel = require("./Models/Users");

// Conecta ao MongoDB no localhost, utilizando o banco de dados myDatabase
// As opções useNewUrlParser e useUnifiedTopology são usadas para evitar avisos de depreciação
mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Cria um modelo chamado "Article" baseado no esquema importado de articleModel
const Article = mongoose.model("Article", articleModel);

// Encontra todos os documentos no banco de dados MongoDB de forma assíncrona
async function findArticles() {
  try {
    const articles = await Article.find({});
    console.log(articles);
  } catch (err) {
    console.error(err);
  }
}

findArticles();
