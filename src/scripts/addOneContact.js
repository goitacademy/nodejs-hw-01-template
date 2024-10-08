import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    const fakeContact = createFakeContact();
    contacts.push(fakeContact);
    const contactsStringify = JSON.stringify(contacts, null, 2);
    fs.writeFile(PATH_DB, contactsStringify);
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();