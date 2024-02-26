import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    const baseUrl = 'https://dummyjson.com/products?limit=100'


    const [productResponse, setProductResponse] = useState([])


    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetch(baseUrl)
                const dataResponse = await response.json()
                setProductResponse(dataResponse.products)
            }catch (e){
                console.error(e)
            }
        }
        getPost()
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap' , gap:'10px'}}>
            {
                productResponse.map((item) =>(
                    <div key={item.id} style={{border: '4px solid black', width: '200px', background:"orange"}}>
                        <img width='200px' src={item.images[0]} alt=""/>
                        <h1>{item.brand}</h1>
                        <Link to={`/products/` + item.id}>перейти</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default MainPage;