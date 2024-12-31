import { useState } from "react";

export const CounterApp = () => {

    // Estado actual
    const [counter, setCounter] = useState(10);

    // Incrementa el valor del estado
    const Incrementar = () => {
        setCounter( counter + 1 );
    };

    // Disminuye el valor del estado
    const Disminuir = () => {
        if( counter < 1) return;
        setCounter( counter - 1 );
    };
    
    // Resetea el valor del estado actual
    const Reset = () => {
        setCounter(0);
    };

  return (
    <>
        <h1>CounterApp</h1>
        <hr />
        <h3>Counter : { counter } </h3>
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <button className="btn btn-primary" onClick={ Incrementar }>
                Incrementar
            </button>
            <br />
            <button className="btn btn-primary" onClick={ Disminuir }>
                Disminuir
            </button>
            <br />
            <button className="btn btn-primary" onClick={ Reset }>
                Reset
            </button>
        </div>

    </>
  )
}
