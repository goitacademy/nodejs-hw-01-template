import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contactsResult = await readContacts();
    contactsResult.pop();
    await writeContacts(contactsResult);
};

removeLastContact();
