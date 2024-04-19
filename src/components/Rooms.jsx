import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import phoneBooth from "../img/phone-booth.jpg"
import focusRoom from  "../img/focus-room.jpg"
import meetRoom from "../img/meeting-room.jpg"
import openMeetRoom from "../img/open-meeting-room.jpg"


const Rooms =() => {
    return (
      <div>                
    <Row className="justify-content-center  gx-xl-4 gy-xl-5 mb-4">
      <Col md={6} xl={5}>
      <Image 
          src={phoneBooth}
          width={"100%"}
          height={"100%"}
          alt="phone-booth"/>
      <p style={{fontSize:"24px"}}>Phone booth</p>
      </Col>
      <Col md={6} xl={5}>
      <Image 
          src={focusRoom}
          width={"100%"}
          height={"100%"}
          alt="focus-room"/>
      <p style={{fontSize:"24px"}}>Focus Room</p>                    
      </Col>
      <Col md={6} xl={5}>
      <Image 
          src={meetRoom}
          width={"100%"}
          height={"100%"}
          alt="meeting-room"/>
      <p style={{fontSize:"24px"}}>Meeting Room</p>
      </Col>
      <Col md={6} xl={5}>
      <Image 
          src={openMeetRoom}
          width={"100%"}
          height={"100%"}
          alt="open-meeting-room"/>
      <p style={{fontSize:"24px"}}>Open Meeting Room</p>                    
      </Col>
  </Row></div>
    )
  }


export default Rooms