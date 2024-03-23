import { useState } from "react";

const useCustomLocalStorage = (key) => {
  const [valueInStorage, setValueInStorage] = useState("[]");
  const updateStorage = (newValueToStore) => {
    if (newValueToStore === "[]" && localStorage.getItem(key)) {
      setValueInStorage(JSON.parse(localStorage.getItem(key)));
    } else {
      localStorage.setItem(key, JSON.stringify(newValueToStore));
    }
  };
  return [valueInStorage, updateStorage];
};

export default useCustomLocalStorage;
