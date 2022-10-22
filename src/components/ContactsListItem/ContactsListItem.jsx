import stl from './ContactsListItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';

const ContactsListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  return (
    <li className={stl.contactsList__item}>
      <p className={stl.contactsList__text}>
        {name}: {number}
      </p>
      <button
        className={stl.contactsList__btn}
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;
