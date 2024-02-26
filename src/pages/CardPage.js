import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CardPage = () => {
    const [card, setCard] = useState()
    const {product_id} = useParams()
    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${product_id}`)
                const dataResponse = await response.json()
                setCard(dataResponse)
            }catch (e){
                console.error(e)
            }
        }
        getPost()
    }, []);
    console.log(card)
    return (
        <div>
            {
                card? <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>{card.brand}</h1>
                    <img width='400px' src={card.images[1]} alt=""/>
                    <span>Price:{card.price}$</span>
                </div>:console.log('not found')
            }
        </div>
    );
};

export default CardPage;