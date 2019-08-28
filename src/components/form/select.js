import React from 'react'

const Select = ({ name, value, onChange, options }) => (
  <select name={name} value={value} onChange={onChange}>
    {options.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
  </select>
)

export default Select
