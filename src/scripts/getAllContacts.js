import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    return readContacts();
};

console.log(await getAllContacts());
