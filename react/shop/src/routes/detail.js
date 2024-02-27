import { Col, Container, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context1 } from './../App.js';


function Detail(props) { // Component

  let { stock } = useContext(Context1) // 보관함 해체
  // Context API 특징: 
  // 1) state 변경시 쓸데없는 것까지(stock 안쓰는 것들) 재렌더링함. => 비효율적
  // 2) 나중에 컴포넌트 재사용이 어려워짐 => 관리가 힘들어짐

  let [discount, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let { id } = useParams();
  let shoe = props.shoes.find(x => x.id === parseInt(id));
  let [fade, setFade] = useState('')

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 2000);

    return ()=>{ // useEffect 동작 전에 실행되는 코드
      clearTimeout(timer);
    }
  }, []) // }, [])는 Dependency

  useEffect(()=>{
    let fadeTimer = setTimeout(()=>{ setFade('end') }, 100);

    return ()=>{
      clearTimeout(fadeTimer);
      setFade('');
    }
  }, []) // 빈 의존성 배열은 첫 렌더링 때만 실행. (아무것도 없으면 컴포넌트가 렌더링 될 때 마다 실행됨)

  return (
    <Container className={"start " + fade}>
      {
        discount === true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div> : null
      }
      <Row style={{ alignItems: "center" }}>
        <Col className="col-md-6">
          <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (parseInt(id) + 1) + ".jpg"} width="80%" alt="shoe img"/>
        </Col>
        <Col className="col-md-6">
          <h4 className='pt-3'>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>

      <Nav variant="tabs" defaultActiveKey="버튼0">
        <Nav.Item>
          <Nav.Link onClick={()=>setTab(0)} eventKey="버튼0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>setTab(1)} eventKey="버튼1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>setTab(2)} eventKey="버튼2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </Container>
  )
}

function TabContent({ tab }) {

  let { stock } = useContext(Context1) // 보관함 해체 (detail 뿐만 아니라 그 자식들도 props 없이 사용할 수 있다.)
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let fadeTimer = setTimeout(()=>{ setFade('end') }, 100)

    return ()=>{
      clearTimeout(fadeTimer)
      setFade('')
    }
  }, [tab])

  return (<div className={"start " + fade}>
    {[
      <div>{stock[0]}</div>,
      <div>내용1</div>,
      <div>내용2</div>][tab]
    }
  </div>)
}

export default Detail;