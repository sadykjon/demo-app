import React,{useState} from 'react'


const Counter = () => {
    const [count, changeCount]=useState(0)
    const stop0 = () => {
        if (count > 0) {
            changeCount(count - 1);
        }
    };
    return (
        <div className='wrapper'>
            <p>A single independent React component<br /> using Just one React hook 👇 </p>
            <div className='counter'>
                <h2>{count}</h2>
                <button onClick={stop0}>
                    <span>-1</span>
                </button>
                <button onClick={()=>changeCount(count+1)}>
                    <span>+1</span>
                </button>
                <button onClick={()=>changeCount(0)}>
                    <span>Reset</span>
                </button>
            </div>
        </div>
    )
}
export default Counter