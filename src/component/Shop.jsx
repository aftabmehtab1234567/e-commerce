import React from 'react'
import {Link} from 'react-router-dom'

const Shop = (props) => {
  return (
    <>
  
    <div class="card d-inline-flex text-center mt-5 mx-5 shadow p-3 mb-5 bg-white rounded " style={{width: '18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fs-1">{props.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link class="btn btn-primary fs-4">Add to Cart</Link>
  </div>
</div>


     
      
    
    </>
  )
}

export default Shop



