const express = require('express');
const connectToMongo = require('./config/db');
const dotenv = require('dotenv').config();
const port = 5000;

// Connexion à la BDD
connectToMongo();

const app = express();

// Middelware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/post', require('./routes/post.routes'));

//Lancer le serveur
app.listen(port, () => console.log('Le Serveur a démarré sur le Port ' + port))