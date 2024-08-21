import React, { useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList,setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getProducts = async () => {
    try {
      let url = `http://localhost:7000/products`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <ProductCard />
    </div>
  );
 };

export default ProductAll
