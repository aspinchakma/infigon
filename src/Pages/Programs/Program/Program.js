import React from 'react';
import './Program.css';

const Program = ({ program }) => {
    const { img, title, description, rating, lesson, instructor } = program;
    return (
        <div className="col">
            <div className="card single_card single_card_details"
                data-aos="zoom-in"
            >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p><small>{instructor}</small></p>
                    <p className="card-text">{description?.slice(0, 90)}...</p>
                </div>
            </div>
        </div>
    );
};

export default Program;