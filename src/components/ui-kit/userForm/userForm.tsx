import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./userForm.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../services/store";
import InputName from "./inputName/inputName";

const UserForm: FC = () => {
  const[phoneInput, setPhoneInput] = useState<string>("");
  const[checkboxInput, setCheckboxInput] = useState<boolean>(false);
  const device = useSelector((state: RootState) => state.device);
  const [phoneError, setPhoneError] = useState<string>("");

  const handlePhoneInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneInput(value);
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
      setPhoneError("Телефон должен содержать 10 цифр");
    } else {
      setPhoneError("");
    }
  };

  const handleCheckboxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput(event.target.checked);    
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return(
    <form 
      onSubmit={handleSubmit}
      className={clsx(styles.form, {
        [styles.formDesktop]: device.isDesktop,
        [styles.formTablet]: device.isTablet,
        [styles.formMobile]: device.isMobile,
        [styles.formSmallMobile]: device.isSmallMobile
      })}>
      <InputName />
      <input 
        type="text"
        name="phoneInput"
        placeholder="Телефон"
        value={phoneInput}
        onChange={handlePhoneInputChange}
      />
      <div className={styles.checkboxContainer}>
        <input 
          id="checkboxInput"
          type="checkbox"
          name="checkboxInput"
          checked={checkboxInput}
          onChange={handleCheckboxInputChange}
        />
        <label htmlFor="checkboxInput">
          Согласен, отказываюсь
        </label>
      </div>
      <button type="submit">
        Отправить
      </button>    
    </form>
  )
};

export default UserForm;