import React, { useEffect, useState } from "react";
import { Layout, Button, Checkbox, Table } from 'antd'

import { useSelector, useDispatch } from "react-redux";
import { setFilters, resetFilters } from '../slice/filterSlice'

import { Link } from "react-router-dom";
import "../scss/main.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.data.loading);
  const error = useSelector(state => state.data.error);
  const data = useSelector(state => state.data.data);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filteredInfo, setFilteredInfo] = useState({});

  const columns = [
    { key:'number',
      title: 'Number', 
      dataIndex: 'number' ,
      style: {with: '20%'},
    },
    { key:'type',
      title: 'Type', 
      dataIndex: 'type',
      filters: [ 
        { text: 'standard', value: 'standard' },
        { text: 'suite', value: 'suite' },
        { text: 'deluxe', value: 'deluxe' }
      ],
      // filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type === value
    },
    {key:'occupancy',
      title: 'Occupancy',
      dataIndex: 'occupancy',
      filters: [ 
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 }
      ],
      // filteredValue: filteredInfo.occupancy || null,
      onFilter: (value, record) => record.occupancy === value  
    },
    {key:'price',
      title: 'Price', 
      dataIndex: 'price', 
      sorter: (a, b) => a.price - b.price 
    },
    {key:'guest',
      title: 'Guest',
      dataIndex: 'guest',
      filters: [
        { text: 'Not empty', value: 'not_empty' },
        { text: 'Empty', value: 'empty' }
      ],
      // filteredValue: filteredInfo.guest || null,
      onFilter: (value, record)=> {
        if (value === 'empty') {
          return !record.guest;
        } else if (value === 'not_empty') {
          return !!record.guest;
        }
      }
    },
    {key:'id',
      title: '',
      dataIndex: 'id',
      render: (id) => (
        
        <Link to={`/roomPage/${id}`}>
          <Button type="primary">More Information</Button>
        </Link>
      ),
      style: { backgroundColor: 'lightblue' }
    
    }
  ];
  useEffect(() => {
    dispatch({ type: 'getDatasFetch' });
  }, [dispatch]);

  const handleFilterFreeRoom = (e) => {
    dispatch({ type: 'filter/setFreeRoomsOnly', payload: e.target.checked });
  };

  const resetAllFilters = () => {
    dispatch(resetFilters());
    dispatch({ type: "filter/setFreeRoomsOnly", payload: false });
    setFilteredInfo({}); // сброс фильтров
  };

  const onChange = (pagination, filters, sorter, extra) => {
    setFilteredInfo(filters); // сохранение фильтров
    dispatch(setFilters(filters)); // отправка фильтров в Redux хранилище
    console.log('params', pagination, filters, sorter, extra);
  };

  // const filteredDataToShow = data.filter(item => {
  //   return Object.keys(filteredInfo).every(key => {
  //     if (!filteredInfo[key]) return true;
  //     return item[key] === filteredInfo[key];
  //   });
  // });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const datas=data.map(items=>({...items, key:items.id}))
  return (
      <Layout >
      <Layout.Content className="antd-content">
        <div className="antd-content-header-block">
          <Button type="primary" onClick={resetAllFilters}>Clear all filters</Button>
          <Checkbox onChange={handleFilterFreeRoom}>Free rooms only</Checkbox>
        </div>
        <div className='antd-table-container' key={data.id}>
        
          <Table className="antd-table"
          // rowStyle={{ height: '50px' }}
            columns={columns} 
            dataSource={datas} 
            onChange={onChange}
            pagination={{ 
              current: page,
              pageSize: pageSize, 
              onChange: (page, pageSize) => { 
                setPage(page); 
                setPageSize(pageSize); 
              }
            }} 
            // filters={filters} 
          />
     
        </div>
      </Layout.Content>
    </Layout>

  );
}


export default Homepage;