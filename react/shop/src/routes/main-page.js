import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios'


function MainPage(props) { // Component
  return (
    <Container>
      <Row>
        {props.shoes.map((shoe, i) => (
          <Col key={i} className="col-md-4">
            <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (i + 1) + ".jpg"} width="80%"></img>
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
          </Col>
        ))}
      </Row>
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            let copy = [...props.shoes, ...result.data];
            props.setShoes(copy);
            console.log(result.data);
          })
          .catch(() => {
            console.log('실패함ㅅㄱ')
          })
      }}>더보기</button>
    </Container>
  )
}

export default MainPage;