// CustomInput.js
import React, { useState } from 'react';
import style from './style.module.css'

const CustomInput = ({ label, name, type, value, onChange, onBlur, required }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleBlur = () => {
    if (required && value.trim() === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    if (onBlur) {
      onBlur();
    }
  };

  const handleChange = (event) => {
    if (isEmpty && event.target.value.trim() !== '') {
      setIsEmpty(false);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${isEmpty ? 'is-invalid' : ''} ${style.input}`}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />
      {isEmpty && (
        <div className="invalid-feedback">This field is required.</div>
      )}
    </div>
  );
};

export default CustomInput;
