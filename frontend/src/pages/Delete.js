import React from 'react'
import { Button, Card, Col, Row,Form,Container } from 'react-bootstrap'

const Delete = () => {
  return (
    <Container fluid>
    <Row>
      <Col xs={12} className='d-flex justify-content-center'>
        <Card style={{maxWidth:"24rem"}}>
          <Card.Header>
            Update
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Course Code
                </Form.Label>
                <Form.Control type='text'   readOnly/>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity Date
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity Time
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Col>
                <Button variant="danger" >
                  Delete
                </Button>
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Delete
