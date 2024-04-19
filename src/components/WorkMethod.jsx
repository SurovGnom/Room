import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cost from "../icons/cost.svg"
import time from "../icons/time.svg"
import flexible from "../icons/flexible.svg"

const WorkMethod =()=> {
    return (
      <div className='container ' style={{marginTop:"83px",width:"75%", marginBottom:"240px"}}>            
    <Card.Body >
      <Card.Title  style={{fontSize:"48px"}}>Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.</Card.Title>
      <Card.Subtitle className="mb-2 text-muted "  style={{fontSize:"14px",marginTop:"24px"}}>GET IN TOUCH</Card.Subtitle>
      </Card.Body>

      <Row className='py-5'>
          <Col>
          <Card.Body>
              <img src={cost} alt="cost" className='d-block mx-auto img-fluid w-50' />
          <Card.Title style={{fontSize:"24px",color:"#1A1A1A",marginTop:"26px"}}>Cost-effective</Card.Title>
          <Card.Text style={{color:"#AAAAAA",lineHeight:"24px",marginTop:"18px"}}>
          At a fraction of the cost of traditional construction, 
          our pre-fab solutions create additional space for focused work and collaboration without constant noise, 
          debris and distraction.
          </Card.Text>
          </Card.Body>
          </Col>
          <Col>
          <Card.Body>
              <img src={time} alt="time" className='d-block mx-auto img-fluid w-50' />
          <Card.Title style={{fontSize:"24px",color:"#1A1A1A",marginTop:"26px"}}>Time Saving</Card.Title>
          <Card.Text style={{color:"#AAAAAA",lineHeight:"24px",marginTop:"18px"}}>
          Thoughtful design ensures simple installation in a few hours or less.
           And,because our products are safety ensured, 
           you'll never have to spend time or money chasing after permits,
           contractors, and more.
          </Card.Text>
          </Card.Body>
          </Col>
          <Col>
          <Card.Body>
              <img src={flexible} alt="flexible" className='d-block mx-auto img-fluid w-50' />
          <Card.Title style={{fontSize:"24px",color:"#1A1A1A",marginTop:"26px"}}>Flexible</Card.Title>
          <Card.Text style={{color:"#AAAAAA",lineHeight:"24px",marginTop:"18px"}}>
          Unlike traditional construction,
          our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office,
          or to an entirely new location.
          </Card.Text>
          </Card.Body>
          </Col>
      </Row>
      </div>
    )
  }

export default WorkMethod