import React, {createContext, useState, useContext} from 'react';

const FormStateContext = createContext();

export const FormStateProvider = ({children}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: null,
  });

  const updatedData = data => {
    setFormData(prev => ({...prev, ...data}));
  };

  return(
    <FormStateContext.Provider value={{formData, updatedData}}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useFormDataState = () => useContext(FormStateContext);
