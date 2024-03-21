import React, { useEffect, useRef, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [message, setMessage] = useState("");
  const loginRef = useRef();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setLogin(e.target.value);
  };

  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      setMessage(`Bienvenue ${login}`);
    }
  };

  return (
    <>
      <input
        type="text"
        ref={loginRef}
        value={login}
        onChange={handleChange}
        onKeyUp={handleKeyup}
        placeholder="Your Login"
      />
      <br />
      {message}
    </>
  );
};

export default Login;
