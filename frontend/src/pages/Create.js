import React, { useState } from 'react'
import { Card, Col, Container,Form,Row,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../components/Navigation'

const Create = () => {
  const [ subId,setSubId ] = useState('')
  const [ activity,setActiity ] = useState('')
  const [ actDate,setActDate ] = useState('')
  const [ actTime,setActTime ] = useState('')
  const [ loading,setLoading ] = useState(false)
  const navigate = useNavigate()
  const handleUpdate = () =>{
    const data = {
      "sub_id":subId,
      "sub_activity":activity,
      "act_date":actDate,
      "act_time":actTime
    }
    setLoading(true)
    axios
      .post('https://activity-diary.onrender.com/api/add',data)
      .then((res)=>{
        setLoading(false)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <>
    <Navigation/>
    <Container fluid>
      <Row>
        <Col xs={12} className='d-flex justify-content-center'>
          <Card style={{maxWidth:"24rem"}} className='mt-5' >
            <Card.Header>
              Add Record
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Course Code
                  </Form.Label>
                  <Form.Control type='text'  onChange={(e)=>{setSubId(e.target.value)}}/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity
                  </Form.Label>
                  <Form.Control type='text'  onChange={(e)=>{setActiity(e.target.value)}}/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity Date
                  </Form.Label>
                  <Form.Control type='date'  onChange={(e)=>{setActDate(e.target.value)}}/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity Time
                  </Form.Label>
                  <Form.Control type='time'  onChange={(e)=>{setActTime(e.target.value)}}/>
                </Form.Group>
                <Row>
                  <Col className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={handleUpdate}>
                      Submit
                    </Button>
                  </Col>
                  <Col className='d-flex justify-content-center'>
                    <Button variant="secondary" onClick={()=>{navigate('/')}}>
                      Cancel
                    </Button>
                  </Col>              
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Create
