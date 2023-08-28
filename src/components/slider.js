import React, { useState, useEffect } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [images] = useState([
    "https://img.freepik.com/free-photo/love-romance-perforated-paper-heart_53876-87.jpg",
    "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqR-hpYCkZ0QUZy67GZDYAhcO0mAAIetWY1eApGCW&s",
    "https://34travel.me/media/upload/images/2020/MAY/arch2020/1.jpg",
  ]);

  useEffect(()=>{
const interval=setInterval(()=>{
 setIndex((index)=>(index===3?0:index+1))
},1000)
return ()=>clearInterval(interval )
  },[])
  return (
    <div>
      <img width={300} src={images[index]} alt="" />
      <div style={{ display: "flex", gap:'10px'}}>
        {images.map((elem,i) => {
          return <img style={{border:i=== index?"3px solid red":null}} width={200} src={elem} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Slider;