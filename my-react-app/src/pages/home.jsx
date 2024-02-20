import React, { useEffect, useState } from "react";
// import 'antd/dist/antd.css';
import "../scss/main.css";
import { useSelector, useDispatch } from "react-redux";
import {setFreeRoomsOnly, setFilters, resetFilters} from '../slice/filterSlice'
import { Layout, Button, Checkbox, Table} from 'antd';

import { Link } from "react-router-dom";
const columns = [
  { 
    title: 'Number', 
    dataIndex: 'number' 
  },
  { 
    title: 'Type', 
    dataIndex: 'type',
    filters: [ 
      { text: 'standard', value: 'standard' },
      { text: 'suite', value: 'suite' },
      { text: 'deluxe', value: 'deluxe' }
    ],
    onFilter: (value, record) => record.type === value
  },
  {
    title: 'Occupancy',
    dataIndex: 'occupancy',
    filters: [ 
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 }
    ],
   
    onFilter: (value, record) => record.occupancy === value  
  },
  {
    title: 'Price', 
    dataIndex: 'price', 
    sorter: (a, b) => a.price - b.price 
  },
  {
    title: 'Guest',
    dataIndex: 'guest',
    filters: [
      { text: 'Not empty', value: 'not_empty' },
      { text: 'Empty', value: 'empty' }
    ],
   
    onFilter: (value, record)=> {
      if (value === 'empty') {
        return !record.guest;
      } else if (value === 'not_empty') {
        return !!record.guest;
      }
    }
  },
  {
    title: '',
    dataIndex: 'id',
    render: (id) => (
      
      <Link to={`/roomPage/${id}`}>
        <Button type="primary">More Information</Button>
      </Link>
    ),
  }
];

const Homepage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.data.loading);
  const error = useSelector(state => state.data.error);
 
  const data = useSelector(state => state.data.data);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch({ type: 'getDatasFetch' })
  }, []);

  const freeRoomsOnly = useSelector(state => state.filter.freeRoomsOnly);
  const filters = useSelector(state => state.filter.filters);

  const handleFilterFreeRoom = (e) => {
    dispatch({ type: 'filter/setFreeRoomsOnly', payload: e.target.checked });
  };

  const resetAllFilters = () => {
    dispatch(resetFilters());
  };
  
  // Фильтруем данные на основе значения freeRoomsOnly
  const filteredData = data.filter(item => {
    if (freeRoomsOnly) {
      return !item.guest; // Возвращаем только свободные номера, если установлен флажок
    }

    // Возвращаем записи, которые соответствуют всем фильтрам
    return Object.keys(filters).every(key => {
      if (!filters[key]) return true;
      if (key === 'guest' && filters[key] === 'empty') {
        return !item[key];
      }
      if (key === 'guest' && filters[key] === 'not_empty') {
        return !!item[key];
      }
      return item[key] === filters[key];
    });
  });
  const { Content } = Layout;

  
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const onChange = (pagination, filters, sorter, extra) => {
    dispatch(setFilters(filters))
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Layout>
      <Content className="content">
        <div>
          <Button type="text" onClick={resetAllFilters}>Clear all filters</Button>
          <Checkbox onChange={handleFilterFreeRoom}>Free rooms only</Checkbox>
        </div>
        <div className='tableContainer'>
          <Table 
            columns={columns} 
            dataSource={data} 
            onChange={onChange}
            pagination={{ 
              current: page,
              pageSize: pageSize, 
              onChange: (page, pageSize) => { 
                setPage(page); 
                setPageSize(pageSize); 
              }
            }} 
            filters={filters} 
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Homepage;