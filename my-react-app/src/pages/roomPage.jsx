import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Button, Carousel } from "antd";
import "../scss/main.css";
import { HomeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";

const RoomPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'getSingleData', payload: { id } });
    }, []);
    
    const { currentItem, loading, error } = useSelector(state => state.room);
    console.log(currentItem)

    const onChange = (currentSlide) => {
        // Handle carousel slide change if needed
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
    
        <div className="room-page-container">
            <Link to='/'>
                <Button type='primary' className="room-page-button"><HomeOutlined />Back Home</Button>
            </Link>
            <div className='room-page-description-block'>
                {currentItem ? ( 
                    <div>
                        <div className="room-page-carusel">
                            <Carousel afterChange={onChange}>
                                {currentItem.gallery.map((image, imageIndex) => (
                                    <div className= "slick-slide" key={imageIndex}>
                                        <img src={image} alt={`Slide ${image.Index}`} style={{ width: '50%', maxHeight: '100px' }} />
                                    </div>
                                    
))}
                            </Carousel>
                        </div> 
                        <div className="room-page-description-item">
                            <h3>Room {currentItem.number}</h3>
                            <p>Type: {currentItem.type}</p>
                            <p>Occupancy: {currentItem.occupancy}</p>
                            <p>Price: {currentItem.price}$</p>
                            <p>Guest: {currentItem.guest}</p>
                        </div>
                        <div>
                            <Button>Check In</Button>
                            <Button>Check Out</Button>
                            <div>Features: {currentItem.features}</div>
                        </div>
                        <div>Description: {currentItem.description}</div>
                    </div>
        ) : (
          <div>{loading}</div>
        )}
      </div>
      </div>
    );
        }
export default RoomPage;
