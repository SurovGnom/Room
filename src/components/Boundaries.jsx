import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import direct from "../img/direct.png"
import design from "../img/design.png"
import purpose from "../img/purpose.png"

const  Boundaries =()=>{
    return (
        <Container fluid="md">
        <Row className='flex-column'>
          <Col  className='text-start d-flex flex-column mx-auto ' style={{width:"85%",marginBottom:"135px",marginTop:"240px"}}>
            <h1 style={{fontSize:"46px",color:"#AAAAAA"}}>We take a human approach to a business-to-business industry,
               breaking the boundaries between corporate and personal, 
               and rethinking every step of the user experience along the way.
            </h1>
            <h1 style={{fontSize:"46px",color:"#000000"}}>We make work, work for you.</h1>
          </Col>
          <Col>
          <Row className='flex-column ' style={{rowGap:"64px"}}>
      <Col>
      <Card  className='flex-row border-0 justify-content-center align-items-center ' style={{columnGap:"90px"}}>
      <Card.Img src={direct}/>
      <Card.Body>
      <h2 style={{color:"#1A1A1A"}}>We sell direct.</h2>
        <Card.Text style={{color:"#AAAAAA",width:"68%"}}>
        We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
    <Card className='flex-row-reverse border-0 justify-content-center align-items-center' style={{columnGap:"90px"}} >
      <Card.Img  src={purpose} />
      <Card.Body>
       <h2 style={{color:"#1A1A1A"}}>We build with purpose.</h2>
        <Card.Text style={{color:"#AAAAAA",width:"60%"}}>
        We’re not just building another room with four walls, we’re building a more productive workspace. 
        We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
    <Card className='flex-row border-0 justify-content-center align-items-center' style={{columnGap:"90px"}}>
      <Card.Img  src={design} />
      <Card.Body>
        <h2 style={{color:"#1A1A1A"}}>We design sustainably.</h2>
        <Card.Text style={{color:"#AAAAAA",width:"61%"}}>
        From design to delivery, we strive to lessen our impact on the environment.
        Our products are engineered with recycled materials and replace multiple cycles of construction, 
        minimizing noise and our footprint.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      </Row>
      </Col>
        </Row>
      </Container>
    )
  }


export default Boundaries