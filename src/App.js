import './App.css';
import Counter from './components/counter'
import Buttons from './components/buttons'
import Menu from './components/menu'
import Card from './components/card'
import Slider from './components/slider'
import Batery from './components/batery'
import Input from './components/input'
import Product from './components/Product/Product';
import React, { useState, useEffect } from 'react';

function App() {
  const [val, setVal] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState(true);

  useEffect(() => {
    // При загрузке компонента получаем значение из localStorage (если есть) и устанавливаем его в переменную val
    const storedValue = localStorage.getItem('val');
    if (storedValue) {
      setVal(storedValue);
    }
  }, []);

  const btnClick = () => {
    console.log("value", val);
    setData(val);
    setType((type) => !type);
  };

  useEffect(() => {
    // При изменении значения переменной val сохраняем его в localStorage
    localStorage.setItem('val', val);
  }, [val]);

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Buttons/> */}
      {/* <Menu/> */}
      {/* <Card/> */}
      {/* <Slider/> */}
      {/* <Batery/> */}
      {/* <Input/> */}
      <Product
        btnClick={btnClick}
        val={val}
        setVal={setVal}
        setData={setData}
        type={type}
        setType={setType}
      />
    </div>
  );
}

export default App;
