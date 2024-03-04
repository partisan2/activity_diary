import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Table, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Home = () => {
    const [ data,setData ] = useState([])
    const [ loading,setLoading ] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios
            .get(`https://activity-diary.onrender.com/api/`)
            .then((res)=>{
                setData(res.data)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
  return (
    <>
    <Navigation/>
    <Container fluid>
        <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={10}>
                <Table responsive bordered className='mt-5'>
                    <thead>
                        <tr>
                            <th>Course code</th>
                            <th>Activity</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    
                    {loading?console.log("loading"):(
                        <tbody>
                            {data.map((sub,index)=>{
                                return <tr key={index}>
                                            <td>{sub.sub_id}</td>
                                            <td>{sub.sub_activity}</td>
                                            <td>{sub.act_date.split(/[T ]/i, 1)[0]}</td>
                                            <td>{sub.act_time}</td>
                                            <td>
                                                <Button variant='primary'>
                                                    <Link to={`/edit/${sub.sub_id}`} className='text-white text-decoration-none'>Update</Link>
                                                </Button> 
                                            </td>
                                            <td>
                                                <Button variant='danger'>
                                                    <Link to={`/delete/${sub.sub_id}`} className='text-white text-decoration-none'>Delete</Link>
                                                </Button> 
                                            </td>
                                        </tr>
                            })}
                        </tbody>
                    )}
                </Table>
                
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Home
