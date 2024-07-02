import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./CardDetails.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import "leaflet/dist/leaflet.css"
import 'animate.css';
import { Helmet } from 'react-helmet-async';


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id)
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(card.location)}`);
                if (response.data && response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    setPosition([parseFloat(lat), parseFloat(lon)]);
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, [card.location])


    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>

            <div className='mx-2 h-[500px] bg-cover rounded-box relative filter' style={{ backgroundImage: `url(${card.image})` }}>
                <div className="opacity-overlay "></div>
                <div className=' pl-4 flex flex-col justify-center items-center gap-4 h-full w-full'>
                    <h2 className=' text-6xl font-bold text-white z-10 animate__animated animate__fadeInDown'>{card.estate_title}</h2>
                    <h2 className='text-white z-10 lg:text-center font-bold animate__animated animate__fadeInDown animate-delays-2s text-xl'>{card.description}</h2>
                </div>
            </div>
            <div>
                <div><h2 className='text-3xl font-bold text-center my-10'> More Details</h2></div>

                <div className='flex flex-col lg:flex-row gap-4'>
                    <div>
                        <div className="bg-gray-100 rounded-lg p-5 mb-5 shadow-xl">
                            <div><h2 className='text-center font-bold text-2xl'>{card.segment_name}</h2></div>
                            <h2 className="text-lg font-bold mb-2"><span className="text-Cobalt-Blue">Status:</ span> <span className='text-Orange font-bold'>{card.Status}</span></h2>
                            <h2 className="text-lg font-bold mb-2"><span className="text-Cobalt-Blue">Area:</span> <span className='text-Orange font-bold'>{card.Area}</span> </h2>
                            <h2 className="text-lg font-bold mb-2"><span className="text-Cobalt-Blue">Location:</span> <span className='text-Orange font-bold'>{card.location}</span> </h2>
                            <h2 className="text-lg font-bold mb-2"><span className="text-Cobalt-Blue">Price:</span> <span className='text-Orange font-bold' >{card.price}</span> </h2>
                            <h2 className="text-lg font-bold mb-2"><span className="text-Cobalt-Blue">Facilities:</span>
                                {
                                    card.facilities.map(facility => (
                                        <span className="bg-Orange px-3 py-1 rounded-md text-sm mr-2 mb-2 inline-block">
                                            {facility}
                                        </span>
                                    ))
                                }
                            </h2>
                        </div>
                    </div>

                    {position && (
                        <MapContainer center={position} zoom={10} className="h-[300px] w-[600px] rounded-box">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    )}

                </div>
            </div>



        </div>
    );
};

export default CardDetails;