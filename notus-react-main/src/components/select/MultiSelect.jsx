import { Select, Radio } from 'antd';
import Lok_Sabha from 'assets/data/up';
import React from 'react';
import './multiselect.css';
const { Option } = Select;

const MultiSelect = ({ data, attribute, index, callback }) => {
  const [size, setSize] = React.useState('default');

  const children = [];
  data.map((lk) => {
    children.push(<Option key={lk[index]}>{lk[attribute]}</Option>);
  });
  function handleChange(value) {
    const nameArray = [];
    value.map((val) => {
      data.map((lk) => {
        if (lk[index] == val) {
          nameArray.push(lk[attribute]);
        }
      });
    });
    callback(value, nameArray);
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
