import React, { useState, useEffect } from 'react';
import Product from './Product'; // Import your JSON data file
import { useParams } from 'react-router-dom';



const Cart = () => {
  const { id } = useParams();
  const [data, setData] = useState(Product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/data').then((res)=>{
          
        }) // Replace 'your-data-url' with the actual URL of your JSON data
         const data = await response.json();
      
        setData(data);
      } 
      
      catch(error) {
        console.log('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.find((item) => item.id === parseInt(id));
 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card mb-3 text-center mt-5" style={{ width: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.imgs} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated: {product.lastUpdated}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
