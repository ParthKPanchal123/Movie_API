const Movie = require('../model/Movie');
const { movieSchema } = require('../model/Movie');
const fs = require('fs')
const path = require('path')

const createMovie = async (req, res) => {
    try {
        const req_body = req.body
        const poster = req.file.filename;
        const movie = req_body['movie']
        const cast = req_body['cast']
        const director = req_body['director']
        const rating = req_body['rating']
        const year = req_body['year']

        const image = req.file ? req.file.path : null;

        await Movie.create({
            movie: movie,
            cast: cast,
            director: director,
            rating: rating,
            year: year,
            poster: poster
        })

        res.json({
            msg: 'data created'
        })
    } catch (error) {
        res.json({
            error: error
        })
    }

}

const getMovie = async (req, res) => {
    try {
        const data = await Movie.find()

        res.json({
            data: data
        })
    } catch (error) {
        res.json({
            error: error
        })
    }
}



// Delete a movie
const deleteMovie = async (req, res) => {
    const id = req.params['id'];
    const  movie = await Movie.findOne({_id: id });
    if(movie){
        const poster = movie.poster
        const poster_path = path.join(__dirname, '../imgs', poster)
        fs.unlinkSync(poster_path)
        await Movie.deleteOne({ _id: id });
        
        res.json({
            msg: 'data deleted'
        })

    }else{
        res.json({
            msg: 'No movie found'
        })
    }

}

module.exports = { createMovie, getMovie, deleteMovie };


