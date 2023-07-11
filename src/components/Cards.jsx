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

const handlePairsDefault = { lastCardId: null, lastCardValue: null, increment: 0 };

const Cards = () => {

    const [cards, setCards] = useState(null);
    const [handlePairs, setHandlePairs] = useState(handlePairsDefault);
    const [count, setCount] = useState(0);

    const createCards = (pairsQtd = 8) => {
        setCards(arr);
    }

    const toggleCard = (card) => {
        const {value, id, active} = card;

        let willResetedLastsPairs = false;

        const filtered = cards.map((c) => {
            let item = c;
            let incremented = handlePairs.increment + 1;

            if(item.id == id && !item.active){
                item.active = true;
                if(incremented == 2){
                    if(value == handlePairs.lastCardValue){
                        alert('Encontrou um par');
                        setCount(prevState => prevState + 1);
                        setHandlePairs(handlePairsDefault);
                    }else{
                        willResetedLastsPairs = true;
                        console.log("Voce perdeu nessa rodada");
                    }
                }
                else{
                    setHandlePairs({ lastCardValue: value, lastCardId: id, increment: incremented });
                }
            }
            return item;
        })
        
        setCards(filtered)
        
        if(willResetedLastsPairs){ // @TODO passar esse cara para um useRef e usar dps para resetar
            const reseted = cards.map(c => {
                let item = c;

                if(c.id == id || c.id == handlePairs.lastCardId)
                    item.active = false;

                return item;
            });
           setTimeout(() => {
            console.log('sera resetado')
            setCards(reseted)
           }, [3000]);
        }
    }

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