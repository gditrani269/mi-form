import { useState } from "react";

export const MiForm2 = () => {

    const [inData, setInData ] = useState ({
        email: "",
        password: "",
    });

    const [values, setValues] = useState({
        email: "",
        password: "",
      });
      
      const handleChange = (evt) => {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
       console.log ("evt: ", evt);
        const { target } = evt;
        console.log ("target: ", target)
        const { name, value } = target;
        console.log ("name: ", name , "value: ", value);
    
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
          ...values,
          [name]: value,
        };
    
        // Sincroniza el estado de nuevo
        setValues(newValues);
        console.log (values);
      }

    const handleSubmit = (evt) => {
        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        evt.preventDefault();
        console.log ("ca ta");
        const { target } = evt;
        console.log ("target: ", target)
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
          };
        setInData(newValues);
  

        console.log (inData);
        // Aquí puedes usar values para enviar la información
      }

    return (
        <>
            <h1>Simple form</h1>
            <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
        </>
    )
}