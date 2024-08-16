import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Correct import statement

export default function Movie() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://rzfq97d6-8000.inc1.devtunnels.ms/movie/getMovie")
            .then((response) => {
                setItems(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (
        <div className="movie-container">
            {items.map((item, index) => (
                <div key={index} className="card movie-card border border-dark" style={{ width: '18rem', height: '25rem', border: '10px solid' }}>
                    <img src={`https://rzfq97d6-8000.inc1.devtunnels.ms/movie/img/${item.poster}`}  className='card-img-top' style={{width:"100%" ,height:"100px"}} alt="..."
                    
                
                    />
                    <div className="card-body">
                        <h5 className="card-title">Movie Name: {item.movie}</h5>
                        <h5 className="card-title">Director Name: {item.director}</h5>
                        <h5 className="card-title">Cast Name: {item.cast}</h5>
                        <h5 className="card-title">Rating: {item.rating}</h5>
                        <h5 className="card-title">Year: {item.year}</h5>
                    </div>
                    <div>
                        <button type='button' className="btn btn-primary">Download</button>
                    </div>
                </div>
            ))}

        </div>
    );
}
