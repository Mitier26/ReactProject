import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item})=> {
    const navigate = useNavigate();

    const moveToDetail = ()=>{
        navigate(`/product/${item?.id}`);
    }

    return (<div className="product-card" onClick={moveToDetail}>
        <div className="product-card-images">
            <img src={item?.img} alt={item?.tile} />
            {item?.new && <div className="product-card-images-new">
                신제품
            </div>}
        </div>
        <div className="product-card-title">{item?.title}</div>
        <div className="product-card-price">\ : {item?.price}</div> 
    </div>)
}


export default ProductCard;