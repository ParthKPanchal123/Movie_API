const express = require('express');
const { getMovie, createMovie, deleteMovie } = require('../controllers/Movie');
const multerConfig = require('../config/multer_config');

const movieRoutes = express.Router();

movieRoutes.get('/getMovie', getMovie)
movieRoutes.delete('/delete/:id', deleteMovie)  
movieRoutes.post('/create', multerConfig.single('img'), createMovie)


module.exports = { movieRoutes }