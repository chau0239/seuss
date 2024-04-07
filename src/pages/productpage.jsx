import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';


function ProductPage() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    fetch('https://seussology.info/api/books/' + id)
      .then(response => response.json())
      .then(json => {
        setProductDetails(json)
      })
  }, [])
  
  return (
    <div className='product-container'>
      <img src={productDetails?.image} alt={productDetails?.title} />
      <div>
        <h3>{productDetails?.title}</h3>
        <p>{productDetails?.description}</p>
      </div>
    </div>
  )
}

export default ProductPage