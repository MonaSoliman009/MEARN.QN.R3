import React from 'react';

const Page = async({params}) => {

   const res=await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product =await res.json()
    
    return (
        <div>
           <h1>{product.title}</h1>
           <p>{product.description}</p>
        </div>
    );
}

export default Page;
