import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = JSON.parse(await readContacts());
    contacts.pop();
    await writeContacts(JSON.stringify(contacts, undefined, contacts.length));
  } catch (e) {
    console.log(e);
  }
};

removeLastContact();