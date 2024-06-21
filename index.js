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

// Cria uma nova instância do modelo Article com os dados especificados
const review = new Article({
  title: "Book Review",
  author: "Gustavo Costa",
  body: "This is a review of a book.",
  resume: { content: "This is a review", author: "Gustavo Costa" },
});

// Salva a nova instância (documento) no banco de dados MongoDB
review
  .save()
  .then(() => {
    console.log("Review saved");
  })
  .catch((err) => {
    console.log(err);
  });

// Encontra todos os documentos no banco de dados MongoDB de forma assíncrona
async function findArticles() {
  try {
    const articles = await Article.find({});
    console.log(articles);
  } catch (err) {
    console.error(err);
  }
}

//Busca elementos pelo id
Article.find({ _id: "66756973b8b1fb0324746f01" })
  .then((article) => {
    console.log(article);
  })
  .catch((err) => {
    console.error(err);
  });

//Busca elementos por conteudo
Article.find({ author: "John Doe" })
  .then((article) => {
    console.log(article);
  })
  .catch((err) => {
    console.error(err);
  });

//findOne busca apenas um elemento
Article.findOne({ author: "John" })
  .then((article) => {
    console.log(article);
  })
  .catch((err) => {
    console.error(err);
  });

//Deletando um elemento
Article.findByIdAndDelete("66756973b8b1fb0324746f01")
  .then(() => {
    console.log("Article deleted");
  })
  .catch((err) => {
    console.error(err);
  });

findArticles();
