import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';

const writeContactsToFile = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to db.json:', error);
  }
};
export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  const contactsWithoutLast = contacts.slice(0, -1);
  writeContactsToFile(contactsWithoutLast);
};

removeLastContact();
