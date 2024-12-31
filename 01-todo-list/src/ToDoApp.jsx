import { useState } from "react"
import { ToDoItems } from "./components/ToDoItems";

export const ToDoApp = () => {
    // Para el manejo de los valores del arreglo
    const [ todo, setTodo] = useState([]);
    // Para el manejo del valor ingresado por el usuario
    const [ valor, setValor ] = useState('');

    // Funcion que elimina valores del estado actual
    const deleteTodo = ( item ) => {
        // copiaTodo es el nuevo arreglo filtrado
        const copiaTodo = todo.filter( (a) => a !== item);
        // actualiza el valor del estado
        setTodo(copiaTodo);
    };


    const handleSubmit = (event) => {
        // Evita la recargar del navegador hacia la pagina
        event.preventDefault();
        // Evalua si los caracteres ingresados por el usuario
        // son mayoes a 1
        if(valor.trim().length <= 1) return;
        // Guarda el valor ingresado por el usuario a nuestro estado
        // Actualiza el estado
        setTodo([...todo, valor]);
        // Limpia la caja de texto al mandar un todo
        setValor('');
    };
    
  return (
    <>
        <h1 className="todoapp">To Do App</h1>

        <form 
            className="form-control d-flex pt-3" 
            style={{ height:'80vh'}}
            onSubmit={ handleSubmit }
        >
            <div className="col-6" style={{ marginRight: '1rem'}}>
                <input 
                    style={{ width: '100%', gap: '1rem',  borderRadius: '10px'}}
                    type="text" 
                    placeholder="Ejemplo: Comprar cafe"
                    value={ valor }
                    // Cuando el usuario mande la informacion actualizaremos el 
                    // estado(valor) mandando los datos ingresados por el
                    //  usuario en el inpuText
                    onChange={ (event) => setValor(event.target.value) }
                />

                <button className="btn btn-danger m-3">Add</button>

            </div>

            <div className="col-6" style={{ paddingRight: '1rem'}}>
                <h4
                    style={{ marginBottom: '3rem'}}
                >Pendings: { todo.length }</h4>
                <ul className="col-1 todo-list p-0 todoItem">
                    {
                        todo.map( (todo) => (
                            <ToDoItems todo={todo} deleteTodo={deleteTodo} />
                        ))
                    }
                </ul>
            </div>
        </form>
    </>
  )
}
