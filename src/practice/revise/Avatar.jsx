import React,{useState} from 'react';

const Avatar = ({img="", userName}) => {    
    return (
        <div className="flex items-center gap-3">
            <img src={img} loading='lazy' className='h-10 w-10 rounded-full border border-gray-700' alt="" srcset="" />    
            <p>{userName}</p>
        </div>
    )
}
export default Avatar;

