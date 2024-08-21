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

  if (loading) return <div>Loading...</div>; // 로딩 상태 표시
  if (error) return <div>Error: {error}</div>; // 에러 상태 표시

  return (
    <div>
    {productList.length > 0 ? (
      productList.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <div>No products available</div>
    )}
  </div>
  );
 };

export default ProductAll
