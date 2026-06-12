import React,{useState} from 'react';
const DynamicButton = ({text="default Text", bgColor="sky"}) => {    
    return (
        <>
            <button className={`px-3 py-1 bg-${bgColor}-500`}>{text}</button>
            {/* <button className={`px-3 py-1 bg-sky-500`}>{text}</button> */}
        </>
    )
}
export default DynamicButton;
