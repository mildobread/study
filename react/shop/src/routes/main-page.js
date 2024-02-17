import { Col, Row, Container } from 'react-bootstrap';

function MainPage(props) { // Component
  return (
    <Container>
      <Row>
        {props.shoes.map((shoe, i) => (
          <Col>
            <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (i + 1) + ".jpg"} width="80%"></img>
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MainPage;