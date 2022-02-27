import { Select, Radio } from 'antd';
import Lok_Sabha from 'assets/data/up';
import React from 'react';
import './multiselect.css';
const { Option } = Select;

const MultiSelect = ({ data, value, index, callback }) => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const children = [];
  data.map((lk) => {
    children.push(<Option key={lk[index]}>{lk[value]}</Option>);
  });
  function handleChange(value) {
    callback(value);
  }

  return (
    <>
      <Select
        size={'large'}
        mode="multiple"
        placeholder="Please select"
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <br />
    </>
  );
};

export default MultiSelect;
