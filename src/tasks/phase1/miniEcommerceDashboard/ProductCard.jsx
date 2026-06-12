import { useEffect } from 'react';

const ProductCard = ({ data = null, handleCartClick }) => {
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            {/* <ProductList productData={"hello"}/> */}
            <h3 className='font-bold'>Products</h3>
            <div className='grid grid-cols-3 gap-6'>
                {data.map((e) => (
                    <div key={e.id} className='border p-4 shadow-lg shadow-amber-200 space-y-3'>
                        <p>{e.productName}</p>
                        <button onClick={()=> handleCartClick(e)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductCard;