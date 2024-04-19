import React from 'react'

const  UpNav = () =>  {
    const myStyle={
        background:"#F5f5f5",
        display:"flex",
        justifyContent:"flex-end",
        color:"#AAAAAA",
        gap:"25px",
        textTransform:"uppercase",
    }
    const languages = [
        {label:"US / CA", id:1},
           {label:"UK",id:2},
           {label:"IE",id:3},
           {label:"CH",id:4},
           {label:"FR / BE / LU",id:5},
           {label:"DE / AT",id:6},
           {label:"DK",id:7},
           {label:"NL",id:8},
           {label:"NO",id:9},
           {label:"SE",id:10},
           {label:"AU / NZ",id:11},
   ];


    return (
      <div style={myStyle}>
        <a href="/#"  style={{textDecoration:"none",color:"#AAAAAA",fontSize:"12px"}}>Contact Sales</a>
        <a href="/#"  style={{textDecoration:"none",color:"#AAAAAA",fontSize:"12px"}}>TEL 646-791-3726</a>
        <select style={{color:"#AAAAAA", border:"none",fontSize:"12px"}} >
            <option value="" >US</option>
            {
                languages.map((lang)=>(
                    <option value="lang" key={lang.id}>{lang.label}</option>
                ))
            }
        </select>
      </div>
    )
  }  
export default UpNav;