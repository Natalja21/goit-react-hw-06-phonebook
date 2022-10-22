import { createSlice } from '@reduxjs/toolkit';
import json from '../components/data/contacts.json';

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
        contacts: json,
        filter: '',
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
        deleteAllContacts(state, action) {
            state.contacts = action.payload;
        },
    },
});
export const { addContact, setFilter, removeContact, deleteAllContacts } =
    phoneBookSlice.actions;
