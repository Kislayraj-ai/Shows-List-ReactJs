import React, { useState, useContext } from 'react';

const showContext = React.createContext({
  showTypeInput: '',
  setShowTypeInput: '',
});

export const ShowTypeProvider = (props) => {
  const [showTypeInput, setShowTypeInput] = useState();

  return (
    <showContext.Provider value={{ showTypeInput, setShowTypeInput }}>
      {props.children}
    </showContext.Provider>
  );
};

export const useValue = () => {
  return useContext(showContext);
};
