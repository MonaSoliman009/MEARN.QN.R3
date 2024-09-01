import React from 'react';

const Page = async ({searchParams}) => {
    console.log(searchParams);
    
    const res = await fetch("https://fakestoreapi.com/products")
    const products = await res.json()

    return (
        <>


            {products.map((prd) => <div key={prd.id}>
                <h1>{prd.title}</h1>
                <p>{prd.description}</p>
                <p>{prd.price}</p>
           
            </div>)}


        </>
    );
}

export default Page;
