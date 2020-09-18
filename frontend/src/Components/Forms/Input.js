import React from 'react';
import styles from './Input.module.css';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  maxLength,
  max,
  pattern,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        maxLength={maxLength}
        max={max}
        pattern={pattern}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
