import { createAsyncThunk } from "@reduxjs/toolkit";
import { TFormData } from "./form-slice";

const submitUserForm = (data: TFormData) =>
  fetch(`${URL}/form/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Ошибка при отправке формы");
      }
      return res.json();
    });

export const submitForm = createAsyncThunk(
  "form/submitForm",
  async({ inputName, inputTel, inputCheckbox }: TFormData ) => {
    const response = await submitUserForm({ inputName, inputTel, inputCheckbox });
    return response;
  }
);