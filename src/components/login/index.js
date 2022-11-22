import React, { useRef, useContext } from "react";
import { AppContext } from '../../application/provider';

const LogIn = () => {
    let nom = useRef(null);
    let surname = useRef(null);

    const [state, setState] = useContext(AppContext);

    return (
        <div>

            <input type="text" className="form-control mb-2 mr-sm-2" ref={nom}
                onChange={() => { setState({ ...state, name: nom.current.value }) }} />
            <input type="text" className="form-control mb-2 mr-sm-2" ref={surname}
                onChange={() => { setState({ ...state, surname: surname.current.value }) }} />
        </div>


    );
}
export default LogIn;