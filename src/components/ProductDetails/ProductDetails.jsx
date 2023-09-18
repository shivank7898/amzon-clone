import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/slice/productdetails';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productdetails);
  const product = productDetails.data;

  useEffect(() => {
    dispatch(fetchProductDetails({ id }));
  }, [dispatch, id]);

  if (productDetails.loading === 'pending') {
    return <p>Loading...</p>;
  }

  if (productDetails.loading === 'failed') {
    return <p>Error: {productDetails.error}</p>;
  }
console.log(productDetails)

  return (
    <div>
      <h1>{id}</h1>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
