export const UserDetails = ({user,id}) => {
    return (
        <div>
            <h2>Detalles del usuario</h2>  
            <p>ID del usuario: {id}</p>
            <p>Nombre de usuario: {user.name}</p>
            <p>Correo electrónico: {user.email}</p>
        </div>
    );
};
