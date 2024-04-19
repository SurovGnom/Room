import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import marker from "../icons/marker.svg"

function NavDropdownToggle(){
    const showrooms = [
    {name:'New York',id:1},
    {name:'London',id:2},
    {name:'San Francisco',id:3},
    {name:'Paris',id:4},
    {name:'Copenhagen',id:5},
    {name:'Zürich',id:6},
    {name:'Los Angeles',id:7},
    {name:'Berlin',id:8},
    {name:'Belgium',id:9},
    {name:'Virtual Demo',id:10},
];

return (
    <Dropdown>
      <Dropdown.Toggle variant='flat' className='d-flex gap-2 align-items-center' id="dropdown-basic">
        <img src={marker} alt="marker" />
        <span style={{color:"#000000",fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px"}}>Showrooms</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
            showrooms.map(showroom=>(
                <Dropdown.Item key={showroom.id}>{showroom.name}</Dropdown.Item>
            ))
        }
       

      </Dropdown.Menu>
    </Dropdown>
);
}
export default NavDropdownToggle;