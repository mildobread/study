/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']); // Destructuring
  let [따봉들, 따봉들변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function 함수() {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  function 정렬() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy)
  }

  function 따봉변경(i) {
    let copy = [...따봉들];
    copy[i] = copy[i] + 1;
    따봉들변경(copy)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'white', fontSize: '25px'}}>'ReactBlog'</h4>
      </div>
      <button onClick={()=>정렬()}>가나다순정렬👩</button>
      <button onClick={()=>함수()}>글수정👩</button>
      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4>{a}
                <span onClick={()=>따봉변경(i)}> 👍</span>{따봉들[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal() { // Component
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
