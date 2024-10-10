import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = JSON.parse(await readContacts());
    contacts.length = 0;
    await writeContacts(JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
};

removeAllContacts();