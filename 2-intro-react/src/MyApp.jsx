import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails'; // Assuming User is another component you want to include
import { Book } from './components/Book';

export const MyApp = ({user, id, title,numero,direccion,book}) => {

    return (
            <>
                <Title title={title} />
                <UserDetails user={user} id={id} />
                <Book book={book} />
                <div>numero: {numero + 3}</div>
                <div>direccion: {direccion.calle}, {direccion.id}</div>
            </>

    );
};

MyApp.propTypes = {
    numero: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user : PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

MyApp.defaultProps = {
    title: 'Hola, soy un componente de React'
};