import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <img src={item?.img} alt=""/>
      <div>{item?.choice === true ? "CHOICE" : ""}</div>
      <div>{item?.title}</div>
      {/* <div>{item?.price}원</div> */}
      <div>{item?.new === true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard
