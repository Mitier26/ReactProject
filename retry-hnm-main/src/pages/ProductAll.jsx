import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProjectAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || '';
        let url = ` https://my-json-server.typicode.com/leesanghun0/retry-hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        setProductList(data);
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <>
            <Container>
                <Row>
                    {productList.map((item, key) => (
                        <Col key={key} lg={3}>
                            {<ProductCard item={item} />}
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ProjectAll;
