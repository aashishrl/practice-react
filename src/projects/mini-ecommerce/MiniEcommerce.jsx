import { useEffect } from 'react';

import productData from "./productData";

import AddProducts from './components/AddProducts';

const MiniEcommerce = () => {
    // useEffect(() => {
    //     console.log("Product Data:", productData);
    // }, [])

    return (
        <section className='bg-gray-100 pt-4 pb-10'>
            <div className='w-full max-w-6xl min-h-screen mx-auto'>
                <div className='w-full p-6 rounded-md bg-secondary'>
                    <h1 className='text-primary text-2xl font-semibold'>Welcome Back, Admin</h1>
                    <p className='text-white'>Add manage products in your dashboard</p>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center gap-3 mb-4 font-semibold'>
                        <button className='px-2'>All Products</button>
                        <button className='px-2'>In Stock</button>
                        <button className='px-2'>Out of Stock</button>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        {productData.map(product => {
                            return (
                                <div key={product.id} className="p-2 bg-gray-200 rounded-md shadow-sm">
                                    <div className="relative h-20 w-full bg-secondary rounded-md">
                                        <div className={`absolute top-2 right-2 h-2.5 w-2.5 rounded-full ${product.inStock ? "bg-emerald-600" : "bg-red-600"}`}></div>
                                    </div>
                                    <h2 className="mt-3 text-primary text-xl font-bold">{product.price}$</h2>
                                    <p className="mt-2 text-black font-semibold">{product.name}</p>
                                    <p className="text-gray-600 text-sm">{product.description}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                <div className='mt-10'>
                    <AddProducts/>
                </div>
            </div>
        </section>
    );
};

export default MiniEcommerce;