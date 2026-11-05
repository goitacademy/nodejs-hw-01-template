import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
            const readResult = await readContacts();
            readResult.push(createFakeContact());
            await writeContacts(readResult);
        } catch (error) {
            console.error("Не вийшло додати один контакт: ",error);
    }
};

addOneContact();
