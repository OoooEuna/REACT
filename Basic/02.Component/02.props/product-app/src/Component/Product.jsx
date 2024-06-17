import React from 'react'

const Product = ({product}) => {
    return (
        <div className='card'>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    )
}

export default Product