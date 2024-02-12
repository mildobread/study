import { Col } from 'react-bootstrap';
import data from './data.js';

function Comp(props) { // Component
    return (
        <Col>
            <img src={process.env.PUBLIC_URL + data[props.index].img} width="80%"></img>
            <h4>{data[props.index].title}</h4>
            <p>{data[props.index].content}</p>
            <p>{data[props.index].price}</p>
        </Col>
    )
}

export default Comp;