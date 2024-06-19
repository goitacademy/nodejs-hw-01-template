import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const writeContactsToFile = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to db.json:', error);
  }
};

const addOneContact = async () => {
  const existingContacts = await getAllContacts();

  const newContact = [];

  newContact.push(createFakeContact());

  const updatedContacts = existingContacts.concat(newContact);

  await writeContactsToFile(updatedContacts);

  console.log(`Successfully added one new contact.`);
};

addOneContact();
