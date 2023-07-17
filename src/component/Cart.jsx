import React, { useState, useEffect } from 'react';

const Cart = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data/${props.id}`); // Replace with your actual API URL
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [props.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3 text-center" style={{ width: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text"><small className="text-body-secondary">Last updated: {data.lastUpdated}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
