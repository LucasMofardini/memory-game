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
    { active: false, value: '4', id: 8 },
    { active: false, value: '5', id: 9 },
    { active: false, value: '5', id: 10 },
    { active: false, value: '81', id: 11 },
    { active: false, value: '81', id: 12 },
    { active: false, value: '99', id: 13 },
    { active: false, value: '99', id: 14 },
    { active: false, value: '22', id: 15 },
    { active: false, value: '22', id: 16 }
];

const baseCardObject = { active: false, value: null, id: null };

const handlePairsDefault = { lastCardId: null, lastCardValue: null, increment: 0 };

const Cards = () => {

    const [cards, setCards] = useState(null);
    const [handlePairs, setHandlePairs] = useState(handlePairsDefault);
    const [count, setCount] = useState(0);

    const createCards = (pairsQtd = 8) => {
        let a = new Array(pairsQtd * 2).fill(null);
        let final = new Array;

        a.reduce((acc, val) => {
            // const value = parseInt(Math.random() * 100) // @TODO criar um validador do numero randomico
            final.push({ active: false, value: parseInt(Math.random() * 100), id: acc})
            return acc + 2;
        }, 2)

        console.log(a)
        console.log(final)

        setCards(arr);
    }

    const toggleCard = (card) => {
        const {value, id, active} = card;

        const filtered = cards.map((c) => {
            let item = c;

            if(item.id == id && !item.active){
                item.active = true;
            }
            return item;
        })
        
        setCards(filtered)
        validateMove(card)
    }

    const validateMove = (card) => {
        const {value, id, active} = card;

        cards.forEach((c) => {
            let incremented = handlePairs.increment + 1;

            if(c.id == id){
                if(incremented == 2){ 
                    setHandlePairs(handlePairsDefault);
                    
                    if(value == handlePairs.lastCardValue){
                        alert('Encontrou um par');
                        setCount(prevState => prevState + 1);
                    }else{
                        resetCardsById([id, handlePairs.lastCardId])
                        console.log("Voce perdeu nessa rodada");
                    }
                }
                else{
                    setHandlePairs({ lastCardValue: value, lastCardId: id, increment: incremented });
                }
            }

        })
    }

    const resetCardsById = (arrIds) => 
        setCards(prevState => prevState.map(c => arrIds.includes(c.id) ? {...c, active: false} : c))
    
    useEffect(() => console.log(handlePairs), [handlePairs])

    useEffect(() => createCards, [])

    return(
        <div className='flex justify-center items-center w-full h-screen bg-emerald-100'>
            <div className='w-2/5'>
                <p className='font-mono text-center text-3xl mb-4'>{count}</p>
                <div className="grid grid-flow-col grid-rows-4 grid-cols-4 gap-4 drop-shadow-md hover:cursor-pointer">
                    {cards && cards.map((c, i) =>
                     <Card
                        onClick={() => toggleCard(c)}
                        id={c.id} key={c + i}
                        isActive={c.active}> {c.value} </Card> )} 
                </div>
            </div>
        </div>
       
    )
}

export default Cards;