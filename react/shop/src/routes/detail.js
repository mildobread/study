import { Col, Container, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Detail(props) { // Component

  let [discount, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let { id } = useParams();
  let shoe = props.shoes.find(x => x.id === parseInt(id));

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 2000)

    return ()=>{ // useEffect 동작 전에 실행되는 코드
      clearTimeout(timer)
    }
  }) // }, [])는 Dependency

  return (
    <Container>
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
      <TabContent tab={tab} />
    </Container>
  )
}

function TabContent({tab}) {
  if  (tab === 0) {
    return <div>내용0</div>
  } else if  (tab === 1) {
    return <div>내용1</div>
  } else if  (tab === 2) {
    return <div>내용2</div>
  }
}

export default Detail;