import React, { useEffect, useRef, useState } from "react";

const Pot = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState([]);
  const firstNameRef = useRef();
  const [showDetails, setShowDetail] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    const total = users.reduce((acc, curr) => (acc = acc + curr.amount), 0);
    setTotal(total);
  }, [users]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUSer = {
      id: Date.now(),
      firstName,
      lastName,
      amount: Number(amount),
    };
    setUsers([newUSer, ...users]);
    setFirstName("");
    setLastName("");
    setAmount(0.0);
    firstNameRef.current.focus();
  };

  const userSingularPlural = users.length > 1 ? "Users" : "User";

  return (
    <>
      <h2>Pot</h2>
      <div>
        Total : {total} € ({users.length} {userSingularPlural})
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder="First Name"
          ref={firstNameRef}
        />
        <br />
        <input
          type="text"
          value={lastName}
          onChange={handleLastName}
          placeholder="Last Name"
        />
        <br />
        <input
          type="text"
          value={amount}
          onChange={handleAmount}
          placeholder="Amount"
        />
        <br />
        <button>Ajouter</button>
      </form>
      <br />
      {users.length > 0 ? (
        users.map((usr) => (
          <div key={usr.id}>
            {usr.firstName} added {usr.amount} €
          </div>
        ))
      ) : (
        <h3>nobody added money yet</h3>
      )}
    </>
  );
};

export default Pot;
