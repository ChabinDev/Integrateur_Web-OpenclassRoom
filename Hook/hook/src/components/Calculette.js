import React, { useReducer, useState } from 'react'

// action { type: 'ADD'}, a:1; b:2}
// state { a:0, b:0, total: 0, opération: 'ADD' }
const calculReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {a:action, b:action, total: action.a + action.b, operation: 'ADD'};
        case 'MULTIPLY':
            return {a:action, b:action, total: action.a * action.b, operation: 'MULT'};
        case 'DIVIDE':
            return {a:action, b:action, total: action.a / action.b, operation: 'DIV'};
    }

}
const Calculette = () => {
    const [a, setA] = useState(0);
    const [b, setA] = useState(0);
    const [state, dispatch] = useReducer(calculReducer, { a, b });

    const changeA = () => {
        setA(Number(e.target.value));
    };

    const changeB = () => {
        setB(Number(e.target.value));
    }

  return (
      <div>
          <input type='text' value={a} onChange={changeA} />
          <input type='text' value={b} onChange={changeB} />
      </div>
  )
}

export default Calculette