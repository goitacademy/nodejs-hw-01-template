import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = JSON.parse(await readContacts());
    contacts.pop();
    await writeContacts(JSON.stringify(contacts, undefined, 2));
  } catch (e) {
    console.log(e);
  }
};

removeLastContact();