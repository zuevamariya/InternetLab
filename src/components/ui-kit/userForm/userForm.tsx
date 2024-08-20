import { FC, FormEvent } from "react";
import styles from "./userForm.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState, useDispatch } from "../../../services/store";
import TextInput from "./textInput/textInput";
import CheckboxInput from "./checkboxInput/checkboxInput";
import Button from "../button/button";
import { getInputCheckbox, getInputName, getInputTel } from "../../../services/form/form-slice";
import { submitForm } from "../../../services/form/form-action";

const UserForm: FC = () => {
  const device = useSelector((state: RootState) => state.device);
  const dispatch = useDispatch();

  function validateName(input: string) {
    const isValidFormat = /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ]*$/.test(input);

    const isValidLength =input.length >= 2;

    return isValidFormat && isValidLength;
  };

  function validateTel(input: string) {
    const cleaned = input.replace(/[\s()-]/g, '');

    const phoneRegex = /^(\+7|8)?\d{10}$/;

    return phoneRegex.test(cleaned);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      inputName: useSelector(getInputName),
      inputTel: useSelector(getInputTel),
      inputCheckbox: useSelector(getInputCheckbox),
    };
    dispatch(submitForm(formData));
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
      <TextInput 
        type={"text"}
        name={"nameInput"}
        label={"Имя"} 
        message={`Имя должно состоять  только из букв, 
          содержать не менее 2 символов 
          и начинаться с большой буквы`}
        checkInput={validateName}/>
      <TextInput
        type={"tel"}
        name={"telInput"}
        label={"Телефон"}
        message={`Номер телефона формата +7(XXX)-XXX-XX-XX
          или 8(XXX)-XXX-XX-XX`}
        checkInput={validateTel}
      />
      <CheckboxInput
        id={"checkboxInput"}
        type={"checkbox"}
        name={"checkboxInput"}
        label={"Я соглашаюсь"}
      />
      <Button text={"Отправить"} type={"submit"} disabled={false}/> 
    </form>
  )
};

export default UserForm;