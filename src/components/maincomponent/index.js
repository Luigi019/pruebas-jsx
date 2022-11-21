import React from 'react';



export const MyComponent = props => <div>
    <h1 className='nombreClase'> Exportandooooo {props.prop1}</h1>


</div>;

export const MyComponent2 = ({ otramanera, dehacerprops, children }) => <div>
    <h1 className='nombreClase'> Exportandooooo ||||||||||||||| {otramanera} {dehacerprops}</h1>

    <br />
    {children}
</div>;

export default _ => <div>
    <h1 className='nombreClase'> Exportandooooo ||1111|||||||||||</h1>
</div>;




