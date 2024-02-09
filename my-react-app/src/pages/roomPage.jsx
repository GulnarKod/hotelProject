import React from "react";
import CarouselOfPhotos from './caruselOfPhotos';
import { Button } from "antd";
import { HomeOutlined } from '@ant-design/icons';
const RoomPage = () => {
    return (
        <div className="roomPageContainer">

            <div >  <Button className="homeButton"><HomeOutlined />Back Home</Button>
            </div >
            <div className='roomsDescriptionBlock'>
               <CarouselOfPhotos />
            <div>Description</div>
            <div>
                <Button>Check In</Button>
                <Button>Check Out</Button>
            </div>
            <div>Features:</div>
            </div>
            <div>Description:</div>
        </div>
    );
}
export default RoomPage;