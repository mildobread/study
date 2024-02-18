import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import styled from 'styled-components'

let YellowBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
`

let NewBtn = styled.button(YellowBtn) // 기존 스타일 복사 가능

function Detail(props) { // Component

  let { id } = useParams();
  let shoe = props.shoes.find(x => x.id === parseInt(id));

  return (
    <Container>
      <YellowBtn bg='blue'>버튼</YellowBtn>
      <Row>
        <Col>
          <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (parseInt(id) + 1) + ".jpg"} width="80%" />
          <h4>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail;