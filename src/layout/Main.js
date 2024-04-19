import React from "react";
import TitleHeader from "../components/TitleHeader";
import Rooms from "../components/Rooms";
import MainCarousel from "../components/MainCarousel";
import Brands from "../components/Brands";
import WorkMethod from "../components/WorkMethod";
import ImgOverlay from "../components/ImgOverlay";
import Boundaries from "../components/Boundaries";
import EndCarousel from "../components/EndCarousel";
import FreeTrail from "../components/FreeTrail";

const Main =() =>{
    return(
        <div>
            <TitleHeader />
            <Rooms />
            <Brands/>
            <MainCarousel />
            <WorkMethod />
            <ImgOverlay />
            <Boundaries />
            <EndCarousel/>
            <FreeTrail />
        </div>
    )
}
export default Main;