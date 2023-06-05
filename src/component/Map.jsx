import React, { useState } from 'react'
import  Product  from './Product';
import Shop from './Shop';


const Map = () => {
  const [data, setdata] = useState(Product);
  
  console.log(data[0].names);
  return (
<div>
<div className="fs-1 text-center fw-bold">Pedrotech Shop</div>
    {
        data.map((val) =>  {
          return (
            
           <Shop name={val.name} img={val.imgs}/>
           
          )
          
          
        })
      }

  </div>
  )
  
  

      
  
}

export default Map