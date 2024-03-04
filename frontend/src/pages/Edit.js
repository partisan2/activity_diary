import React, { useEffect, useState } from 'react'
import { Card, Col, Container,Form,Row,Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../components/Navigation'

const Edit = () => {
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
            .get(`https://activity-diary.onrender.com/api/${id}`)
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

    const handleEditData = () =>{
      const data = {
        "sub_id":subId,
        "sub_activity":activity,
        "act_date":actDate,
        "act_time":actTime
      }
      setLoading(true)
      axios
        .put(`https://activity-diary.onrender.com/api/update`,data)
        .then(()=>{
          setLoading(false)
          navigate('/')
          // console.log(data)
        })
        .catch((err)=>{
          setLoading(false)
          alert("An Error Occured")
        })
    }

    const handelCancel = () =>{
      navigate('/')
    }
  return (
    <>
    <Navigation/>
    <Container fluid>
      <Row>
        <Col xs={12} className='d-flex justify-content-center'>
          <Card style={{maxWidth:"24rem"}} className='mt-5'>
            <Card.Header>
              Update
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Course Code
                  </Form.Label>
                  <Form.Control type='text' value={loading? "Code":subId} onChange={(e)=>{setSubId(e.target.value)}} readOnly/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity
                  </Form.Label>
                  <Form.Control type='text' value={loading ? "Activity":activity} onChange={(e)=>{setActiity(e.target.value)}}/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity Date
                  </Form.Label>
                  <Form.Control type='text' value={loading? "Date":actDate} onChange={(e)=>{setActDate(e.target.value)}}/>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label>
                    Activity Time
                  </Form.Label>
                  <Form.Control type='text' value={loading? "Time":actTime} onChange={(e)=>{setActTime(e.target.value)}}/>
                </Form.Group>
                <Row>
                  <Col className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={handleEditData}>
                      Update
                    </Button>
                  </Col>
                  <Col className='d-flex justify-content-center'>
                    <Button variant="secondary" onClick={handelCancel}>
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

export default Edit
