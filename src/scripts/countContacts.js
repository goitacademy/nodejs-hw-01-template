import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contactsResult = await readContacts();
    return contactsResult.length;

};

console.log(await countContacts());
