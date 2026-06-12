const Button = ({count, handleClick}) => {
    // const handleClick = () => {
    //     setCount(prev=> prev+1)
    // }

    return (
        <section className="p-20">
            <h1 className="text-3xl font-semibold text-green-400">Button</h1>

            <p>Count: <span className="text-sm font-bold">{count}</span></p>
            <button className="" onClick={handleClick}>Click Me</button>
        </section>
    )
}

export default Button;