import React, { useEffect } from "react";
import "../scss/main.css";
import { useSelector, useDispatch} from "react-redux";
import { getDatasFetch } from '../slice/roomsDataSlice'
import { Layout, Button, Checkbox, Table } from 'antd';

const Homepage = () => {
  const data=useSelector(state=>state.data.data)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch({type:'data/getDatasFetch'});
  }, []);
  const { Content } = Layout;
  const columns = [
    { title: 'Number', dataIndex: 'number' },
    { title: 'Type', dataIndex: 'type' },
    { title: 'Occupancy', dataIndex: 'occupancy' },
    { title: 'Price', dataIndex: 'price', sorter: (a, b) => a.price - b.price },
    { title: 'Guest', dataIndex: 'guest' },
    {
      title: '',
      dataIndex: 'button',
      render: (_, id) => (
        <Button type="primary" >More Information</Button>
      ),
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <Layout>
      <Content className="content">
        <div>
          <Button type="text">Clear all filters</Button>
          <Checkbox>Free rooms only</Checkbox>
        </div>
        <div className='tableContainer'>
          <Table columns={columns} dataSource={data} onChange={onChange} pagination={{ position: 'bottom' }} />
        </div>
      </Content>
    </Layout>
  );
}
export default Homepage;
