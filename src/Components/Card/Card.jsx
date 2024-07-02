import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import './Card.css'

const Card = ({ card }) => {

    const { image, estate_title, id, segment_name, description, price, Status, Area, location, facilities } = card;


    return (
        <Link to={`/Card/${id}`} className=" border-2 card bg-base-100 relative transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <figure className="relative p-5">
                <img className="h-[300px] object-cover rounded-box " src={image} alt={estate_title} />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 hover:opacity-100">
                    <span className="text-white z-20 text-lg font-semibold">View Details</span>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <h2 className='flex items-center gap-1'><FaLocationDot /> {location}</h2>
                <h2>Status: {Status}</h2>
                <h2>facilities:
                    {
                        card.facilities.map(facility => (
                            <span className="bg-gray-200 px-3 py-1 rounded-md text-sm mr-2 mb-2 inline-block">
                                {facility}
                            </span>
                        ))
                    }</h2>

                <div className="card-actions">
                    <button className="btn bg-Cobalt-Blue text-white hover:bg-Orange">View Property</button>
                </div>
            </div>
        </Link>


    );
};

export default Card;