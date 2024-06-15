import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }

    case 'incremented_age2': {
      return {
        ...state,
        age: state.age + 2
      };
    }

  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export const Red = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log (state);
  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleButtonClick2() {
    dispatch({ type: 'incremented_age2' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Incrementar edad
      </button>
      <button onClick={handleButtonClick2}>
        Incrementar edad2
      </button>

      <p>Hola, {state.name}. Tú tienes {state.age}.</p>
    </>
  );
}