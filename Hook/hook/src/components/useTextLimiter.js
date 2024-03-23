import { useState } from "react";

export const useTextLimiter = () => {
  const [isValid, setIsValid] = useState(true);

  const onTextChange = (e) => {
    const currentText = e.target.value;
    if (currentText.length > 2 && currentText.length <= 20) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return [isValid, onTextChange];
};
