import React  from 'react'
import Card from 'react-bootstrap/Card';
import brands from "../img/brands.png"
import Image from 'react-bootstrap/Image';

 const Brands =() =>{
    return (
      <div style={{marginTop:"215px",marginBottom:"190px"}}>
        <Card.Body className="text-center">
            <Card.Title style={{fontSize:"48px",color:"#1a1a1a"}}>The world's leading brands choose ROOM.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"24px",color:"#4A4A4A"}}>Over 3,000 and counting.</Card.Subtitle>
            <Image
            src={brands} />
        </Card.Body>
      </div>
    )
  }

export default Brands