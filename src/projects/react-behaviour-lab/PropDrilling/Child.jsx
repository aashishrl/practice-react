import Button from "./Button";

const Child = ({count, handleClick}) => {
    console.log(count);
    
    return (
        <div>
            <Button count={count} handleClick={handleClick}/>
            {/* {count} */}
        </div>
    )
}

export default Child;