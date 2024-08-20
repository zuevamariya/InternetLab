import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { submitForm } from "./form-action";

export type TFormData = {
  inputName: string;
  inputTel: string;
  inputCheckbox: boolean;
};

type TForm = TFormData & {
  buttonDisabled: boolean;
  error: string | null;
};

const initialState: TForm = {
  inputName: "",
  inputTel: "",
  inputCheckbox: false,
  buttonDisabled: true,
  error: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setInputName(state, action: PayloadAction<string>) {
      state.inputName = action.payload;
    },
    setInputTel(state, action: PayloadAction<string>) {
      state.inputTel = action.payload;
    },
    setInputCheckbox(state, action: PayloadAction<boolean>) {
      state.inputCheckbox = action.payload;
    },
  },
  selectors: {
    getInputName: (state) => state.inputName,
    getInputTel: (state) => state.inputTel,
    getInputCheckbox: (state) => state.inputCheckbox,
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.buttonDisabled = true;
      state.error = null;
    }),
    builder.addCase(submitForm.fulfilled, (state) => {
      state.inputName = "";
      state.inputTel = "";
      state.inputCheckbox = false;
    }),
    builder.addCase(submitForm.rejected, (state, action) => {
      state.error = action.error.message || "Ошибка при отправке формы";
    })
  }
});

export default formSlice.reducer;

export const {setInputName, setInputTel, setInputCheckbox} = formSlice.actions;

export const {getInputName, getInputTel, getInputCheckbox} = formSlice.selectors;