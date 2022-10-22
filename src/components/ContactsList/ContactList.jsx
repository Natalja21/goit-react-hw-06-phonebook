import stl from './ContactList.module.css';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import BtnDeleteAll from 'components/BtnDeleteAll/BtnDeleteAll';

const ContactsList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={stl.contactsList}>
        {contactsFiltered &&
          contactsFiltered.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
      {contacts.length > 0 && <BtnDeleteAll />}
    </>
  );
};

export default ContactsList;
