import React, { createContext, useState } from "react";

export const MailContext = createContext();

const MailContextProvider = (props) => {
  const [messages, setMessages] = useState([
    { id: 1, title: "Birthday party", content: "Come and bring a bottle " },
    {
      id: 2,
      title: "This is a spam",
      content: "We want to sell you something",
    },
  ]);
  const deleteMessage = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
  };
  return (
    <MailContext.Provider value={{ messages, deleteMessage }}>
      {props.children}
    </MailContext.Provider>
  );
};

export default MailContextProvider;
