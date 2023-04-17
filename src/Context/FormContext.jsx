import { createContext, useState } from "react";

export const FormContext = createContext({
  formData: {},
  setFormData: () => null,
});

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSetFormData = (value) => setFormData(value);

  const value = { formData, handleSetFormData };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
