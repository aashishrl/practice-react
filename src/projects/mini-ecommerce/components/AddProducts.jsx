import { useState, useEffect } from 'react';

const AddProducts = () => {

    const [productData, setProductData] = useState({
        productName: "",
        price: "",
        description: "",
        stock: null,
    })

    const [products, setProducts] = useState([
    ])

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setProductData(prev => (
            { ...prev, [name]: type === "radio" ? value === "true" : value }
        ))
    }

    const handleProductDataSubmit = (e) => {
        e.preventDefault();
        console.log(productData)
        setProducts(prev => {
            const updated = [...prev, productData];
            console.log("Updated products:", updated);
            return updated;
        });

    }
    useEffect(() => {
    }, [])

    return (
        <>
            <div className='p-6 bg-white rounded-md shadow-md'>
                <h2 className='text-xl font-semibold mb-4'>Add New Product</h2>
                <form action="" onSubmit={handleProductDataSubmit}>
                    <div>
                        <label>Product Name</label>
                        <input name="productName" value={productData.productName} onChange={handleChange} placeholder="Enter Product Name" type="text" />
                    </div>
                    <div>
                        <label>Product Price</label>
                        <input name="price" value={productData.price} onChange={handleChange} placeholder="Enter Product Price" type="number" />
                    </div>
                    <div>
                        <label>Product Description</label>
                        <input name="description" value={productData.description} onChange={handleChange} placeholder="Enter Product Description" type="text" />
                    </div>
                    <div>
                        <label>Stock</label>
                        <input name="stock" type="radio" value="true" placeholder="Enter Product" checked={productData.stock === true} onChange={handleChange} /> <span>true</span>
                        <input name="stock" type="radio" value="false" placeholder="Enter Product" checked={productData.stock === false} onChange={handleChange} /> <span>false</span>
                    </div>

                    <button type="submit" className="px-4 py-2 text-white bg-primary rounded-sm border-0">Add Product</button>
                </form>

            </div >
        </>
    )
}
export default AddProducts;