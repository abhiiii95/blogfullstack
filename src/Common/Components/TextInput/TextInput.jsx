import React from "react";
import styles from "./textInput.module.scss";

const TextInput = ({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`${styles.formTextInput} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
