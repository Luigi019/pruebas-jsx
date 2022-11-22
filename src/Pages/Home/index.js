import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';
import { useRef, useState, useEffect } from 'react';
//como llamar componentes fácilmente
import MiComponente from '../../components/Component2';
import Pordefecto, { MyComponent, MyComponent2 } from '../../components/maincomponent';
//para poder usar imagenes en react es necesario importarlas previamente
import imagenes from '../../assets/imagenes';
import { Cuadrado, Rectangulo, Component, Input, RedText, BlueText } from '../../styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {


    //podemos definir constantes que contengan tanto operaciones matematicas, codigo html incrustado como etiquetas y mas
    const html = <div>
        <h1 className='nombreClase'> Podemos poner aqui cualquier cosa</h1>
    </div>;
    const btn = () => alert("pulsaste el boton")
    const multiplicar = (a, b) => a * b
    //podemos importar usando useRef para extraer los datos de formularios e imprimirlos en pantallas
    //declaramos el ref
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    //luego lo importamos al alert o directamente al html 
    const makethings = () => {
        alert(inputRef.current.value);
        resultRef.current.innerHTML = inputRef.current.value;
    }
    //podemos cambiar el estado de un objeto haciendo uso de useState (tambien le damos un valor por defecto en este caso es 8)
    const [a, setA] = useState(8);
    //aqui estamos declarando el valor por el cual va a cambiar el valor por defecto
    const usarState = () => {
        setA(4)
    }
    const [txt, setTxt] = useState('');
    //también usando el useEffect podemos desencadenar unas ciertas funciones cuando se hace el cambio de estado
    useEffect(() => {
        alert("quieren aprender react?");
    }, [a])


    const textChange = (e) => {
        setTxt(e.target.value);
    }
    //condicionales son mucho mas sencillo que otros lenguajes, es poner la condicion y decir si se cumple o no
    const condicion = true;
    return (

        <div className='container mx-4 my-4 App mt-5'>
            <nav className="navbar navbar-expand-lg bg-light sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/crud">Crud</a>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <span>{html}</span>
            <h1>{multiplicar(3, 5)}</h1>
            <input type="text" ref={inputRef} /> <br />
            <div ref={resultRef}></div>
            <button onClick={btn}>Dame click</button>  <br />
            <button onClick={makethings}>hacer cosas</button>



            <section className='components'>
                <MiComponente />
            </section>
            <br />


            <h1>{a}</h1>
            <br />

            <input type="text" onChange={e => textChange(e)} />
            {txt}
            <br />
            <button onClick={usarState}>Pulsa para cambiar</button><br />

            <br />
            <MyComponent prop1=" lets do it" />
            <MyComponent2 otramanera="otramanera" dehacerprops="dehacerprops" >adentro de esta importacion transformada en etiqueta se puede importar a los padres</MyComponent2>
            <Pordefecto />
            {/* en el primer caso del condicional estamos usando solo && porque significa si es verdadero el condicional imprime esto 
    en el segundo caso estamos diciendo si se cumple imprimen el hola si no se cumple imprime el adios */}
            {condicion && <p>Hola</p>}
            {condicion ? <p>Hola</p> : <p>adios</p>}
            {/*luego simplemente llamamos a la imagen con un img sencillo de html*/}
            <img src={imagenes.img2} alt="gato" />
            {/* Para hacer uso de los styled components como todo se hace la impoprtacion y luego se llama 
      como si fuera un componente comun y se le asigna una clase que lo represemte*/}
            <Rectangulo className="rectangulo" />
            <Cuadrado className="cuadrado" />
            <Component isRight={true}> xddxxdxddxxdxdxdxde</Component>
            <Input />




            <RedText> Red Background </RedText>
            <BlueText>
                Blue Background
            </BlueText>

            <br />
        </div>

    );


}

export default Home;
//paquetes instalados
//npm i bootstrap reactstrap Boostrap
//npm react-router estos dos son para rutas
//npm react-router-dom