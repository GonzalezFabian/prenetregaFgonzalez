const SegundoCompo = () => {

    let articulos = [
            "Cuadros",
            "cadenas",
            "frenos",
         
    ];

    return<div>
        <h1>Servicios </h1>
        <div>
        <ul>
<h3>
            <li>Cuadros BTM</li>
            <li>Frenos Shimano</li>
            <li>Cadena Santa Cruz</li>
            <li>Treck Ciclismo</li>
            <li>Más</li>
            </h3>
        </ul>
        <h2>Artículos</h2>
        <ul>
            {
                articulos.map( (articulos, indice) => {
                    return (<li key = {indice}>
                        {
                            articulos
                        }
                    </li>)
                })
            }
        </ul>
        </div>
        
    </div>
    
}

export default SegundoCompo;
