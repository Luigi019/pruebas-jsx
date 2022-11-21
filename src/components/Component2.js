import React from 'react';

class MiComponente extends React.Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamón serrano'],
            calorias: 500
        };

        return (
            <React.Fragment>
                <h1>Componente Normal</h1>
                <br />
                <p>Usando React.Fragment podemos englobar varias etiquetas en un solo componente y es mejor practica que un div</p>

                <p>{'Receta: ' + receta.nombre}</p>
                <p>{'Calorias: ' + receta.calorias}</p>
                <p>Ingredientes: </p>
                <ol className='list-group'>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (

                                <li key={i} className="list-group-item">
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr />
            </React.Fragment>
            //tambien podemos usar funciones un pcoo mas complicadas sin necesidad de hacer otro componente, revisa las funciones de receta

        );
    }
}



export default MiComponente;