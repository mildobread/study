/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['게시글1', '게시글2', '게시글3']); // Destructuring
  let [따봉들, 따봉들변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜들, 날짜들변경] = useState(['1월 30일 발행', '1월 30일 발행', '1월 30일 발행']);
  
  function 정렬() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  function 따봉변경(i) {
    let copy = [...따봉들];
    copy[i] = copy[i] + 1;
    따봉들변경(copy);
  }

  function 모달변경(i) {
    setTitle(i);
    setModal(true);
  }

  function 글추가(입력값) {
    if (!입력값) return;
    let copy = [...글제목];
    copy.unshift(입력값);
    글제목변경(copy);

    copy = [...따봉들];
    copy.unshift(0);
    따봉들변경(copy);
  
    copy = [...날짜들];
    copy.unshift(날짜());
    날짜들변경(copy);
  }

  function 날짜() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let currentTimeString = currentDate.toLocaleTimeString();
    return currentMonth + '월 ' + currentDay + '일 발행 - ' + currentTimeString;
  }

  function 글삭제(i) {
    let copy = [...글제목];
    copy.splice(i, 1)
    글제목변경(copy);

    copy = [...따봉들];
    copy.splice(i, 1)
    따봉들변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'white', fontSize: '25px'}}>ReactBlog</h4>
      </div>
      <button onClick={()=>정렬()}>가나다순정렬👩</button>
      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4>
                <span onClick={()=>모달변경(i)}>{a}</span>
                <span onClick={()=>따봉변경(i)}> 👍</span>{따봉들[i]}
              </h4>
              <p>{날짜들[i]}</p>
              <button onClick={()=>글삭제(i)}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value)
      }}/>
      <button onClick={()=>글추가(입력값)}>글쓰기</button>
      {
        modal == true ? <Modal 글제목={글제목[title]}/> : null
      }
    </div>
  );
}

function Modal(props) { // Component
  return (
    <>
      <div className='modal'>
        <h4>{props.글제목}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  )
}

export default App;
