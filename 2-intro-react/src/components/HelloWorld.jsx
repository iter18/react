//use 'props' to receive properties from the parent component
//export function HelloWorld(props) {
//destructure the props to get the values directly
export const HelloWorld = ({user, id}) => {
    const name = 'Juan';

    return (
            <>
                <h1>Hello, World!</h1>
                {/*Usando props*/}
                {/*<div>que tal, {props.user}!! con el id {props.id}</div>*/}
                {/*Usando destructuring*/}
                <div>que tal, {user}!! con el id {id}</div>
            </>

    );
}
