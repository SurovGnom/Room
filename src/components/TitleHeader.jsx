import React  from 'react'
import headerImg from "../img/header-img.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const TitleHeader =()=> {
    return (
      <div>
           <div className="d-flex justify-content-center">
                <img src={headerImg} alt="header-img" className='my-5'/>
            </div>
            <div className="container">
            <Row className='mx-5 align-items-center' style={{marginBottom:"210px"}}>
                <Col>
                <h2 style={{color:"#1A1A1A",fontSize:"48px",width:'355px'}}>Design that inspires a better way to work.</h2>
                </Col>
                <Col>
                <p style={{color:"#AAAAAA",fontSize:"24px"}}>We've developed a series of purpose-built rooms that offer companies looking for change an affordable, sustainable, and flexible alternative to fixed construction and traditional office design.</p>
                </Col>
            </Row>
            </div>
      </div>
    )
  }


export default TitleHeader