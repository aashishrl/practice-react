const Cart = ({cartData})=>{
    return (
        <div className="mt-4">
            <p>Total number of Products in Cart: {cartData.length}</p>
            <ul>
                {cartData.map(e=>(
                    <li key={e.id}>{e.productName}</li>   
                ))}
            </ul>
        </div>
    )
}
export default Cart;