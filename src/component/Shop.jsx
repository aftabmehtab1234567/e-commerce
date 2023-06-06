import React from 'react'
import {Link} from 'react-router-dom'

const Shop = (prop) => {
  const handleClick=(id)=>{
  
  }
   return (
    <>
<div className="card d-inline-flex text-center mt-5 mx-5 shadow p-3 mb-5 bg-white rounded " style={{width: '18rem'}}>
  <img src={prop.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fs-1">{prop.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/cart' className="btn btn-primary fs-4" onClick={() => handleClick(prop.id)}>Add to Cart</Link>
  </div>
</div>
 </>
  )
}

export default Shop



