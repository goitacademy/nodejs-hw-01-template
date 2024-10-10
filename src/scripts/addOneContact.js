import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    const fakeContact = createFakeContact();
    const dataContacts = [...contacts, fakeContact];
    await writeContacts(JSON.stringify(dataContacts));
    } catch (error) {
    console.log(error);
  }
};

addOneContact();