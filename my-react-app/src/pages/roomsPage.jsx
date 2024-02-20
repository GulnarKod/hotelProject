import React, { useEffect } from "react";
import { Link,useParams } from 'react-router-dom'
import { Button } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from 'antd';


const RoomPage = () => {
    const { id } = useParams();
    const{currentItem,loading, error} = useSelector(state => state.data);
//     const loading = useSelector(state => state.data.loading);
//   const error = useSelector(state => state.data.error);
    console.log(currentItem);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({ type:'getSingleData', payload:{id}}) //data/getCurrentItemSuccess'
    },[dispatch, id]);

    
    const onChange = (currentSlide) => {
    };
 
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    return (
        <div className="roomPageContainer">
            <div>
                <Link to='/'>
                    <Button type='primary' className="homeButton"><HomeOutlined />Back Home</Button>
                </Link>
            </div>
            {currentItem ? (
                <div data='roomsDescriptionBlock'>
                    {currentItem.map((item,id) => (
                        <div key={id}>
                            <div className="antCarusel" >
                            <Carousel afterChange={onChange}>
                    {item.images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} style={{ width: '50%', maxHeight: '400px' }} />
                        </div>
                    ))}
                </Carousel>
                            </div>
                            <div className="roomDescriptionItem">

                                <h3>Room {item.number}</h3>
                                <p>Type: {item.type}</p>
                                <p>Occupancy: {item.occupancy}</p>
                                <p>Price: {item.price}$</p>
                                <p>Quest: {item.guest}</p>
                            </div>
                            <div>
                                <Button>Check In</Button>
                                <Button>Check Out</Button>

                                <div>Features: {item.features}</div>
                            </div>
                            <div>Description: {item.description}</div>
                        </div>

            ))}
        </div>
    ) : (
        <div>{loading}</div>
    )

}
        </div >
    );
}

export default RoomPage;