import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCard = ({ card }) => {
    const { image, estate_title, id, segment_name, description, price, Status, Area, location, facilities } = card;

    return (
        <div>
            <Link to={`/Card/${id}`}>
                <div className="flex flex-col lg:flex-row gap-4 p-2 border-solid-2 border-2 rounded-box sm:text-sm">
                    <div>
                        <figure>
                            <img className='sm:max-w-full lg:w-[300px] h-[300px] object-cover rounded-box' src={image} alt={estate_title} />
                        </figure>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">{estate_title}</h2>
                            <h2>{location}</h2>
                            <h2>Status: {Status}</h2>
                            <h2>facilities:
                                {
                                    card.facilities.map(facility => (
                                        <span className="bg-gray-200 px-3 py-1 rounded-md text-sm mr-2 mb-2 inline-block">
                                            {facility}
                                        </span>
                                    ))
                                }</h2>
                            <h2 className="text-xl font-bold">Price: {price}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrowseCard;