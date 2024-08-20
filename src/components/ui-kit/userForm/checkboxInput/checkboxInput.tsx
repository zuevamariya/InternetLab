import { ChangeEvent, FC, useState } from "react";
import styles from "./checkboxInput.module.scss";
import { useDispatch } from "../../../../services/store";
import { setInputCheckbox } from "../../../../services/form/form-slice";

type CheckboxInputProps = {
  id: string;
  type: string;
  name: string;
  label: string;
};

const CheckboxInput: FC<CheckboxInputProps> = ({ id, type, name, label }) => {
  const[checkboxInput, setCheckboxInput] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleCheckboxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setCheckboxInput(value);
    dispatch(setInputCheckbox(value));
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