import React, { useEffect } from 'react'

const ProductAll = () => {

    const getProducts = async () => {
        let url = "http://localhost:5000/products"
        let response = await fetch(url);
        let data = await response.json();
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <div>상품 전체 페이지</div>
  )
}

export default ProductAll