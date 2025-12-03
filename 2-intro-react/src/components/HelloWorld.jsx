//use 'props' to receive properties from the parent component
//export function HelloWorld(props) {
//destructure the props to get the values directly
//asignar valor por defecto a title, pasar objetos y valores numericos, de esta menera se recibe cualquier tipo de dato por props
export const HelloWorld = ({user, id, title = 'default title',numero,direccion}) => {
    
    console.log(title)

    return (
            <>
                <h1>{title}</h1>
                {/*Usando props*/}
                {/*<div>que tal, {props.user}!! con el id {props.id}</div>*/}
                {/*Usando destructuring*/}
                <div>que tal, {user}!! con el id {id}</div>
                <div>numero: {numero + 3}</div>
                <div>direccion: {direccion.calle}, {direccion.number} (id: {direccion.id})</div>
            </>

    );
}
