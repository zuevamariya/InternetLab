import { ChangeEvent, FC, useState } from "react";
import styles from "./textInput.module.scss";
import {ReactComponent as InputOk} from "../../../../assets/images/input_ok.svg";
import {ReactComponent as InputError} from "../../../../assets/images/input_error.svg";
import clsx from "clsx";

type TextInputProps = {
  type: string;
  name: string;
  label: string;
  message: string;
  checkInput: (input: string) => boolean;
};

const TextInput: FC<TextInputProps> = ({ type, name, label, message, checkInput }) => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  
  const isEmptyInput = input.length == 0;
  const isFullInput = input.length !== 0;
  const isInput = isFullInput || isFocused;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);

    if (!checkInput(value)) {
      setError(message);
    } else {
      setError("");
    }   
  };

  return(
    <div className={styles.container}>
      <div className={clsx(styles.inputContainer, {
        [styles.inputNotFull]: !isInput,
        [styles.inputFull]: isInput,
        [styles.inputError]: error,
        [styles.inputEmpty]: isEmptyInput,
      })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <label
          className={clsx({
            [styles.label]: isInput,
        })}>
          {label}
        </label>
        <input 
          type={type}
          name={name}
          value={input}
          onChange={handleNameInputChange}
          required
        /> 
        <InputError className={clsx(styles.validationIcon, {
          [styles.hidden]: !error || isEmptyInput,
        })} />
        <InputOk className={clsx(styles.validationIcon, {
          [styles.hidden]: error || isEmptyInput,
        })} />
      </div>
      {(isInput && error) && (
      <span>
        {error}
      </span>)}
    </div>
  )
};

export default TextInput;