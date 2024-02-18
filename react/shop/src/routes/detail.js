import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Detail(props) { // Component
  
  let [count, setCount] = useState(0);
  let [discount, setAlert] = useState(true);

  let { id } = useParams();
  let shoe = props.shoes.find(x => x.id === parseInt(id));
  let [inputValue, setInput] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 2000)

    return ()=>{ // useEffect 동작 전에 실행되는 코드
      clearTimeout(timer)
    }
  }) // }, [])는 Dependency

  useEffect(() => {
    console.log(inputValue)
    if (isNaN(inputValue)) {
      alert("그러지마세요");
    }
  }, [inputValue])

  return (
    <Container>
      {
        discount == true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div> : null
      }
      {count}
      <button onClick={()=>{ setCount(count + 1)}}>버튼</button>
      <Row>
        <Col>
          <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (parseInt(id) + 1) + ".jpg"} width="80%" />
          <input onChange={(e)=>{
            setInput(e.target.value);
          }}/>
          <h4 className='pt-3'>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail;