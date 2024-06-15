import { useReducer } from 'react';
import { findAll } from './service/Service';


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

    case 'JSON': {
      return {
        name: action.nextName.Cantidad + " " + action.nextName.valor,
        age: state.age
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

  function handleButtonClick3 (e) {
    console.log ("handleButtonClick3"); 
    const jRta = {
      "MOLA": {
          "valor": "20500.0",
          "Cantidad": "441",
          "Saldo en pesos": "9040500.0",
          "Saldo en dolares": "7062.89"
      },
      "MSFT": {
          "valor": "18730.0",
          "Cantidad": "616",
          "Saldo en pesos": "1.153768E7",
          "Saldo en dolares": "9013.81"
      },
      "BMA": {
          "valor": "8006.0",
          "Cantidad": "2050",
          "Saldo en pesos": "1.64123E7",
          "Saldo en dolares": "12822.11"
      },
      "ADGO": {
          "valor": "11480.0",
          "Cantidad": "120",
          "Saldo en pesos": "1377600.0",
          "Saldo en dolares": "1076.25"
      },
      "ALUA": {
          "valor": "891.0",
          "Cantidad": "1850",
          "Saldo en pesos": "1648350.0",
          "Saldo en dolares": "1287.77"
      },
      "GGAL": {
          "valor": "4321.0",
          "Cantidad": "600",
          "Saldo en pesos": "2592600.0",
          "Saldo en dolares": "2025.47"
      },
      "dolar": "1280",
      "total": "33288.3046875"
  };//findAll ();
    console.log (jRta.ADGO);
    dispatch({
      type: 'JSON',
      nextName: jRta.ADGO
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

      <button onClick={handleButtonClick3}>
        llamada web
      </button>

      <p>Hola, {state.name}. Tú tienes {state.age}.</p>
    </>
  );
}