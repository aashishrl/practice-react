import { useState, useEffect } from 'react'

import ProductCard from "./ProductCard";
import Cart from "./Cart";

const ProductList = () => {
    const [carts, setCart] = useState([])
    const [remaining, setRemaining] = useState([])
    const [productData, setProductData] = useState(
        [
            {
                id: 1,
                productName: "iPhone 15",
                price: 999,
                status: true,
                discount: 2,
            },
            {
                id: 2,
                productName: "hwawei pro",
                price: 768,
                status: false,
                discount: 0,
            },
            {
                id: 3,
                productName: "samsung slide",
                price: 899,
                status: true,
                discount: 10,
            },
        ]
    )

    useEffect(() => {
        console.log(productData)
    }, [])

    

    const handleCart = (product) =>{
        if(carts.some(item => item.id === product.id)){
            alert("Product is already there")
            return;
        }
        setCart([...carts, product])
    }

    return (
        <>
            <ProductCard data={productData} handleCartClick={handleCart}/>
            <Cart cartData={carts}/>
        </>
    )
}
export default ProductList;