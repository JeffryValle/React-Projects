import { Card, Col, Navbar, Row } from "react-bootstrap";


export const Grid = ({handleClick}) => {
    return (
        <Row xs={1} sm={2} md={4} className="g-2 gridd">
          {
            menu.map( (op) => (
                <Col key={op.id}>
                <Card className="m-1 alinear">
                    <Card.Body>
                    <Card.Title>
                        <Navbar.Brand href="/">
                            <button className="btn" onClick={ handleClick }>{ op.name }</button>
                        </Navbar.Brand></Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))
          }
        </Row>
      );
}


export const menu = [
    {
        id: 1,
        name: 'Breakfast',
    },
    {
        id: 2,
        name: 'Lunch',
    },
    {
        id: 3,
        name: 'Dinner',
    },
    {
        id: 4,
        name: 'Drinks',
    },
    {
        id: 5,
        name: 'Snacks',
    },
]