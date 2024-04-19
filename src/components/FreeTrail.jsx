import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shipping from "../icons/shipping.svg"
import plug from "../icons/plug.svg"
import returns from "../icons/returns.svg"

const FreeTrail = () => {
  return (
    <div className='mx-5'>
    <Card className="text-center mx-auto border-0"  style={{background:"#F2F2F2",width:"95%", borderRadius:"0px",height:"465px",marginBottom:"80px"}}>
      <Card.Body>
        <h1 style={{fontSize:"46px",color:"#000000",marginTop:"40px"}}>100 day risk-free trial</h1>
        <Row className='m-4 p-5 justify-content-center'>
            <Col md={3}>
            <Image src={shipping} />
            <Card.Text style={{color:"#1A1A1A",fontSize:"12px",marginTop:"14px"}}>FREE SHIPPING</Card.Text>
            </Col>
            <Col md={3}>
            <Image src={plug} />
            <Card.Text style={{color:"#1A1A1A",fontSize:"12px",marginTop:"28px"}}>PLUG & PLAY</Card.Text>
            </Col>
            <Col md={3}>
            <Image src={returns} />
            <Card.Text style={{color:"#1A1A1A",fontSize:"12px",marginTop:"14px"}}>FREE RETURNS</Card.Text>
            </Col>
       </Row>
        <Button style={{backgroundColor:"#46856E",fontSize:"12px",padding:"12px 36px",border:"0",borderRadius:"2px",fontStretch:"extra-condensed",letterSpacing:"2px"}}>GET A ROOM</Button>
        <Card.Text style={{color:"#AAAAAA",fontSize:"12px"}} className='gap-2 d-flex justify-content-center  mt-3'>
        Terms & Conditions
        <span>apply</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default FreeTrail