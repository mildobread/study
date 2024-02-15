import { Col } from 'react-bootstrap';

function Detail(props) { // Component
    return (
        <Col>
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg"} width="100%" />
            <h4 className="pt-5">{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
            <button className="btn btn-danger">주문하기</button> 
        </Col>
    )
}

export default Detail;