import { useParams } from 'react-router-dom';
import products from './products';
import Product from './Product';

const ProductPage = () => {
    const { productName } = useParams();
    const product = products.find(p => p.name === decodeURIComponent(productName));

    const handleClose = () => {
        window.history.back();
    };

    window.document.title = product.title;

    return product ? (
        <Product img={product.img} handleClose={handleClose} />
    ) : (
        <p>Product not found!</p>
    );
}

export default ProductPage;
