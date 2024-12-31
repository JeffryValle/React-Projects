import { Container, Navbar } from "react-bootstrap";
import { Payment } from "./Payment";
import { Link } from "react-router";

export const NavBar = () => {


    return (
        <Container>
          <Navbar 
                expand="lg" 
                className="contenedor"
                bg="dark"
                fixed="top" data-bs-theme="dark"
                
          >
            <Container>
              <Navbar.Brand href="/"><Link>Restaurant App</Link></Navbar.Brand>
              <Navbar.Brand ><Payment />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
        
      );
}
