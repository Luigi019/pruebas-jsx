import React, { useEffect, useState } from "react";
import axios from "axios";

const Contacto = () => {
    const [name, setName] = useState(null);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //hacemos la peticion get
            .then(res => setName(res.data.name)) //cuando hayamos terminado (then) actualizamoss el estado nombre        
    }, []); //debemos usar los [] para que la peticion solo se ejecute cuando el componente se monte. de lo  contrario se ejecutaria ne cada render., si ponemos una variable de estado dentro de los [], la peticion se ejcutara cada vez que esa variable cambie.

    return <p>{name}</p>;
};

export default Contacto;
//Esto es usando el Axios
//npm i axios