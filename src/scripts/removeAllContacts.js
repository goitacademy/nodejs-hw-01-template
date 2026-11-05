import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    const removeContacts = [];
    await writeContacts(removeContacts);

};

removeAllContacts();
