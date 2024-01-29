import React, { useEffect } from "react";
import "../scss/main.css";
import { connect ,useDispatch} from "react-redux";
import { fetchData } from '../reduxSaga/dataSaga'
import { getDataStart, getDataSuccess, getDataFailure,openModalRoomsInfo } from '../slice/roomsDataSlice'
import { Layout, Button, Checkbox, Table } from 'antd';

const Homepage = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { Content } = Layout;
  const dispatch=useDispatch();
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
        <Button type="primary" onClick={() => dispatch(openModalRoomsInfo(id))}>More Information</Button>
      ),
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
const mapStateToProps = state => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
});
const mapDispatchToProps = {
  fetchData,
  getDataStart,
  getDataSuccess,
  getDataFailure,
};

// Обертываем компонент Homepage в connect и передаем ему mapStateToProps и mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
