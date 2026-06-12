// Given an array of products:
// Render each product name and price
// Each product must be rendered using map()
// Use a unique key from the product data

import { useState } from "react";
const ConditionalRendering = () => {
    const productData = [
        {
            id: 1,
            productname: "Product1",
            desc: "desc1",
            price: 150,
        },
        {
            id: 2,
            productname: "Product2",
            desc: "desc2",
            price: 250,
        },
        {
            id: 3,
            productname: "Product3",
            desc: "desc3",
            price: 350,
        },
        {
            id: 4,
            productname: "Product4",
            desc: "desc4",
            price: 450,
        },
    ]

    return (
        <section className="p-24 grid grid-cols-3 gap-4">
            {productData.length === 0 ? <p>No Products</p> :
            ( productData.map((product) => {
                return (
                    <div key={product.id} className="bg-gray-200 p-4 border rounded-md">
                        <h1 className="text-semibold text-xl">{product.productname}</h1>
                        <p>{product.desc}</p>
                        <p>${product.price}</p>
                        <button className="px-2 py-1 rounded-sm text-sm mt-3 bg-amber-300 cursor-pointer">Add To Cart</button>
                    </div>
                )
                })
            )}
            {console.log(productData.map(p => <p>{p.productname}</p>))}

        </section>
    )
}
export default ConditionalRendering;

