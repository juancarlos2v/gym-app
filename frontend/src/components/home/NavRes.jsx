import { Nav, Navbar } from 'react-bootstrap';


function NavRes() {
    return (
        <Navbar collapseOnSelect expand="lg  d-flex justify-content-end" variant='dark' bg="transparent" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            < Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto ">
                    <Nav.Link href="#/" className='text-light d-flex justify-content-end'>NOSOTROS</Nav.Link>
                    <Nav.Link href="#/" className='text-light d-flex justify-content-end'>CLASES</Nav.Link>
                    <Nav.Link href="#/" className='text-light d-flex justify-content-end'>SEDES</Nav.Link>
                </Nav>
            </Navbar.Collapse >

        </Navbar >
    );
}

export default NavRes;