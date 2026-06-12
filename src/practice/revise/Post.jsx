import React,{useState} from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";
const Post = ({postTitle}) => {    
    const [count, setCount] = useState(0)
        
    const handleLikeCount = () => {
        setCount(prev=> prev + 1)
    }
    return (
        <>
            <div className="p-3 border border-white">
                <div className='w-full h-40 bg-amber-100'></div>
                <h2>{postTitle}</h2>
                <div className='flex items-center gap-3 h-6'>
                    <button onClick={handleLikeCount} className='border-0! cursor-pointer'>
                        <FaRegThumbsUp/> 
                    </button>
                    <span>{count==0?"":count}</span>
                </div>
            </div>
        </>
    )
}
export default Post;
