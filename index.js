const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let livros = [
  {
    titulo: "Meditações",
    autor: "Marco Aurélio",
    genero: "Filosofia",
    imagem: "https://m.media-amazon.com/images/I/41bQU67zLnL._SY445_SX342_.jpg",
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    genero: "Romance",
    imagem: "https://m.media-amazon.com/images/I/51adYP1B4xL._SY445_SX342_.jpg",
  },
  {
    titulo: "Nada Pode Me Ferir",
    autor: "David Goggins",
    genero: "Autoajuda",
    imagem: "https://m.media-amazon.com/images/I/71wdbq8NbFL._SY385_.jpg",
  },
  {
    titulo: "O Homem Invisível",
    autor: "H.G. Wells",
    genero: "Ficção Científica",
    imagem: "https://m.media-amazon.com/images/I/513KteOV-vL._SY445_SX342_.jpg",
  },
  {
    titulo: "Utopia",
    autor: "Thomas More",
    genero: "Filosofia",
    imagem: "https://m.media-amazon.com/images/I/51Knq6OIwtL._SY445_SX342_.jpg",
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    genero: "Fábula Política",
    imagem: "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg",
  },
  {
    titulo: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    genero: "Fantasia",
    imagem: "https://m.media-amazon.com/images/I/71yJLhQekBL._SY385_.jpg",
  },
  {
    titulo: "Cartas Chilenas",
    autor: "Tomás Antônio Gonzaga",
    genero: "Sátira",
    imagem: "https://m.media-amazon.com/images/I/81iehazLn7S._SY385_.jpg",
  },
  {
    titulo: "O Príncipe",
    autor: "Nicolau Maquiavel",
    genero: "Filosofia Política",
    imagem: "https://m.media-amazon.com/images/I/81E9scx1JBL._SY385_.jpg",
  },
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    genero: "Ficção Científica",
    imagem: "https://m.media-amazon.com/images/I/41D2p1NDFkL._SY445_SX342_.jpg",
  }
];
//Lista
  app.get('/livros',(req, res) => {
  res.json(livros);
});


  
//Comprar
  app.post('/compra/:id',(req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(livro => livro.id === id);
  if (!livro){

    return res.status(404).json({ message: 'Livro não encontrado' });
            }
            });

//Cadastrar
app.post('/livros',(req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: novoLivro });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
