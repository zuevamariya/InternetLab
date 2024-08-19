import { ChangeEvent, FC, useState } from "react";
import styles from "./checkboxInput.module.scss";

type CheckboxInputProps = {
  id: string;
  type: string;
  name: string;
  label: string;
};

const CheckboxInput: FC<CheckboxInputProps> = ({ id, type, name, label }) => {
  const[checkboxInput, setCheckboxInput] = useState<boolean>(false);

  const handleCheckboxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput(event.target.checked);    
  };

  return(
    <div className={styles.checkboxContainer}>
        <input 
          id={id}
          type={type}
          name={name}
          checked={checkboxInput}
          onChange={handleCheckboxInputChange}
          required
        />
        <label htmlFor={id}>
          {label}
        </label>
      </div>
  )
};

export default CheckboxInput;