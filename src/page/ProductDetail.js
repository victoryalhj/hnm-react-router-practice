import React,{useCallback,useEffect,useState} from "react";
import {Container,Row,Col} from "react-bootstrap"
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let{id} = useParams();
  const [product,setProduct] = useState(null);
  
  const getProductDetail = useCallback(async()=>{
    let url = `http://localhost:7000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  },[id]);

  useEffect(()=> {
    getProductDetail();
  },[getProductDetail]);

  return (<Container>
        <Row>
          <Col className="product-img">
          <img src={product?.img} alt=""/>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
  );
};

export default ProductDetail
