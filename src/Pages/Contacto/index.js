import React, { useEffect, useState } from "react";

const Contacto = () => {
    const [name, setName] = useState(null);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto') //hacemos la peticion get
            .then(res => res.json()) //cuando hayamos terminado (then) parsamos a json la respuesta de la peticion
            .then(res => setName(res.name)) //cuando hayamos terminado (then) actualizamoss el estado nombre        
    }, []); //debemos usar los [] para que la peticion solo se ejecute cuando el componente se monte. de lo  contrario se ejecutaria ne cada render., si ponemos una variable de estado dentro de los [], la peticion se ejcutara cada vez que esa variable cambie.

    return <p>{name}</p>;
};

export default Contacto;
//Esto es usando el fetch de js, usando el de axios que es más limpio seria ver contacto 2