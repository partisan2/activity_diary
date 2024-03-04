import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Activity Schedule</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Navigation
