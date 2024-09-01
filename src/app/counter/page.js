"use client"
import React, { useState } from 'react';

const Page = () => {

   const [counter,setCounter] =useState(0)
    return (
        <div>

            <button className="btn btn-success" onClick={()=>{setCounter((counter)=>counter+1)}}>+</button>

            <h1>{counter}</h1>
            <button className="btn btn-success" onClick={()=>{setCounter((counter)=>counter-1)}}>-</button>

        </div>
    );
}

export default Page;
