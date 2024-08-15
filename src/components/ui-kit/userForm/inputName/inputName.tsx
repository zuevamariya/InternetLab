import { ChangeEvent, FC, useState } from "react";
import styles from "./inputName.module.scss";
import {ReactComponent as InputOk} from "../../../../assets/images/input_ok.svg";
import {ReactComponent as InputError} from "../../../../assets/images/input_error.svg";
import clsx from "clsx";
import { RootState, useSelector } from "../../../../services/store";

const InputName: FC = () => {
  const[nameInput, setNameInput] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isEmptyInput = nameInput.length == 0;
  const isFullInput = nameInput.length !== 0;
  const isInput = isFullInput || isFocused;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameInput(value);

    if (value.length < 2 && value.length !== 0) {
      setNameError("Имя должно содержать не менее 2 символов");
    } else {
      setNameError("");
    }   
  };

  return(
    <div className={styles.container}>
      <div className={clsx(styles.inputContainer, {
        [styles.inputNotFull]: !isInput,
        [styles.inputFull]: isInput,
        [styles.inputError]: nameError,
        [styles.inputEmpty]: isEmptyInput,
      })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <label
          className={clsx({
            [styles.label]: isInput,
        })}>
          Имя
        </label>
        <input 
          type="text"
          name="nameInput"
          value={nameInput}
          onChange={handleNameInputChange}
          required
        /> 
        <InputError className={clsx(styles.validationIcon, {
          [styles.hidden]: !nameError || isEmptyInput,
        })} />
        <InputOk className={clsx(styles.validationIcon, {
          [styles.hidden]: nameError || isEmptyInput,
        })} />
      </div>
      {(isInput && nameError) && (<span>
        {nameError}
      </span>)}
    </div>
  )
};

export default InputName;