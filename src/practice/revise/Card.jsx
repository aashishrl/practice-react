import React from 'react';
const Card = ({productlist}) => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            {productlist.length==0?(
                <p>No products at the moment</p>
            ):(
                productlist.map((i)=>(
                    <div key={i.productName} className="border p-2">
                        <h1>{i.productName}</h1>
                        <p>{i.price}</p>
                    </div>
                ))
            )
        }
        </div>
    )
}
export default Card;