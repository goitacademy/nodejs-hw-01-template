import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const fakeContact = await createFakeContact();
    newContacts.push(fakeContact);
  }

  const db = JSON.parse(fs.readFile(PATH_DB));
  db.newContacts.push(...newContacts);

  fs.writeFile(PATH_DB, JSON.stringify(db, undefined, 2))
    .then(console.log)
    .catch(console.error);
};

generateContacts(5);

// createFakeContact
