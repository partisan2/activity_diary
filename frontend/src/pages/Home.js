import React from 'react'
import { Container,Row,Col, Table } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid>
        <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={12}>
                <Table responsive bordered className='mt-5'>
                    <thead>
                        <tr>
                            <th>Course code</th>
                            <th>Activity</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default Home
