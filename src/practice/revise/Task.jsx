import React,{useState} from 'react';
const Task = ({taskName}) => {    
    const [isComplete, SetIsComplete] = useState(false)
    return (
        <>
            <div className="p-3 border border-white">
                <div className='flex items-center gap-3 h-6'>
                    <h2
                     className={`${isComplete?"line-through":"no-underline"}`}
                    >{taskName}</h2>
                    <input type="checkbox"
                        checked={isComplete}
                        onClick={()=>SetIsComplete(prev=>!prev)}
                     />
                </div>
            </div>
        </>
    )
}
export default Task;
