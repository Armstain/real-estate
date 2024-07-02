import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card.jsx';
import BrowseCard from '../../Components/BrowseCard/BrowseCard.jsx';
import { Helmet } from 'react-helmet-async';

const BrowseCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Browse </title>
            </Helmet>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center my-10'>Browse All Places</h1>
                <hr />
                <div className='grid grid-cols-1 gap-4'>
                    {
                        cards.map(card => <BrowseCard key={card.id} card={card}></BrowseCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default BrowseCards;