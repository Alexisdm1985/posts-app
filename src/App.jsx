

const App = () => {
    
    fetch('http://localhost:5000/post')
        .then(response => response.json())
        .then(data => console.log(data))



    return(
        <>
            <h1>App</h1>
            <div className="container">

                <form className="form-control" >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Filtrar por nombre"
                        className="form-control mb-3"
                        />

                    <button className="btn btn-dark mb-3"> Buscar</button>
                    

                <div>
                    {/* MUESTRA LOS DATOS */}
                    <table className="table mb-3">
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dbNombre</td>
                                <td>dbDescripcion</td>
                                <td>
                                    <button className="btn btn-secondary">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <input 
                        type="text"
                        name="postName"
                        placeholder="Ingrese nombre"
                        className="form-control mb-3 mt-3"
                    />
                    <textarea 
                        className="form-control mb-3"
                        name="descripcion"
                        placeholder="Ingrese descripcion"
                        rows="3"
                    />
                    <button className="btn btn-dark mb-3"> Crear</button>
                </form>
            </div>
            <div className="container">
                <p>jj</p>
            </div>
        </>
    )
}

export default App;