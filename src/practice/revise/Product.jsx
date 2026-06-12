import React,{useState} from 'react';

const Product = ({productName, productPrice}) => {    
    const [qty, setQty] = useState(0)
    const totalPrice = productPrice * qty;
    
    return (
        <div className="p-3 border border-white">
            <div className='w-full h-30 bg-amber-200'></div>
            <p className='font-bold text-xl'>{productName}</p>
            <p>{productPrice}</p>
            <div className='flex items-center gap-3'>
                <button onClick={()=>setQty(prev=> prev-1)} 
                    disabled={qty===0} className={`p-2.5 py-0`}>-</button>
                <p className='text-sm'>Qty <span className='font-bold'>{qty}</span></p>
                <button onClick={()=>setQty(prev=> prev+1)} className='p-2 py-0'>+</button>
            </div>
            
            <p className='mt-3'>Total Price: <span className='text-xl font-bold'>{totalPrice}</span></p>
            
        </div>
    )
}
export default Product;

