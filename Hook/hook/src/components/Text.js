import React from "react";
import { useTextLimiter } from "./useTextLimiter";

const Text = () => {
  const [isValid, onTextChange] = useTextLimiter();
  return (
    <>
      <input type="text" placeholder="Enter uou Name" onChange={onTextChange} />
      {!isValid && (
        <div className="input-size-error">
          Please enter a text 3 and 20 caracters
        </div>
      )}
    </>
  );
};

export default Text;
