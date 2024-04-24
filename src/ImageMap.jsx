import React from "react";
import ImageMapper from 'react-img-mapper'
import vendingMachineImage from './assets/vending-machine.png'
import products from './products'
import { useNavigate } from 'react-router-dom';

const ImageMap = () => {
    const navigate = useNavigate();
    const MAP = {
        name: 'vending-map',
        areas: products.map(product => ({
            ...product,
            onClick: () => navigate(`/${encodeURIComponent(product.name)}`)
        }))
    };

    const handleClick = (area) => {
        navigate(`/${area.name}`)
    }

    return (
        <ImageMapper src={vendingMachineImage} map={MAP} onClick={handleClick} />
    );
}


export default ImageMap;