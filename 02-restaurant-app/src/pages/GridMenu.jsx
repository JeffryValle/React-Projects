import { useState } from 'react';
import { BtnAgregar } from '../components/BtnAgregar';
import { Breakfast, Lunch, Dinner, Snacks, Drinks} from '../data/options'
import { Card, Col, Navbar, Row } from "react-bootstrap";
// import { menu } from '../components/Grid';
// import { useState } from 'react';

export const GridMenu = ( { state } ) => {

  const [todo, setTodo] = useState([])
  const [tot, setTot] = useState([])
  const [amount, setAmount] = useState([])

  // BtnAgregar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (opcion, product1, product2, product3, product4) => {

    if( product1 !== 0|| product2 !== 0 || product3 !== 0 || product4 !== 0  ){
      add(opcion);
      add2(opcion,product1, product2, product3, product4);
      setShow(true);
    }
  }

  const [ product1, setProduct1] = useState(0);
  const [ product2, setProduct2] = useState(0);
  const [ product3, setProduct3] = useState(0);
  const [ product4, setProduct4] = useState(0);


  const plusProduct = (opcion) => {

    if(opcion === 1) return setProduct1( product1 + 1 );
    if(opcion === 2) return setProduct2( product2 + 1 );
    if(opcion === 3) return setProduct3( product3 + 1 );
    if(opcion === 4) return setProduct4( product4 + 1 );
  };

  const minusProduct = (opcion) => {
    if(opcion === 1){ 
      if(product1 > 0 ) return setProduct1( product1 - 1 );
      return;
    }
    if(opcion === 2){ 
      if(product2 > 0 ) return setProduct2( product2 - 1 );
      return;
    }
    if(opcion === 3){ 
      if(product3 > 0 ) return setProduct3( product3 - 1 );
      return;
    }
    if(opcion === 4){ 
      if(product4 > 0 ) return setProduct4( product4 - 1 );
      return;
    }
  };


    const getOption = ( op ) => {
      if (op === 'Breakfast') return Breakfast;
      if (op === 'Lunch') return Lunch;
      if (op === 'Dinner') return Dinner;
      if (op === 'Snacks') return Snacks;
      if (op === 'Drinks') return Drinks;
    };

    const add = (opcion) => {
      setTodo([...todo, opcion])
    };

    const add2 = (opcion, product1, product2, product3, product4) => {

      if(opcion.id === 1) {
         setAmount([...amount, product1]);
         setTot([...tot, product1 * opcion.price]);
         setProduct1(0);
        }
      if(opcion.id === 2) {
         setAmount([...amount, product2]);
         setTot([...tot, product2 * opcion.price]);
         setProduct2(0);
        }
      if(opcion.id === 3) {
         setAmount([...amount, product3]);
         setTot([...tot, product3 * opcion.price]);
         setProduct3(0);
        }
      if(opcion.id === 4) {
         setAmount([...amount, product4]);
         setTot([...tot, product4 * opcion.price]);
         setProduct4(0);
        }
    };



    return (
      <>
        <Row xs={1} sm={2} md={4} className="g-2 gridd">
          {
            getOption(state).map( (opcion) => (
                <Col key={opcion.id}>
                <Card className="m-1 alinear">
                    <Card.Body>
                      <Card.Title>
                        <Navbar.Brand>
                        <button className="btn" style={{ textAlign: 'center'}}>{ opcion.name }</button>
                        </Navbar.Brand>
                      </Card.Title>
 
                    <Card.Text>
                    </Card.Text>
                        {/* <BtnAgregar product={product} setProduct={setProduct}/> */}
                        <div >
                          <h6 style={{ textAlign: 'center'}}>{ (opcion.id === 1) 
                                ? product1
                                : (opcion.id === 2)
                                  ? product2
                                  : (opcion.id === 3) 
                                    ? product3
                                    : (opcion.id === 4)
                                      ? product4
                                      : 0
                          }</h6>
                          <button
                              className="btn btn1" 
                              onClick={ () => plusProduct(opcion.id) }
                          >+</button>
                          
                          <BtnAgregar opcion={opcion} add={add} add2={add2}
                            product1={product1}
                            product2={product2}
                            product3={product3}
                            product4={product4}
                            todo={todo} tot={tot} amount={amount}
                            
                          />

                          <button 
                              className="btn btn1"
                              onClick={ () => minusProduct(opcion.id)}
                          >-</button>
                      </div>
                    </Card.Body>
                </Card>
                </Col>

            ))
          }
        </Row>

        <div className='footerr'>
          

          <Navbar.Brand href="/">
            <button 
              className='btn btn1 btnback'
              style={{ width:{ xs: '10px'} }}
            >Back</button>
          </Navbar.Brand>
        </div>
        </>
      );
  }