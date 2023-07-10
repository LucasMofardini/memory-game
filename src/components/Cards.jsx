import React, { useEffect, useState } from 'react';
import Card from './Card';

const arr = [
    { active: false, value: '1', id: 1 },
    { active: false, value: '1', id: 2 },
    { active: false, value: '2', id: 3 },
    { active: false, value: '2', id: 4 },
    { active: false, value: '3', id: 5 },
    { active: false, value: '3', id: 6 },
    { active: false, value: '4', id: 7 },
    { active: false, value: '5', id: 8 }
];

const Cards = () => {

    const [cards, setCards] = useState(null);

    const createCards = (pairsQtd = 8) => {
        setCards(arr);
    }

    const toggleCard = (id) => {
        const filtered = cards.map((card) => {
            let item = card;
            if(card.id === id)
                item.active = !item.active
            return item;
        })

        setCards(filtered)
    }

    useEffect(() => createCards, [])

    return(
        <div className='flex justify-center items-center w-full h-screen bg-emerald-100'>
            <div className='w-2/5'>
                <div className="grid grid-flow-col grid-rows-4 grid-cols-4 gap-4 drop-shadow-md hover:cursor-pointer">
                    {cards && cards.map((c, i) => <Card onClick={() => toggleCard(c.id)} id={c.id} key={c + i} isActive={c.active}> {c.value} </Card> )} 
                </div>
            </div>
        </div>
       
    )
}

export default Cards;