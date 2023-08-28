import React from "react";
import ProductItem from "../Product-item/Product-item";

const Product = (props) => {
    console.log(props);
    const { btnClick, val, setVal, type, setType,data,setData } = props

    return (
        <div>
            <ProductItem
                btnClick={btnClick}
                val={val}
                setVal={setVal}
            type={type}
            setType={setType}
            />
        </div>
    )
}

export default Product