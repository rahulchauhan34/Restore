import React, { useState } from 'react';



function App() {
const [products,setProducts]=useState([{name:'product1', price:100},{name:'product2', price:200}]);
  
  return (
    <div>
      <h1>Re-Store </h1>
        <ul>
        {products.map((item,index)=>(
<li key={index}>{item.name}-{item.price}</li>
        ))}
        </ul>
   
    </div>
  );
}

export default App;
