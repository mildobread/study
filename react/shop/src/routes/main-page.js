import { Col, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'


function MainPage(props) { // Component

  let click_count = 2;
  let [more_button, set_more_button] = useState(true);
  let [loading_txt, set_loading_txt] = useState("더보기");

  useEffect(() => {
    if (click_count === 4) {
      set_more_button(false)
    }
  }, [click_count]) // }, [])는 Dependency

  return (
    <Container>
      <Row>
        {props.shoes.map((shoe, i) => (
          <Col key={i} className="col-md-4">
            <img src={"https://raw.githubusercontent.com/mildobread/study/main/react/shop/public/img/shoes" + (i + 1) + ".jpg"} width="80%" alt="shoe img"></img>
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
          </Col>
        ))}
      </Row>
      {
        more_button === true ?
        <button onClick={() => {
          set_loading_txt("로딩중");
          axios.get("https://codingapple1.github.io/shop/data" + click_count + ".json")
            .then((result) => {
              let copy = [...props.shoes, ...result.data];
              props.setShoes(copy);
              console.log(result.data);
              set_loading_txt("더보기");
            })
            .catch(() => {
              set_loading_txt("더보기");
            })
            click_count += 1;
        }}>{loading_txt}</button> : null
      }
    </Container>
  )
}

export default MainPage;