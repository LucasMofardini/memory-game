import React from 'react';
import Card from './Card';

const arr =  Array(16).fill(0);

const createCards = (qtd) => {
    
}

const Cards = ({ objcts }) => {
    return(
        <div className='flex justify-center items-center w-full h-screen bg-emerald-100'>
            <div className='w-2/5'>
                <div className="grid grid-flow-col grid-rows-4 grid-cols-4 gap-4 drop-shadow-md hover:cursor-pointer">
                    {arr.map((c, i) => <Card key={c + i}> {c} </Card> )} 
                </div>
            </div>
        </div>
       
    )
}

export default Cards;