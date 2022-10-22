import { useState } from 'react';
import stl from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/slice';

const ContactsForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.phoneBook.contacts);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const findContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (name === '' || number === '') {
      return Notify.warning(`Fill in the fields to save the contact`);
    }

    if (findContact) {
      return Notify.warning(`${name} is already in the Phonebook`);
    }
    if (findContact) {
      return Notify.warning(`${number} is already in the Phonebook`);
    }
    dispatch(
      addContact({
        id: shortid.generate(),
        name: name,
        number: number,
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={stl.form} onSubmit={handleSubmit}>
      <label className={stl.form__label}>
        Name
        <input
          className={stl.form__input}
          type="text"
          name="name"
          placeholder="* fields are required"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label className={stl.form__label}>
        Number
        <input
          className={stl.form__input}
          type="tel"
          name="number"
          placeholder="* fields are required"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeInput}
        />
      </label>
      <button className={stl.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
