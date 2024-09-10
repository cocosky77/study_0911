import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [count, setCount] = useState(0); // 숫자 카운트
const [odd, setOdd] = useState(""); // 홀수 짝수 판별

const method = (e) => {
  setCount(count + e);
}

useEffect(() => {
  if(count % 2 === 0) {
    setOdd("짝수");
  }else{
    setOdd("홀수");
  };
}, [count]);
  return (
    <div className="App">
      <div className='calc-container'>
        <div className='calc-detail'>
          <div className='calc-header'>Simple Counter</div>
          <div className='calc-count'>
            <p>현재 카운트: </p>
            <p>{count}</p>
            <p>현재 카운트는 {odd}입니다!</p>
          </div>
          <div className='calc-btn'>
            <button onClick={() => method(-100)}>-100</button>
            <button onClick={() => method(-10)}>-10</button>
            <button onClick={() => method(-1)}>-1</button>
            <button onClick={() => method(1)}>+1</button>
            <button onClick={() => method(10)}>+10</button>
            <button onClick={() => method(100)}>+100</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
