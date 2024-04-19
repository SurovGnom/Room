import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Review from "../img/Review.jpg"
import star from "../icons/star.svg"
import google from "../img/google.png"
import wayFair from "../img/wayfair.png"
import flexPort from "../img/flexport.png"

const ImgOverlay =()=>{
    return(

        <div className="container">
        <Card className=" text-white ">
        <Card.Img src={Review} alt="Card image" />
        <Card.ImgOverlay>
            <div className='d-block position-absolute ' style={{top:"10%",left:"15%"}}>
            <div className='mb-4'>
                <div className="stars">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
            <Card.Text style={{width:"60%",marginTop:"7px",marginBottom:"8px",fontSize:"24px"}}>
            “We can now have meetings in peace.”
            </Card.Text>
            <Image  src={google}/>
            </div>
            <div className='mb-4'>
                <div className="stars">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
            <Card.Text style={{width:"60%",marginTop:"7px",marginBottom:"8px",fontSize:"24px"}}>
            “Amazing private space to get work done.”
            </Card.Text>
            <Image  src={wayFair}/>
            </div>
            <div className='mb-4'>
                <div className="stars">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
            <Card.Text style={{width:"60%",marginTop:"7px",marginBottom:"8px",fontSize:"24px"}}>
            “Our booths are in constant use.”
            </Card.Text>
            <Image  src={flexPort}/>
            </div>
            <Card.Text style={{color:"#FFFFFF",fontVariant:"all-small-caps"}}>READ MORE REVIEWS</Card.Text>
            </div>
        </Card.ImgOverlay>
        </Card>
        </div>
    )
}


export default ImgOverlay