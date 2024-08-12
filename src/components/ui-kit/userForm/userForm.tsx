import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./userForm.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../services/store";

const UserForm: FC = () => {
  const[nameInput, setNameInput] = useState<string>("");
  const[phoneInput, setPhoneInput] = useState<string>("");
  const[checkboxInput, setCheckboxInput] = useState<boolean>(false);
  const device = useSelector((state: RootState) => state.device);

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);    
  };

  const handlePhoneInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneInput(event.target.value);    
  };

  const handleCheckboxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput(event.target.checked);    
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className={clsx(styles.inputContainer, {
        [styles.inputContainerDesktop]: device.isDesktop,
        [styles.inputContainerTablet]: device.isTablet,
        [styles.inputContainerMobile]: device.isMobile,
        [styles.inputContainerSmallMobile]: device.isSmallMobile,
      })}>
        <input 
          type="text"
          name="nameInput"
          placeholder="Имя"
          value={nameInput}
          onChange={handleNameInputChange}
        />
        <input 
          type="text"
          name="phoneInput"
          placeholder="Телефон"
          value={phoneInput}
          onChange={handlePhoneInputChange}
        />
      </div>
      <div>
        <input 
          type="checkbox"
          name="checkboxInput"
          checked={checkboxInput}
          onChange={handleCheckboxInputChange}
        />
        <button type="submit">
          Отправить
        </button>
      </div>      
    </form>
  )
};

export default UserForm;