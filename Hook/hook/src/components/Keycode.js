import React, { useEffect, useState } from "react";

const Keycode = () => {
  const [keyCode, SetKeyCode] = useState("");
  const [key, setKey] = useState("");
  const getKeycode = (e) => {
    console.log(e);
    SetKeyCode(e.keyCode);
    setKey(e.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", getKeycode);
    return () => document.removeEventListener("keyup", getKeycode);
  }, []);

  return (
    <>
      <input type="text" />
      {key.length === 0 ? (
        <div>Press any keyboard key</div>
      ) : (
        <div>Key is '{key}'</div>
      )}
      <div className="key-code">{keyCode}</div>
    </>
  );
};

export default Keycode;
