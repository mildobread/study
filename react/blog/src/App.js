/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']); // Destructuring
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    let 새글제목 = [...글제목];
    새글제목[0] = '남자 코트 추천';
    글제목변경(새글제목);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '25px'}}>'ReactBlog'</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}
          <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}
          <span onClick={()=>함수()}>👩</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
