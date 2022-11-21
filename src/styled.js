import styled, { css, createGlobalStyle } from "styled-components";

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Cuadrado = styled.div`
    width: 70px;
    height: 70px;
    background-color: pink;
    /*aqui usamos cssas y usamos elementos anidados podemos añadir todos los demas efectos usando el &: y el efecto*/
    &:hover{
        background-color: paleturquoise;

        ${mobile} {
            background-color: blueviolet;
        }
    }

`;
export const GlobalStyle = createGlobalStyle`
        Body{
            background-color: silver;
            margin: 0;
        }

`;
export const Rectangulo = styled(Cuadrado)`
width: 200px;
&:hover{
    background-color: brown;
}

`;
/* aqui estamos diciendo que si el componente tiene el isRight sera verde de lo contrario sera rojo */
export const Component = styled.div`
background-color: ${({ isRight }) => isRight ? 'green' : 'red'} ;

`;
//asi logramos modificar los atributos del input en este caso le dijimos que el tipo era password y que su maxlength era de 5
export const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.MyMaxLength || 5,
}))`
color: blue;
`;

//asi es la manera en la que se puede reutilizar un estilo
const BigText = css`
font-size: 3rem;
`;

export const RedText = styled.p`
    background: Red;
    ${BigText};
`;
export const BlueText = styled.p`
    background: Blue;
    ${BigText};
`;
