import React, {useState} from "react";
const Item = () => {


    let nombre = "Fabián González";
    //let caso = "Tienda BTM" ;

    const [caso, setcaso] = useState ("Servicio")

    const cambiarArticulo = (nuevoArticulo) => {
        setcaso("Servicio Completo")
    }

    return <div>
        <h1>Tienda BTM Ciclimsmo de Montaña</h1>
        <p>Mi nombre es:{nombre}</p>
        <p>quiero hacer:{caso}</p>

        <button>Servicio{e => cambiarArticulo("reparacion")} </button>
        
    </div>
}

export default Item; 
