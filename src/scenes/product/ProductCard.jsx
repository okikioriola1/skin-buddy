import React from 'react'
import './product.css'
import Rating from '../../assets/ratings.png'
import ActionButton from '../../shared/button/ActionButton'

const ProductCard = ({name, description, price, image}) => {
  return (
    <div className='product-card sm:w-[280px]'>
        <div className='image'>
        <div className='img-container'>
            
            <img src={image} alt="cream" />

        </div>
        </div>
        <div className='card-content'>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>

        </div>
        <div className='card-footer'>
            <img src={Rating} alt="ratings"/>
            <ActionButton name="View More" className="text-white button-card" backgroundColor="bg-[#173F37]" />

        </div>

    </div>
  )
}

export default ProductCard