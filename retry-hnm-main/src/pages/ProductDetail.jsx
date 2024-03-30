import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const ProductDetail =()=>{
    const [detail, setDetail] = useState();
    let {id} = useParams();
    const getProductDetail = async ()=>{
        let url = (`https://my-json-server.typicode.com/leesanghun0/retry-hnm/products/${id}`);
        let response = await fetch(url);
        let data = await response.json();
        setDetail(data);
    }

    useEffect(()=>{
        getProductDetail();
    },[]);

    return (<div className="product-detail">
        <div className="product-detail-images">
            <img src={detail?.img} alt={detail?.title} />
        </div>
        <div className="product-detail-choice">
            <div className="product-detail-choice-title">
                {detail?.title}
                <span className="product-detail-choice-title-new">
                    {detail?.new?"신제품":null}
                </span>
            </div>
            <div className="product-detail-choice-price">\ {detail?.price}</div>
            <ul className="product-detail-choice-size">
                {detail?.size.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="product-detail-choice-add">
                <i className="xi-cart-o"></i> 추가
            </div>

            <ul className="product-detail-choice-info">
                <li>
                    <i className="xi-shop"></i>
                    매장별 제품 찾기</li>
                <li>
                    <i className="xi-error-o"></i>
                    배송기간 : 영업일 기준 2~3일</li>
            </ul>


            <ul className="product-detail-choice-desc">
                <li>설명&핏</li>
                <li>소재</li>
                <li>케어가이드</li>
            </ul>
        </div>
    </div>)
} 

export default ProductDetail;