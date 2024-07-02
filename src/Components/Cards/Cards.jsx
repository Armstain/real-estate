import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center my-10'>Our Amazing Places</h1>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                {
                    showAll ? cards.map(card => <Card key={card.id} card={card}></Card>) :
                        cards.slice(0, 6).map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
            {!showAll && (
                <div className='text-center my-5'>
                    <Link to="/allCards" className='btn bg-Cobalt-Blue text-white hover:bg-Orange border-none'>View All</Link>
                </div>
            )}
        </div>
    );
};

export default Cards;