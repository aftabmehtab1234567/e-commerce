import React from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const handleClick = (id) => {
    // Handle the click event with the id here
    console.log("Add to Cart clicked with id:", id);
  };

  return (
    <div className="container card d-inline-flex text-center mt-5 mx-5 shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fs-1">{props.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={`/Cart/${props.id}`} className="btn btn-primary fs-4" onClick={() => handleClick(props.id)}>
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default Shop;

