import { Col, Row, Container } from 'react-bootstrap';

function Comp(props) { // Component
    return (
        <Col>
            <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (props.index + 1) + ".jpg"} width="80%"></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </Col>
    )
}

export default Comp;