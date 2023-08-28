import React from "react";

const ProductItem = (props) => {
    console.log(props);
    const { btnClick, val, setVal, type,} = props

    return (
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)} type={type ? "password" : "text"} />
            <button onClick={btnClick}>Click</button>
            <h1 >{val}</h1>
        </div>
    )
}

export default ProductItem