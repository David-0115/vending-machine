import './Product.css'

const Product = ({ img, handleClose }) => {
    return (
        <div className="Product"><img src={img} className="Product-img" />
            <div className="Product-btn-div">
                <button className="Product-btn" onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default Product;