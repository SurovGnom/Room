import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdownToggle from "../components/NavDropdownToggle"
import Image from 'react-bootstrap/Image';
import cart from '../icons/cart.svg'
import logo from "../img/Room-logo.png"
import UpNav from '../components/UpNav';

function NavHeader() {
  return (
    <>
    <div>
    <UpNav />
    </div>
    <Navbar expand="lg" className="bg-transparent border-bottom border-2">
      <Container fluid className='mx-5'>
      <Navbar.Brand href="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
          <Nav
            className="mx-auto my-2 my-lg-0  "
                  >
            <div className='d-flex gap-5 flex-row align-items-center text-uppercase ' style={{fontSize:"12px",letterSpacing:"2px"}}>
            <Nav.Link href="#action1">Products</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
            <Nav.Link href="#action3" >Shop</Nav.Link>
            </div>
          </Nav>
          <NavDropdownToggle />
            <Button className='lg ' variant='flat'>
                <Image src={cart}/>
            </Button>
      </Container>
    </Navbar>
    </>
  );
}

export default NavHeader;