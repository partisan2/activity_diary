import React,{ useEffect, useState } from 'react'
import { Button, Card, Col, Row,Form,Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../components/Navigation'

const Delete = () => {
  const [ subId,setSubId ] = useState('')
  const [ activity,setActiity ] = useState('')
  const [ actDate,setActDate ] = useState('')
  const [ actTime,setActTime ] = useState('')
  const [ loading,setLoading ] = useState(false)
  const navigate = useNavigate()
  const { id } =  useParams()
    useEffect(()=>{
        setLoading(true)
        axios
            .get(`http://localhost:4000/api/${id}`)
            .then((res)=>{
                setSubId(res.data[0].sub_id)
                setActiity(res.data[0].sub_activity)
                setActTime(res.data[0].act_time)
                setActDate(res.data[0].act_date.split(/[T ]/i, 1)[0])
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
const handelDelete = () =>{
  setLoading(true)
  axios
    .delete(`http://localhost:4000/api/delete/${id}`)
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
        <Card style={{maxWidth:"24rem"}} className='mt-5'>
          <Card.Header>
            Delete
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Course Code
                </Form.Label>
                <Form.Control type='text'  value={loading? "Code":subId} readOnly/>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity
                </Form.Label>
                <Form.Control type='text' value={loading? "Code":activity} readOnly/>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity Date
                </Form.Label>
                <Form.Control type='text' value={loading? "Code":actDate} readOnly/>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label>
                  Activity Time
                </Form.Label>
                <Form.Control type='text' value={loading? "Code":actTime} readOnly/>
              </Form.Group>
              <Row>
                <Col className='d-flex justify-content-center'>
                  <Button variant="danger" onClick={handelDelete} >
                    Delete
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

export default Delete
