import React from "react";
import "../scss/main.css"
import {Navigate} from 'react-router-dom'
import { Layout,Button, Checkbox,Carousel,Table } from 'antd';
import Header from './header'

const {Content } = Layout;
const Homepage=()=>{
     return(  
    <Layout >
      <Header/>
      <Content className="content">
        <div>
        <Button type="text">Clear all filters</Button>
        <Checkbox >Free rooms only</Checkbox>
        </div>
        <Carousel>
      <div>
        
      </div>
      <div>
        <h3 className="caruselElement">2</h3>
      </div>
      <div>
        <h3 className="caruselElement">3</h3>
      </div>
      <div>
        <h3 className="caruselElement">4</h3>
      </div>
    </Carousel>
      </Content>
    </Layout>
       
   
     )
}

export default Homepage;