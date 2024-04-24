import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ImageMap from './ImageMap';
import Product from './Product';
import ProductPage from './ProductPage';

const VendingMachine = () => {
    const [clickedProduct, setClickedProduct] = useState({})

    const handleClick = (area) => {
        setClickedProduct(area)
    }

    const handleClose = () => {
        setClickedProduct({})
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ImageMap />} />
                <Route path="/:productName" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
        // <>
        //     {clickedProduct.name ? <Product img={clickedProduct.img} handleClose={handleClose} /> : <ImageMap handleClick={handleClick} />}
        // </>
    )
}

export default VendingMachine;