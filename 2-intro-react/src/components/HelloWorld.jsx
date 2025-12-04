import PropTypes from 'prop-types';

export const HelloWorld = ({user, id, title,numero,direccion}) => {
    
    console.log(title)

    return (
            <>
                <h1>{title}</h1>
                {/*Usando props*/}
                {/*<div>que tal, {props.user}!! con el id {props.id}</div>*/}
                {/*Usando destructuring*/}
                <div>que tal, {user}!! con el id {id}</div>
                <div>numero: {numero + 3}</div>
                <div>direccion: {direccion.calle}, {direccion.id}</div>
            </>

    );
};

HelloWorld.propTypes = {
    numero: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
    title: 'Hola, soy un componente de React'
};