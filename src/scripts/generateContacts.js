import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i += 1) {
      const fakeContact = createFakeContact();
      contacts.push(fakeContact);
    }
    const contactsStringify = JSON.stringify(contacts, null, 2);
    fs.writeFile(PATH_DB, contactsStringify);
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
