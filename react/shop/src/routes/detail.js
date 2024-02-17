import { Col, Container, Row } from 'react-bootstrap';

function Detail(props) { // Component
  return (
    <Container>
      <Row>
        {props.shoes.map((shoe, i)=>(
          <Col>
            <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="100%" />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Detail;