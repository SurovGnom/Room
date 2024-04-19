import React from 'react'
import whiteLogo from "../img/whiteLogo.png"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Fb from "../icons/fb.svg"
import Ig from "../icons/ig.svg"
import In from "../icons/in.svg"
import Pint from "../icons/pint.svg"
import Button from "react-bootstrap/Button"
import ScrollToTop from '../components/ScrollToTop'


const Footer = () => {
  return (
    <div style={{background:"#2B2B2B"}} >
        <div className='d-flex align-items-start' style={{paddingTop:"97px",marginLeft:"120px"}}>
        <img src={whiteLogo} alt="whiteLogo" />
        <div>
            <Row className='text-white ' style={{fontSize:"14px"}}>
                <Col xl={5}>
                <Row className=' ms-5  '>
                <Col md={4}>
                    <h6 style={{fontSize:"14px"}}>About</h6>
                    <ul className='list-unstyled'>
                        <li>Compare</li>
                        <li>Reviews</li>
                        <li>Risk-Free Trial</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Podcast</li>
                        <li>Blog</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <h6 style={{fontSize:"14px"}}>Support</h6>
                    <ul className='list-unstyled'>
                        <li>FAQ</li>
                        <li>Booth Assembly</li>
                        <li>Delivery</li>
                        <li>Room Service</li>
                        <li>Warranty</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Copyright</li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h6 style={{fontSize:"14px"}}>Showrooms</h6>
                    <ul className='list-unstyled'>
                        <li>New York</li>
                        <li>London</li>
                        <li>San Francisco</li>
                        <li>Paris</li>
                        <li>Copenhagen</li>
                        <li>Zürich</li>
                        <li>Los Angeles</li>
                        <li>Berlin</li>
                        <li>Belgium</li>
                        <li>Virtual Demo</li>
                    </ul>
                </Col>
                <Col md={5}>
                    <h6 style={{fontSize:"14px"}}>Office</h6>
                    <p>599 Broadway, FL 9 New York, NY 10012</p>
                </Col>
            </Row>
                </Col>
                <Col md={2}>
                    <h6>Follow us</h6>
                    <div>
                        <ul className='d-flex list-unstyled ' style={{gap:"13px"}}>
                            <li>
                                <a href="https://www.facebook.com">
                                    <img src={Fb} alt="facebook" />
                                </a></li>
                            <li><a href="https://www.instagram.com/">
                                <img src={Ig} alt="instagram" />
                                </a></li>
                            <li><a href="https://www.linkedin.com/">
                                <img src={In} alt="linkedin" />
                                </a></li>
                            <li><a href="https://www.pinterest.com/">
                                <img src={Pint} alt="pinterest" />
                                </a></li>
                        </ul>
                    </div>
                </Col>
                <Col xl={4}>
                    <h6>Join our mailing list</h6>
                    <div>
                        <p>Be the first to hear everything about ROOM.</p>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" className='py-3'  />
                        </Form.Group>
                        <Form.Select style={{fontSize:"14px"}}>
                            <option>United States</option>
                        </Form.Select>

                        <Form.Group className="mb-3 pt-5" id="custom-checkbox">
                            <Form.Check type="checkbox" className='d-flex text-uppercase gap-3' style={{color:"rgba(255,255,255,0.5)",fontSize:"11px",letterSpacing:"2.4px"}}
                            label=" Yes. I would like to receive marketing communications from ROOM about product updates and special offers. Please refer to ROOM’s Privacy Policy for more information about how we process your data (including how to unsubscribe). " />
                            
                        </Form.Group>
                        <Button variant="primary"  type="submit" style={{float:"right",fontSize:"14px",background:"none", border:"0",textTransform:'uppercase'}}>
                        Sign Up
                        </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            </div>
           <ScrollToTop/>
        </div>
    </div>
  )
}

export default Footer