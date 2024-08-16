const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { movieRoutes } = require('./src/routes/Movie');

const app = express();

app.use(express.json());

app.use('/movie/img', express.static('src/imgs'));

app.use(cors());

app.use('/movie', movieRoutes);

// app.get('/movie', (req, res) => {
//     res.json({
//         msg: 'my server is running'
//     })
// })


    app.listen(8000, () => {
        mongoose.connect('mongodb://localhost:27017/Movie')
        console.log('Server is running on port 8000');
    });



