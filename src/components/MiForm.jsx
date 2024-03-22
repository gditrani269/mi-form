import { useEffect, useState } from "react";

const invoiceInitial = [{
        miform: 'Cpu Intel i7',
        otrocampo: '499',
    },
    {
        miform: 'monitores',
        otrocampo: 'color',
    },  
];

export const MiForm = () => {

//defino un arreglo con los elementos iniciales en la pagina

    const [ elementos, setElementos ] = useState ([]);
//solo se ejecuta una vez cuando se crea el componente
    useEffect(() => {   
//        const data = getInvoice ();
//        console.log (invoice);
//        setInvoice (data);
        setElementos (invoiceInitial);
    }, []);

    const handlerAddItems = () => {
        console.log ("ca toy gato")
        console.log (elementos.map (({miform, otrocampo}) => ( console.log (miform))))
        console.log (otrocampoValue)
        setElementos ([...elementos, {
            miform: "counter",
            otrocampo: "product.trim ()", 
        }]);
    }


//para guardar el estadode cada input definimos
//para eso definimos el estado con el useState que devuelve un arreglo, entonces lo llamamos
//otroampoValue y le definimos el valor inicial en: useState ('')
    const [otrocampoValue, setOtrocampoValue] = useState ([]);



//con el evento onChange vamos a manejar la entrada de info en el form
//cuando cambia el valor ejecuta una funcion
//entonces ejecutamos una funcion que se pasa por argumento el objeto "event"
//el "event.target" tiene la info del campo, y el "event.target.value" el valor del campo

    return (
        <>
        <div>
            <form onSubmit={event => {
                event.preventDefault ();
                setElementos ([...elementos, {otrocampoValue}])
            }}>
                <input 
                    type="text" 
                    name="miform"
                    placeholder="agregaralgo" 
                    className="form-control m-4" onChange={event => {console.log (event.target.value)}}/>
                <input 
                    type="text" 
                    name="otrocampo"
                    placeholder="preview" 
                    className="form-control m-4" onChange={
                        event => {
                            console.log (event.target.value);
                            console.log (elementos.map.MiForm);
                            setOtrocampoValue (event.target.value);
                            handlerAddItems ();
                            }}/>
                <button type="submit" className="btn-primary">Crear</button>
            </form>

            <h4>{" My title"}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>{elementos.miform}</th>
                    </tr>
                </thead>

            </table>


        </div>
        </>
    )
}